const path = require('path');
const cors = require('cors');
const express = require('express');

const app = express();

const port = 8000;
app.use(cors());

app.use('/api', require('./api/routes'));
app.use(express.static('client/build'));
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(port, (req, res) => {
    console.log(`App listening on port:${port}`)
})