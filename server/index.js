import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.post('/signup', (req, res) => {
    const { username, email, password } = req.body;
    res.send('Signup route');
});

app.post('/signin', (req, res) => {
    const { username, password } = req.body;
    res.send('Signin route');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});