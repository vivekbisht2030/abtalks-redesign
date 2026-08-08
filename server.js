const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const ejsMate = require('ejs-mate');

const app = express();
app.set('view engine', 'ejs');
app.engine('ejs', ejsMate);
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set("views", path.join(__dirname, "views"));

// Helper function to read data.json safely
const readData = () => {
    const filePath = path.join(__dirname, 'data.json');
    if (!fs.existsSync(filePath)) {
        return { users: [], currentDay: {} };
    }
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(jsonData);
};

// 1. Landing Page ( / )
// The first experience for a student
app.get('/', (req, res) => {
    res.render('ejs/index.ejs');
});

// 2. Student Dashboard ( /dashboard )
// Includes current streak, today's task, progress, overall completion
app.get('/dashboard', (req, res) => {
    //
});

// 3. Challenge Day ( /day/12 )
app.get('/day/:dayNumber', (req, res) => {
    //
});







// Server Start
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
});