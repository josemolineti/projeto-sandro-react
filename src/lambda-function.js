const functions = require('@google-cloud/functions-framework');
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

functions.http('sendMail', (req, res) => {
    try {
        const {mail, message} = req.body;
        const user = mail.split('@')[0];


        if (!mail || !message) {
            return res.status(400).send({
                error: 'O corpo da requisição deve conter o email e a mensabem',
            });
        }

        const msg = {
            to: mail,
            from: 'jemolineti@minha.fag.edu.br',
            subject: `Obrigado por entrar em contato com nosso suporte, ${user} `,
            text: message,
            html: `
  <strong>
    <div style="font-family: Arial, sans-serif; background-color: #f4f4f9; padding: 20px; border-radius: 8px; color: #333;">
      <h2 style="text-align: center; color: #4CAF50;">Obrigado pela sua mensagem!</h2>
      <p style="font-size: 16px; line-height: 1.6; text-align: justify;">
        Olá, ${user}<br><br>
        Recebemos sua mensagem: ${message} <br><br>
        Agradecemos pelo seu contato. Nossa equipe ira responder o mais rapido possível. 
        Ficamos felizes em receber sua mensagem e sempre buscamos proporcionar a melhor experiência para nossos usuarios
      </p>
      <p style="font-size: 16px; text-align: center; font-weight: bold; color: #FF5722; margin-top: 20px;">
        Atenciosamente, <br>
        Gado Expert
      </p>
    </div>
  </strong>
`

        };

        sgMail
            .send(msg)
            .then(() => {
                console.log('email enviado com sucesso ');
                res.status(200).send({ success: 'email enviado com sucesso' });
            })
            .catch((error) => {
                console.error('erro ao enviar o email ', error);
                res.status(500).send({
                    error: 'erro ao enviar o email',
                });
            });
    } catch (error) {
        console.error('erro geral ', error);
        res.status(500).send({
            error: 'erro inesperado',
        });
    }
});
