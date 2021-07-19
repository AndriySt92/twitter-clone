
import { transport } from "../core/mailer"
// import SendmailTransport =  require("nodemailer/lib/sendmail-transport")

interface SendEmailProps {
    emailFrom: string;
    emailTo: string;
    subject:string;
    html:string;
}

export const sendEmail = ({
    emailFrom,
    emailTo,
    subject,
    html,
}: SendEmailProps, callback?: (err: Error | null) => void) =>  {
 
transport.sendMail(
    {
        from: emailFrom,
        to: emailTo,
        subject:subject,
        html: html,
    },
    callback ||
    function (err: Error | null) {
        if(err) {
            console.log(err)
        } else {
            console.log()
        }
    }
)
}