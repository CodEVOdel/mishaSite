
mail = new MessageMail("Запрос цены по направление");
mailSender = new MailSender("uxqVrA6QswyNAcijQ", "service_hjge704", "template_pq82rgm");
const phone = document.getElementById("phoneNumber");
const inputMsgSender = document.getElementById("massager");
const btn_submit = document.getElementById("btn_submit_calculate");
const inputDriveFrom = document.getElementById("driveFrom");
const ul_cityList = document.getElementById("ul_sityList");
const inputDriveTo = document.getElementById("driveTo");
const inputPhoneNumber = document.getElementById("phoneNumber");
const lstCity = [];
const resourceApi = fetch(`./assets/jsons/city.json`).
    then(r => r.json()).then(data => {
        lstCity.push(...data);
        const pm_from = new PopupMenu(inputDriveFrom, lstCity);
        new PopupMenu(inputDriveTo, lstCity);
    });
const btn_messageChooser = document.querySelector(".listSocial-button");
pm_messager = new PopupMessager(btn_messageChooser);

phone.addEventListener("input", (e) => {
    console.log(e);
    phone.value = phone.value.replace(/\D/g, "");
});



function isFormValid(...fields) {
    fields.forEach(f=>console.log(f.value));
    return fields.every(f => f && f.value.trim() !== "");
}

function doEmptyInputs() {
    inputDriveFrom.value = "";
    inputDriveTo.value = "";
    phone.value = "";
}
    btn_submit.addEventListener("click", (e) => {
        e.preventDefault();
    
        let bodyMessage = `отправить информацию ${inputMsgSender.dataset.msg} по телефону ${phone.value}, \n 
                                    маршрут из ${inputDriveFrom.value} в ${inputDriveTo.value}`;
        mail.body = bodyMessage;
        if (!isFormValid(phone, inputDriveFrom, inputDriveTo)) {
            alert("Форма заполнена не полностью");
            return;
        }
        mailSender.send(mail).then(() => {
            doEmptyInputs();
        });
    });