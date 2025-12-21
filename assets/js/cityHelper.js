const inputDriveFrom = document.getElementById("driveFrom");
const ul_cityList = document.getElementById("ul_sityList");
const inputDriveTo = document.getElementById("driveTo");
const inputPhoneNumber = document.getElementById("phoneNumber");
const lstCity = [];
const resourceApi = fetch(`/assets/jsons/city.json`).then(r => r.json()).then(data => {
    lstCity.push(...data);
    const pm_from = new PopupMenu(inputDriveFrom, lstCity);
    new PopupMenu(inputDriveTo, lstCity);
});
const btn_messageChooser = document.querySelector(".listSocial-button");
pm_messager = new PopupMessager(btn_messageChooser);