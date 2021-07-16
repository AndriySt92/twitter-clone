 //@ts-ignore
import mailer =  require("../core/mailer")
import SendMessageInfo =  require("nodemailer/lib/sendmail-transport")

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
}: SendEmailProps, callback?: (err: Error | null, info: SendMessageInfo) => void) =>  {
 //@ts-ignore
 mailer.sendMail(
    {
        from: emailFrom,
        to: emailTo,
        subject:subject,
        html: html,
    },
    callback ||
    function (err: Error | null, info: SendMessageInfo) {
        if(err) {
            console.log(err)
        } else {
            console.log(info)
        }
    }
)
}