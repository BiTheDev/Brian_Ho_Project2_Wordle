import { useState } from "react";
import {
  Typography,
  Paper,
  Container,
  Button,
  Box,
  TextField,
} from "@mui/material";
// import { useDispatch, useSelector } from "react-redux";
import "./Normal_Level.css";
import GuessForm from "../guessForm/Guess_Form";

function Normal_Level() {
  const normalWordLst = [
    "Impair",
    "Pundit",
    "Hurtle",
    "Jovial",
    "Gambit",
    "Juggle",
    "Karma",
    "Hallow",
    "Fringe",
    "Lagoon",
  ];
  const getSystemSelectedWord = () => {
    return normalWordLst[Math.floor(Math.random() * normalWordLst.length)];
  };
  const [guessCount, setGuessCount] = useState(0);
  const [gameWon, setGameWon] = useState(false);
  const [typedWords, setTypedWords] = useState([]);
  const [guess, setGuess] = useState("");
  const [feedback, setFeedback] = useState([]);
  const [systemSelectedWord, setSystemSelectedWord] = useState(
    getSystemSelectedWord()
  );

  const handleGuess = (guess) =>{
    setGuess(guess)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const newFeedback = [];
    const wordArr = systemSelectedWord.toLowerCase().split("");
    const guessArr = guess.split("");
    let isCorrect = true;
    console.log(guessArr.length);
    console.log(wordArr.length);
    // check if the guess is the correct length
    if (guessArr.length !== wordArr.length) {
      newFeedback.push("Invalid guess length");
    } else {
      // check each letter of the guess against the word
      for (let i = 0; i < wordArr.length; i++) {
        if (guessArr[i] === wordArr[i]) {
          newFeedback.push("Correct");
        } else if (wordArr.includes(guessArr[i])) {
          newFeedback.push("Close");
          isCorrect = false;
        } else {
          newFeedback.push("Wrong");
          isCorrect = false;
        }
      }
      setTypedWords([...typedWords, guess]);
      if (isCorrect) {
        setGameWon(true);
        setSystemSelectedWord(getSystemSelectedWord);
      }
    }

    setFeedback(newFeedback);
    setGuess("");
    setGuessCount(guessCount + 1);
    const inputs = document.querySelectorAll("input");
    inputs.forEach((input) => (input.value = ""));
  };

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
        <Typography variant="h3" component="h3">
          Normal level
        </Typography>
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: "block", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
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
            display: { xs: "block", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
          }}
        >
          Game Rules
        </Typography>
        <Box>
          <Typography variant="body1" gutterBottom>
            Guess the 6-letter word:
          </Typography>
          <GuessForm
            feedback ={feedback}
            systemSelectedWord = {systemSelectedWord}
            guess = {guess}
            onGuessChange ={handleGuess}
            onSubmit = {handleSubmit}
          />
          {/* <form className="guess-form" onSubmit={handleSubmit}>
            {systemSelectedWord.split("").map((letter, index) => (
              <TextField
                key={index}
                type="text"
                maxLength="1"
                variant="outlined"
                size="small"
                readOnly={feedback.length > index}
                className={`guess-input ${feedback[index]}`}
                onChange={(event) => {
                  const newGuessArr = guess.split("");
                  newGuessArr[index] = event.target.value.toLowerCase();
                  setGuess(newGuessArr.join(""));
                }}
              />
            ))}

            <Button variant="contained" color="primary" type="submit">
              Guess
            </Button>
          </form> */}
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
              <Typography
                key={index}
                variant="body1"
                style={{ margin: "0 4px" }}
              >
                {item}
              </Typography>
            ))}
          </Box>
        </Box>
      </Container>
    </Paper>
  );
}

export default Normal_Level;
