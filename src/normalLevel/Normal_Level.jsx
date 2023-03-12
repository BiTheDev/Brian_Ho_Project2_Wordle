import { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { Typography } from "@mui/material";
import "./Normal_Level.css";

function Normal_Level() {
  return (
    <div className="normal_level">
      <Typography variant="h1" component="h2">
        Normal Level
      </Typography>
    </div>
  );
}

export default Normal_Level;
