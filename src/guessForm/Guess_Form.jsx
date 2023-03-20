import React from "react";
import { TextField, Button } from "@mui/material";

function GuessForm(props) {
  const { feedback, systemSelectedWord, guess, onGuessChange, onSubmit } = props;
  return (
    <form className="guess-form" onSubmit={onSubmit}>
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
            onGuessChange(newGuessArr.join(""));
          }}
        />
      ))}
      <Button variant="contained" color="primary" type="submit">
        Guess
      </Button>
    </form>
  );
}

export default GuessForm;
