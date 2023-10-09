require('dotenv').config();

import express from 'express';

const app = express();

// authtoken is the token from the auth endpoint
app.get('/offsets/:authtoken', (req, res) => {
    // TODO: Return all offsets
});

// authtoken is the token from the auth endpoint
app.get('/offsets/:id/:authtoken', (req, res) => {
    let id = req.params.id;
    // TODO: Return offset based on id from database
});

app.post('/auth', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    // TODO: Validate username and password
    // TODO: return auth token
});

app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`);
});