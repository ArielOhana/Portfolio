const nodemailer = require("nodemailer");
exports.formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, '0'); 
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const year = String(date.getFullYear()).slice(-2); 

    return `${day}-${month}-${year}`;
}
exports.sendEmail = async(recievedsubject,recievedtext) =>{
    try {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.MYEMAIL,
            pass: process.env.MYEMAIL_PASSWORD,
          },
          tls: {
            rejectUnauthorized: false,
          },
        });
    
        const mailOptions = {
          from:  process.env.MYEMAIL,
          to: process.env.EMAILSENDTO,
          subject: recievedsubject,
          text: recievedtext,
        };
    
        await transporter.sendMail(mailOptions);
        return true;
      } catch (error) {
        console.error('Email verification error:', error);
        return false;
      }
    }
