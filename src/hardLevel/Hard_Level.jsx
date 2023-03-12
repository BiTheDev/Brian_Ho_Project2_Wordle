import { useState } from 'react'
import { useNavigate, Link, useLocation } from "react-router-dom";
import { Typography } from '@mui/material';
import './Hard_Level.css'

function Hard_Level(){
    return(<div className='hard_level'>
        <Typography variant="h1" component="h2">
          Hard_level
        </Typography>
    </div>)
}

export default Hard_Level