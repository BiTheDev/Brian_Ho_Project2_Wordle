import React from "react";
import { useState } from "react";
import { TextField, Button } from "@mui/material";

function GuessForm(props) {
  const { feedback, systemSelectedWord, guess, onGuessChange, onSubmit } =
    props;
  const [newGuessArr, setNewGuessArr] = useState(Array(6).fill(""));

  const handleGuessChange = (event, index) => {
    const newValue = event.target.value.toLowerCase();
    const updatedArr = [...newGuessArr];
    updatedArr[index] = newValue;
    setNewGuessArr(updatedArr);
    props.onGuessChange(updatedArr.join(""));
  };

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
          value={newGuessArr[index]}
          onChange={(event) => handleGuessChange(event, index)}
        />
      ))}
      <Button variant="contained" color="primary" type="submit">
        Guess
      </Button>
    </form>
  );
}

export default GuessForm;
