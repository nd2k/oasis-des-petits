import { variables } from './variables';
import nodemailer from 'nodemailer';

let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: variables.googleEmail,
        pass: variables.googlePassword
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