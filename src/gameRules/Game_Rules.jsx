import { Typography, Paper,Container } from "@mui/material";
import './Game_Rules.css'

function Game_Rules(){
    return(
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
          Game Rules
        </Typography>
      </Container>
    </Paper>
    )
}

export default Game_Rules