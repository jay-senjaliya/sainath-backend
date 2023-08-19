const { createTransport } = require('nodemailer');

const transporter = createTransport({
    // host: 'smtp.example.com',
    // port: 587,
    // secure: false,
    service: 'Gmail',
    auth: {
        user: 'jaysenjaliya@0070.com',
        // ucnxuzykjfcbzuut
        pass: 'taruna@0070'
    }
});

module.exports = transporter;