// ✅ Create GuestJoin.jsx to fix rendering flow and Guest path

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function GuestJoin() {
  const [meetingCode, setMeetingCode] = useState('');
  const [guestName, setGuestName] = useState('');
  const navigate = useNavigate();

  const handleJoin = () => {
    // Save guest name to localStorage or context if needed
    localStorage.setItem("guestName", guestName);
    navigate(`/${meetingCode}`);
  };

  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(to right, #667eea, #764ba2)',
      color: 'white',
      padding: '40px'
    }}>
      <h2 style={{ marginBottom: '20px' }}>Join as Guest</h2>

      <input
        type="text"
        placeholder="Enter Meeting Code"
        value={meetingCode}
        onChange={(e) => setMeetingCode(e.target.value)}
        style={{
          padding: '10px',
          marginBottom: '15px',
          borderRadius: '6px',
          width: '300px',
          border: 'none'
        }}
      />

      <input
        type="text"
        placeholder="Enter Your Name"
        value={guestName}
        onChange={(e) => setGuestName(e.target.value)}
        style={{
          padding: '10px',
          marginBottom: '25px',
          borderRadius: '6px',
          width: '300px',
          border: 'none'
        }}
      />

      <button
        onClick={handleJoin}
        style={{
          backgroundColor: '#FF9839',
          padding: '10px 20px',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer'
        }}
      >
        Join Meeting
      </button>
    </div>
  );
}
