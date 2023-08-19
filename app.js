const express = require('express');
const tourRouter = require('./routes/tourRoutes');
const cors = require('cors');
const path = require('path');
const mailController = require('./controller/mailController');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/v1/tour', tourRouter);
// app.post('/submit-inquiry', mailController.sendEmail);

// app.use(express.static(path.join(__dirname, "./build")));


// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, "./build/index.html"));
// })




module.exports = app;