import { Typography, Paper, Container } from "@mui/material";
import "./Game_Rules.css";

function Game_Rules() {
  return (
    <Paper
      variant="outlined"
      sx={{
        width: 400,
        height: 600,
        backgroundColor: "white",
      }}
    >
      <Container maxWidth="xl">
        <Typography variant="h2" component="h2">
          Game Rules
        </Typography>

        <Typography variant="h5" component="h5">
          Normal Level:
        </Typography>
        <Typography variant="body1" gutterBottom>
          - Guess a 6-letter word
        </Typography>
        <Typography variant="body1" gutterBottom>
          - You have 6 guesses
        </Typography>
        <Typography variant="h5" component="h5">
          Hard Level:
        </Typography>
        <Typography variant="body1" gutterBottom>
          - Guess a 7-letter word
        </Typography>
        <Typography variant="body1" gutterBottom>
          - You have 5 guesses
        </Typography>

        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: "flex",
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
            justifyContent: "center",
          }}
        >
          Return to Home
        </Typography>
        <Typography
          variant="h6"
          component="a"
          href="/level_hard"
          sx={{
            mr: 2,
            display: "flex",
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
            justifyContent: "center",
          }}
        >
          Hard Level
        </Typography>

        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/level_normal"
          sx={{
            mr: 2,
            display: "flex",
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
            justifyContent: "center",
          }}
        >Normal Level</Typography>
      </Container>
    </Paper>
  );
}

export default Game_Rules;
