const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('hello world..한글');
});

app.get('/test', (req, res) => {
    res.json({
        name : 'Daniel-한글',
        city : 'Seoul',
        age : 30
    });
});

app.listen(3000);
console.log('server ready on port 3000');