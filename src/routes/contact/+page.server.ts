import type { Actions } from './$types';
import nodemailer from 'nodemailer';
import type { DataContact, EmailMessage } from '$lib/interface';
import { redirect } from '@sveltejs/kit';
import { GOOGLE_EMAIL, GOOGLE_PASSWORD } from '$env/static/private';

let transporter = nodemailer.createTransport({
	host: 'smtp.gmail.com',
	port: 465,
	secure: true,
	auth: {
		user: GOOGLE_EMAIL,
		pass: GOOGLE_PASSWORD
	},
});

transporter.verify(function(error, success) {
	if (error) {
		console.error(error);
	}
	if (success) {
		console.log('Server is ready to send your messages');
	}
});

function createHtmlMessage(data: DataContact) {
	return `
    <!DOCTYPE html>
    <html lang="fr">
    <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Nouvelle Demande de renseignement</title>
    <style>
        body {
        font-family: Arial, sans-serif;
        font-size: 16px;
        line-height: 1.5;
        color: #333;
        margin: 0;
        padding: 0;
        }
        .email-container {
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
        background-color: #f5ead0;
        border: 1px solid #e0e0e0;
        border-radius: 8px;
        }
        .header {
        display: flex;
        align-items: center;
        justify-content: space-around;
        padding-bottom: 20px;
        border-bottom: 1px solid #ddd;
        }
        .header img {
        width: 5rem;
        height: 5rem;
        }
        .header h1 {
        font-size: 24px;
        margin: 0;
        color: #195d66;
        }
        .content {
        padding: 20px 0;
        }
        .content p {
        margin: 10px 0;
        }
        .content p .info {
        font-weight: bold;
        color: #195d66;
        }
        .content .textarea {
        border: 1px solid #195d66;
        border-radius: 1rem;
        padding: 0.5rem;
        }
    </style>
    </head>
    <body>
        <div class="email-container">
            <div class="header">
                <img src="https://oasis-des-petits.vercel.app/logo.png" alt="logo" />
                <h2>Nouvelle demande de renseignement - ${data.topic}</h2>
            </div>
            <div class="content">
                <h3>Bonjour Laura</h3>
                <p>Tu as reçu une nouvelle demande de renseignements de la part de <span class='info'>${data.firstName} ${data.name}</span>. Il est possible de contacter cette
                personne au numéro <a href="tel:${data.phone}">${data.phone}</a> ou via mail - ${data.email}</p>
                <p>Ci-dessous son message: </p>
                <div class='textarea'>${data.message}</div>
            </div>
        </div>
    </body>
    </html>`			
}

export const actions: Actions = {
	default: async ({ request }) => {
        console.log("call backend");
        
		try {
			const formData = await request.formData();
			const data = Object.fromEntries(formData);
			const html = createHtmlMessage(data);
			const message: EmailMessage = {
				from: 'infos@oasis-des-petits.be',
				to: GOOGLE_EMAIL,
				subject: 'Demande de renseignements',
				html: html
			};
			const sendEmail = async (message: EmailMessage) => {
				await new Promise((resolve, reject) => {
					transporter.sendMail(message, (err, info) => {
						if (err) {
							console.error(err);						
						} else {
							resolve(info)
						}
					})
				})
			}
			await sendEmail(message)
			redirect(303, '/')
		} catch (error) {
			console.error(error);
		}
	}
} satisfies Actions;

