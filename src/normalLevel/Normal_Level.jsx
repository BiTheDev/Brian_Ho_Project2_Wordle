import { useState } from "react";
import { Typography, Paper, Container, Box, Button } from "@mui/material";
// import { useDispatch, useSelector } from "react-redux";
import "./Normal_Level.css";
import GuessForm from "../guessForm/Guess_Form";
import GuessFeedback from "../GuessFeedback/Guess_FeedBack";

function Normal_Level() {
  const normalWordLst = [
    "Impair",
    "Pundit",
    "Hurtle",
    "Jovial",
    "Gambit",
    "Juggle",
    "Unreal",
    "Hallow",
    "Fringe",
    "Lagoon",
  ];
  const getSystemSelectedWord = () => {
    return normalWordLst[Math.floor(Math.random() * normalWordLst.length)];
  };
  const [guessCount, setGuessCount] = useState(0);
  const maxGuessCount = 6;
  const [gameWon, setGameWon] = useState(false);
  const [gameLost, setGameLost] = useState(false);
  const [typedWords, setTypedWords] = useState([]);
  const [guess, setGuess] = useState("");
  const [feedback, setFeedback] = useState([]);
  const [systemSelectedWord, setSystemSelectedWord] = useState(
    getSystemSelectedWord()
  );

  const handleGuess = (guess) => {
    setGuess(guess);
  };

  const handleTryAgain = () => {
    window.location.reload();
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const newFeedback = [];
    const wordArr = systemSelectedWord.toLowerCase().split("");
    const guessArr = guess.split("");
    console.log(wordArr.length)
    console.log(guessArr.length)
    let isCorrect = true;
    // check if the guess is the correct length
    if (guessArr.length !== wordArr.length) {
      newFeedback.push("Invalid guess length");
    } else {
      let currentGuess = guessCount
      setGuessCount(currentGuess + 1);
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
      if (guessCount+1 === maxGuessCount) {
        setGameLost(true);
      }
    }

    setFeedback(newFeedback);
    setGuess("");
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
            feedback={feedback}
            systemSelectedWord={systemSelectedWord}
            guess={guess}
            onGuessChange={handleGuess}
            onSubmit={handleSubmit}
          />
          <GuessFeedback
            feedback={feedback}
            typedWords={typedWords}
            guessCount={guessCount}
          />
          {gameWon ? (
            <Box>
              <Typography variant="body1">
                Congratulations! Would you like to try again?
              </Typography>
              <Button type="button" onClick={handleTryAgain}>
                <span>Try Again</span>
              </Button>
            </Box>
          ) : null}
          {gameLost ? (
            <Box>
            <Typography variant="body1">
              Guess Count reached, would you like to try again?
            </Typography>
            <Button type="button" onClick={handleTryAgain}>
              <span>Try Again</span>
            </Button>
          </Box>
          ) : null}
        </Box>
      </Container>
    </Paper>
  );
}

export default Normal_Level;
