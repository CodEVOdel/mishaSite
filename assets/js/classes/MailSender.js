class MessageMail {
    constructor(subject){
        this.subject = subject;
        this.body=""
    }
}
class MailSender {
    constructor(publicKey, serviceId, templateId) {
        this.serviceId = serviceId;
        this.templateId = templateId;
        emailjs.init(publicKey);
    }

    send(mail) {
        if (!(mail instanceof MessageMail)) {
            throw new Error("Аргумент должен быть экземпляром MessageMail");
        }
        const tempaleteVars={
            email:"avakyan.nikolay@gmail.com",
            subject: mail.subject,
            message: mail.body
        };
        return emailjs.send(this.serviceId, this.templateId, tempaleteVars).then(()=>{alert('Ваше сообщение отправлено, ожидайте ответа в ближайшие 5 мин');}).catch(err=>{console.error("Ошибка!!!!",err)}); 
    }
}