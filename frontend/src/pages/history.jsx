import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import { Paper, List, ListItem, ListItemText } from "@mui/material";

import { IconButton } from '@mui/material';
export default function History() {


    const { getHistoryOfUser } = useContext(AuthContext);

    const [meetings, setMeetings] = useState([])


    const routeTo = useNavigate();

    useEffect(() => {
        const fetchHistory = async () => {
            try {
                const history = await getHistoryOfUser();
                setMeetings(history);
            } catch {
                // IMPLEMENT SNACKBAR
            }
        }

        fetchHistory();
    }, [])

    let formatDate = (dateString) => {

        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, "0");
        const month = (date.getMonth() + 1).toString().padStart(2, "0")
        const year = date.getFullYear();

        return `${day}/${month}/${year}`

    }
return (
  <Box
    sx={{
      minHeight: "100vh",
      background: "linear-gradient(to right, #141e30, #243b55)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      p: 2,
    }}
  >
    <Paper
      elevation={10}
      sx={{
        p: 4,
        width: "100%",
        maxWidth: "600px",
        backgroundColor: "#ffffffcc",
        borderRadius: 4,
        backdropFilter: "blur(10px)",
      }}
    >
      <Typography variant="h4" gutterBottom align="center" sx={{ fontWeight: "bold" }}>
        Meeting History
      </Typography>

      {meetings.length === 0 ? (
        <Typography align="center" color="text.secondary">
          No meetings found.
        </Typography>
      ) : (
        <List>
          {meetings.map((meeting, index) => (
            <ListItem key={index} sx={{ borderBottom: "1px solid #ccc" }}>
              <ListItemText
                primary={`Meeting Code: ${meeting.meetingCode}`}
                secondary={`Date: ${new Date(meeting.date).toLocaleString()}`}
              />
            </ListItem>
          ))}
        </List>
      )}
    </Paper>
  </Box>
);
}
