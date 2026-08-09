// const express = require('express');
// const cors = require('cors');
// const fs = require('fs');
// const path = require('path');
// const ejsMate = require('ejs-mate');

// const app = express();
// app.set('view engine', 'ejs');
// app.engine('ejs', ejsMate);
// const PORT = 3000;

// app.use((req, res, next) => {
//     req.next = next;
//     next();
// });

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));
// app.set("views", path.join(__dirname, "views"));

// // 1. Landing Page ( / )
// app.get('/', (req, res) => {
//     res.render('ejs/index.ejs');
// });

// // 2. Student Dashboard ( /dashboard )
// app.get('/dashboard', (req, res) => {
//     try {
//         const rawData = fs.readFileSync('./data.json', 'utf8');
//         const jsonData = JSON.parse(rawData);
        
//         // URL se userId uthao, agar na ho toh default 1 (Vivek)
//         const userId = req.query.userId || 1;
//         const currentUser = jsonData.users.find(u => u.id == userId) || jsonData.users[0];

//         res.render('ejs/dashboard.ejs', { user: currentUser });
//     } catch (err) {
//         console.error("Error reading data.json:", err);
//         res.status(500).send("Server Error");
//     }
// });
// // 3. Challenge Day ( /day/12 )
// app.get('/day/:dayNumber', (req, res) => {
//     res.render('ejs/day.ejs');
// });


// // Server Start
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`)
// });

const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const ejsMate = require('ejs-mate');

const app = express();
app.set('view engine', 'ejs');
app.engine('ejs', ejsMate);
const PORT = 3000;

app.use((req, res, next) => {
    req.next = next;
    next();
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set("views", path.join(__dirname, "views"));

// 1. Landing Page ( / )
app.get('/', (req, res) => {
    res.render('ejs/index.ejs');
});

// 2. Student Dashboard ( /dashboard )
app.get('/dashboard', (req, res) => {
    try {
        const rawData = fs.readFileSync('./data.json', 'utf8');
        const jsonData = JSON.parse(rawData);
        
        // URL se userId uthao, agar na ho toh default 1 (Vivek)
        const userId = req.query.userId || 1;
        const currentUser = jsonData.users.find(u => u.id == userId) || jsonData.users[0];

        res.render('ejs/dashboard.ejs', { user: currentUser });
    } catch (err) {
        console.error("Error reading data.json:", err);
        res.status(500).send("Server Error");
    }
});

// 3. Challenge Day / Progress Tracker ( /day/12 )
app.get('/day/:dayNumber', (req, res) => {
    try {
        const rawData = fs.readFileSync('./data.json', 'utf8');
        const jsonData = JSON.parse(rawData);
        
        // URL se userId uthao taaki jisne login kiya hai usi ka data day.ejs mein jaye
        const userId = req.query.userId || 1;
        const currentUser = jsonData.users.find(u => u.id == userId) || jsonData.users[0];

        res.render('ejs/day.ejs', { user: currentUser });
    } catch (err) {
        console.error("Error reading data.json:", err);
        res.status(500).send("Server Error");
    }
});

// Server Start
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
});