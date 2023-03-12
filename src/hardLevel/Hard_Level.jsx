import { useState } from "react";
import { Typography, Paper,Container } from "@mui/material";
import "./Hard_Level.css";

function Hard_Level() {
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
          Hard Level
        </Typography>
      </Container>
    </Paper>
  );
}

export default Hard_Level