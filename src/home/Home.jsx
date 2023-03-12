import { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Container, Typography, Paper } from "@mui/material";
import "./Home.css";
import Hard_Level from "../hardLevel/Hard_Level";
import Normal_Level from "../normalLevel/Normal_Level";

function Home() {
  return (
    <Paper variant="outlined">
      <Container maxWidth="xl">
        <Typography variant="h1" component="h2">
          Home
        </Typography>
        <Typography
            variant="h6"
            noWrap
            component="a"
            href="/level_hard"
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
            Hard
          </Typography>

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/level_normal"
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
            Normal
          </Typography>
      </Container>
    </Paper>
  );
}
export default Home;
