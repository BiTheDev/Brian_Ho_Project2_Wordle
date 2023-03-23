
import { Container, Typography, Paper } from "@mui/material";
import "./Home.css";

function Home() {
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
          Wordle
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
              justifyContent: "center"
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
              justifyContent: "center"
            }}
          >
            Normal Level
          </Typography>
          
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/game_rules"
            sx={{
              mr: 2,
              display: "flex",
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              justifyContent: "center"
            }}
          >
            Game Rules
          </Typography>
      </Container>
    </Paper>
  );
}
export default Home;
