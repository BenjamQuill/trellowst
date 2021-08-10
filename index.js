require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const apiRouter = require('./app/router');
const port = process.env.PORT || 5555;
const multer = require('multer');
const bodySanitizer = require('./app/middlewares/body-sanitizer');
const multipartParser = multer();

app.use(cors('*'));

app.use(express.urlencoded({
    extended: true,
}));

/**
 * Multer adds a body object and a file or files object to the request object. The body object contains the values of the text fields of the form, the file or files object contains the files uploaded via the form.
 */
app.use(multipartParser.none());

// middleware cleaning variables
app.use(bodySanitizer);

// assets sytatics (front side)
// app.use(express.static('assets'));

app.use(express.json());
app.use(apiRouter);
app.listen(port,() => console.log(`Server is running on http://localhost:${port}`));
    