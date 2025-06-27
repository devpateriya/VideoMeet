import React, { useContext, useState } from 'react';
import withAuth from '../utils/withAuth';
import { useNavigate } from 'react-router-dom';
import "../App.css";
import { Button, TextField } from '@mui/material';
import { AuthContext } from '../contexts/AuthContext';

function LandingPage() {
  const navigate = useNavigate();
  const [meetingCode, setMeetingCode] = useState("");

  const { addToUserHistory } = useContext(AuthContext);

  const handleJoinVideoCall = async () => {
    await addToUserHistory(meetingCode);
    navigate(`/${meetingCode}`);
  };

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", background: "#0f172a", color: "white", minHeight: "100vh" }}>
      {/* Navbar */}
      <nav style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 50px",
        background: "#111827",
        boxShadow: "0 4px 10px rgba(0,0,0,0.3)"
      }}>
        <h2 style={{ margin: 0, fontWeight: "bold", color: "#FF9839" }}>VideoMeet</h2>
        <div style={{ display: "flex", gap: "25px", alignItems: "center" }}>
         
          <p style={{ cursor: "pointer" }} onClick={() => navigate("/auth")}>Register</p>
          <Button variant="contained" style={{ background: "#FF9839", color: "#fff" }} onClick={() => navigate("/auth")}>
            Login
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "80px",
        background: "linear-gradient(to right, #1f2937, #374151)",
        flexWrap: "wrap"
      }}>
        <div style={{ flex: 1, minWidth: "300px" }}>
          <h1 style={{ fontSize: "3.2rem", lineHeight: 1.2 }}>
            <span style={{ color: "#FF9839" }}>Connect</span> with your loved ones
          </h1>
          <p style={{ marginTop: "20px", color: "#ccc", fontSize: "1.2rem" }}>
            High-quality, secure, and real-time video calling platform.
          </p>
          <Button
            variant="contained"
            style={{
              marginTop: "30px",
              background: "#FF9839",
              padding: "12px 30px",
              fontSize: "1rem",
              fontWeight: "bold",
              color: "white",
              borderRadius: "8px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.4)"
            }}
            onClick={() => navigate("/auth")}
          >
            Get Started
          </Button>
        </div>

        <div style={{ flex: 1, display: "flex", justifyContent: "center", marginTop: "30px" }}>
          <img src="/mobile.png" alt="Video preview" style={{
            width: "350px",
            borderRadius: "20px",
            boxShadow: "0 6px 30px rgba(0,0,0,0.5)",
            transform: "rotate(-5deg)"
          }} />
        </div>
      </div>

      {/* Meeting Join Section */}
      <div style={{
        padding: "60px",
        background: "#111827",
        textAlign: "center"
      }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>Already Have a Meeting Code?</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
          <TextField
            variant="outlined"
            label="Meeting Code"
            onChange={(e) => setMeetingCode(e.target.value)}
            sx={{
              backgroundColor: "white",
              borderRadius: "8px",
              width: "300px"
            }}
          />
          <Button
            onClick={handleJoinVideoCall}
            variant="contained"
            style={{
              background: "#FF9839",
              padding: "12px 24px",
              color: "white",
              fontWeight: "bold",
              borderRadius: "8px"
            }}
          >
            Join Meeting
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer style={{
        background: "#0f172a",
        padding: "40px",
        textAlign: "center",
        color: "#aaa",
        borderTop: "1px solid #444"
      }}>
        <p style={{ margin: 0 }}>Contact: support@videomeet.com</p>
        <p>© {new Date().getFullYear()} Dummy Video Conferencing</p>
      </footer>
    </div>
  );
}
export default LandingPage;
