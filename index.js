require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const apiRouter = require('./app/router');
const port = process.env.PORT || 5555;

app.use(cors());
app.use(express.json());
app.use(, apiRouter);
app.listen(port,() => console.log(`Server is running on http://localhost:${port}`));
    