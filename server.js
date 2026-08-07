const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
app.set('view engine', 'ejs');
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// 1. Landing Page ( / )
// The first experience for a student
app.get('/', (req, res) => {
    // 
    res.send('Landing Page Content Will Go Here');
});

// 2. Student Dashboard ( /dashboard )
// Includes current streak, today's task, progress, overall completion
app.get('/dashboard', (req, res) => {
    // 
    res.send('Dashboard Data/Page Will Go Here');
});

// 3. Challenge Day ( /day/12 )
app.get('/day/:dayNumber', (req, res) => {
    const day = req.params.dayNumber;
    // 
    res.send(`Challenge Day ${day} Content Will Go Here`);
});







// Server Start
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
});