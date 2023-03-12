import { useState } from "react";
import { Typography, Paper,Container } from "@mui/material";
import "./Normal_Level.css";

function Normal_Level() {
  return (
    <Paper 
    variant="outlined"
    sx={{
        width: 400,
        height: 600,
        backgroundColor: 'white',
      }}
    >
      <Container maxWidth="xl">
        <Typography variant="h1" component="h2">
          Normal level
        </Typography>
      </Container>
    </Paper>
  );
}

export default Normal_Level;
