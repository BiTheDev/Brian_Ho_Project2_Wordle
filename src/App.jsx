import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Hard_Level from './hardLevel/Hard_Level';
import Normal_Level from './normalLevel/Normal_Level';
import Home from './home/Home';
import { Container } from '@mui/material';
import './App.css'
import Game_Rules from './gameRules/Game_Rules';

function App() {

  return (
    <BrowserRouter>
    <Container maxWidth="xl">
        <Routes>
        <Route path="/" element={<Home/>} exact />
        <Route path="/level_hard" element={<Hard_Level />} exact />
        <Route path="/level_normal" element={<Normal_Level />} exact />
        <Route path="/game_rules" element={<Game_Rules />} exact />
        </Routes>
      </Container>
    </BrowserRouter> 
  )
}

export default App
