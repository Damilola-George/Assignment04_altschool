const express = require("express");
const morgan = require("morgan");
const app = express();

const PORT = 8000;
//using morgan as a global simple logger
app.use(morgan('dev'));
const authorRoute = require('./routes/Author')

app.use('/author', authorRoute)





app.listen(PORT, () => {
    console.log("Server running on port", PORT);
});