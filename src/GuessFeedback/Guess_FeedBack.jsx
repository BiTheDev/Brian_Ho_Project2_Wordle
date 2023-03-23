import { Box, Typography } from "@mui/material";
import "./Guess_Feedback.css";

function GuessFeedback(props) {
  const { feedback, typedWords, guessCount } = props;

  return (
    <Box>
      {/* <Box className="feedback">
        {feedback.map((item, index) => (
          <Typography
            key={index}
            variant="body1"
            className={
              item === "Correct"
                ? "correct feedback-item"
                : item === "Wrong"
                ? "wrong feedback-item"
                : "close feedback-item"
            }
            style={{ margin: "0 4px" }}
          >
            {item}
          </Typography>
        ))}
      </Box> */}
      <Box>
        <Typography variant="h6" component="h6">
          Guessed Words
        </Typography>
        <Typography variant="body2">Guessed Count : {guessCount}</Typography>
        {typedWords.map((word, wordIndex) => (
          <Typography key={wordIndex} variant="body1">
            {word}
          </Typography>
        ))}
      </Box>
    </Box>
  );
}


export default GuessFeedback;
