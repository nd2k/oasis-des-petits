import type { Actions } from './$types';
import transporter from '$lib/emailSetup';
import type { EmailMessage } from '$lib/interface';

export const actions = {
	default: async ({ request }) => {
		try {
			const formData = await request.formData();
			const name = formData.get('name');
			const firstName = formData.get('firstName');
			const email = formData.get('email');
			const phone = formData.get('phone');
			const textarea = formData.get('request');
			const html = `
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
				max-width: 600px;
				margin: 0 auto;
				padding: 20px;
				background-color: #f5ead0;
				border: 1px solid #e0e0e0;
				border-radius: 8px;
				}
				.header {
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding-bottom: 20px;
				border-bottom: 1px solid #ddd;
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
						<img src="cid:logo" alt="Logo" style="max-width: 150px;" />
						<h2>Nouvelle demande de renseignement</h2>
					</div>
					<div class="content">
						<h3>Bonjour Laura</h3>
						<p>Tu as reçu une nouvelle demande de renseignements de la part de <span class='info'>${firstName} ${name}</span>. Il est possible de contacter cette
						personne au numéro <a href=${phone}>${phone}</a> ou via mail - ${email}</p>
						<p>Ci-dessous son message: </p>
						<div class='textarea'>${textarea}</div>
					</div>
				</div>
			</body>`
			
			const message: EmailMessage = {
				from: 'infos@oasis-des-petits.be',
				to: 'nicolas.decat@gmail.com',
				subject: 'Demande de renseignements',
				html: html,
				attachments: [
					{
					  filename: "logo.png",
					  path: "static/logo.png", // Chemin local à ton projet
					  cid: "logo", // Identifiant unique pour l'image
					},
				  ],
			};
			console.log(message);
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
			return {
				success: "Email is sent"
			}
			} catch (error) {
				console.error(error);
			}
		}
} satisfies Actions;