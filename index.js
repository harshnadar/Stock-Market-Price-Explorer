const express = require('express');
const app = express();

const port = 8000;


app.use('/api', require('./routes'));

app.listen(port, (req, res) => {
    console.log(`App listening on port:${port}`)
})