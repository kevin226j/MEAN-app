const nodemailer = require('nodemailer');
require('dotenv').config();

export const sendEmail = (req, res, next) => {

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            type: 'OAuth2',
            user: process.env.GMAIL_USERNAME,
            clientId: process.env.GMAILAPI_CLIENT_ID,
            clientSecret: process.env.GMAILAPI_CLIENT_SECRET,
            refreshToken: process.env.GMAILAPI_REFRESH_TOKEN,
            accessToken: process.env.GMAILAPI_ACCESS_TOKEN
        }
    });
    console.log(transporter.options);
    //Render email template w/ EJS
    res.render('email', null, (err, data)=> {
        if (err) {
            console.log(err);
        } else {
            let mail = {
                from: `John Doe <${process.env.GMAIL_USERNAME}>`, // sender address
                to: 'supercoolemail@mailinator.com', // list of receivers
                subject: 'Hello world! ✔', // Subject line
                html: data // html body
            };
            
            transporter.sendMail(mail, (err, info) => {
                if (err) console.log(err);
                transporter.close();
            });
            res.json({message: 'Successfully sent email!'})
            next();
        }
    })

}