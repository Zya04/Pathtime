const express = require('express');
const morgan = require('morgan');
const path = require('path');

const port = process.env.PORT || 8081;
const app = express();

app.use(express.static(__dirname + '/public'))
app.use(morgan("dev"));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.listen(port, () => {
    console.log(`App running on port ${port}`);
});