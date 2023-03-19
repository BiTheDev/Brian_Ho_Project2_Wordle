import { useState } from "react";
import { Typography, Paper,Container } from "@mui/material";
import "./Hard_Level.css";

function Hard_Level() {
    const hardWordList = ['Scuttle', 'Distort', 'Stipend', 'Candida', 'Glimmer', 'Nostalg', 'Porous', 'Tension', 'Vanquish', 'Whimsy']
    const systemSelect = hardWordList[Math.floor(Math.random() * hardWordList.length)]
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
        <Typography variant="h3" component="h3">
          Hard Level
        </Typography>

        <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Return to Home
          </Typography>
        <Typography
            variant="h6"
            noWrap
            component="a"
            href="/game_rules"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Game Rules
          </Typography>
      </Container>
    </Paper>
  );
}

export default Hard_Level