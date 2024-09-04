const express = require('express');
const path = require('path');
const session = require('express-session');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const { savePetData } = require('./services/petController');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;
const usersFile = path.join(__dirname, 'data','login.txt');
const petsFile = path.join(__dirname, 'data','pets.txt');

// Middleware Setup
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false } 
}));

// MongoDB connection
mongoose.connect('mongodb+srv://jjyu4672:WEInitiaohu136@cluster0.1abda.mongodb.net/petAdoption', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Define a Schema and Model to store contact information
const messageSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
    date: { type: Date, default: Date.now }
});

const Message = mongoose.model('Message', messageSchema);

// Helper Functions
const readData = (file, callback) => {
    fs.readFile(file, 'utf8', (err, data) => {
        if (err) return callback(err);
        const lines = data.trim().split('\n');
        const result = lines.map(line => line.split(':'));
        callback(null, result);
    });
};

const writeData = (file, data, callback) => {
    const formattedData = data.map(entry => entry.join(':')).join('\n');
    fs.writeFile(file, formattedData, 'utf8', callback);
};

// API Routes for your application
// Route for user registration
app.post('/register', (req, res) => {
    const { username, password } = req.body;
    const userRegex = /^[A-Za-z0-9]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,}$/;

    if (!userRegex.test(username) || !passwordRegex.test(password)) {
        return res.status(400).send('Invalid username or password format.');
    }
    readData(usersFile, (err, users) => {
        if (err) return res.status(500).send('Server error.');
        const usernameExists = users.some(line => line[0] === username);

        if (usernameExists) {
            return res.status(400).send('Username already exists.');
        }

        const hashedPassword = bcrypt.hashSync(password, 10);
        fs.appendFile(usersFile, `${username}:${hashedPassword}\n`, (err) => {
            if (err) return res.status(500).send('Server error.');
            res.send('Account created successfully.');
        });
    });
});

// Route for user login
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    readData(usersFile, (err, users) => {
        if (err) return res.status(500).send('Server error.');
        const user = users.find(u => u[0] === username);
        if (user && bcrypt.compareSync(password, user[1])) {
            req.session.user = username;
            res.redirect('/');  // Redirect to home or main page after login
        } else {
            res.status(401).send('Invalid username or password.');
        }
    });
});

// Route for logging out
app.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) return res.status(500).send('Failed to logout.');
        res.send('Logout successful. <a href="/login">Log in again</a>');
    });
});

// Route for handling contact form submissions
app.post('/contact', async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const newMessage = new Message({ name, email, message });
        await newMessage.save();
        res.send('Message sent successfully!');
    } catch (error) {
        res.status(500).send('Error saving message: ' + error.message);
    }
});

// Route for fetching and saving pet data
app.get('/fetch-and-save-pets', savePetData);

// Catch-all Route to serve React app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});