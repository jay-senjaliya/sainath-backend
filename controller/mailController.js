const transporter = require('./../utils/email').default;
// const { sendMail } = require('nodemailer');

exports.sendEmail = (req, res) => {
    // Extract form data from request body
    const { uname, email, mno, tname, message } = req.body;

    // Create the email content
    const mailOptions = {
        from: 'jaysenjaliya0070@gmail.com',
        to: 'jdsenjaliya7990@gmail.com',
        subject: 'Inquiry from Website',
        text: `Name: ${uname}\nEmail: ${email}\nMessage: ${message}\nMobile No: ${mno}\nTour Name: ${tname}`
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error occurred:', error);
            res.status(500).json({ success: false, error: 'Failed to send inquiry' });
        } else {
            console.log('Email sent:', info.response);
            res.status(200).json({ success: true, message: 'Inquiry sent successfully' });
        }
    });
};