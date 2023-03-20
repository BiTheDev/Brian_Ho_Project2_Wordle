import React from "react";
import { Box, Typography } from "@mui/material";

function GuessFeedback(props) {
  const {feedback, typedWords} = props;

  return (
    <Box>
      <Box className="feedback">
        {feedback.map((item, index) => (
          <Typography
            key={index}
            variant="body1"
            className={
              item === "Correct"
                ? "correct"
                : item === "Wrong"
                ? "wrong"
                : "close"
            }
            style={{ margin: "0 4px" }}
          >
            {item}
          </Typography>
        ))}
      </Box>
      <Box>
        <Typography variant="h6" component="h6">
          Guessed Words
        </Typography>
        {typedWords.map((item, index) => (
          <Typography key={index} variant="body1" style={{ margin: "0 4px" }}>
            {item}
          </Typography>
        ))}
      </Box>
    </Box>
  );
}

export default GuessFeedback;
