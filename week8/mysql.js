// app.js

const express = require('express');
const app = express();

const koneksi = require('./mysql');

app.get('/', (req, res) => {

    koneksi.query('SELECT * FROM users', (err, result) => {

        if (err) {
            return res.send(err);
        }

        res.json(result);
    });

});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});