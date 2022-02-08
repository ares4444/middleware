const http = require('http');
const express = require('express');

const app = express();
const server = http.createServer(app);

const HOST = '127.0.0.1';
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hi');
});

server.listen(PORT, HOST, () => {
    console.log(`Listening on http://${HOST}:${PORT}`);
});
