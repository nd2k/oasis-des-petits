import { GOOGLE_EMAIL, GOOGLE_PASSWORD } from '$env/static/private';
import nodemailer from 'nodemailer';

let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: GOOGLE_EMAIL,
        pass: GOOGLE_PASSWORD,
    },
});

transporter.verify(function(error, success) {
    if (error) {
        console.error(error);
    } else {
        console.log('Server is ready to send your messages');
        
    }
});

export default transporter;