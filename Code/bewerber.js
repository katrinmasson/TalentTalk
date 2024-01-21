"use strict";
//import { JSONFilePreset } from "../node_modules/lowdb/lib/node.js";
var talentTalk;
(function (talentTalk) {
    // Beispiel für Bewerberdaten
    //let pic: HTMLImageElement = <HTMLImageElement>document.getElementById("pic");
    let name = document.getElementById("name");
    let adresse = document.getElementById("adresse");
    let mail = document.getElementById("mail");
    let telefon = document.getElementById("telefon");
    let geburtstag = document.getElementById("geburtstag");
    let lastSchool = document.getElementById("lastSchool");
    let lastPosition = document.getElementById("lastPosition");
    let specials = document.getElementById("specials");
    let references = document.getElementById("references");
    //let faehigkeiten: HTMLElement = <HTMLElement>document.getElementById("faehigkeiten");
    //let berufserfahrungen: HTMLElement = <HTMLElement>document.getElementById("berufserfahrungen");
    //let softskills: HTMLElement = <HTMLElement>document.getElementById("softskills");
    //let textInput: HTMLInputElement = <HTMLInputElement>document.getElementById("textInput");
    bewerberInfo();
    function bewerberInfo() {
        getData("bewerber.json");
    }
    async function getData(_url) {
        let response = await fetch(_url);
        let data = await response.json();
        handleBewerber(data);
    }
    function handleBewerber(data) {
        let bewerberName = new URLSearchParams(window.location.search).get("bewerber");
        for (let i = 0; i < data.length; i++) {
            if (bewerberName != null && data[i].name == bewerberName) {
                //pic = data[i].pic;
                name.innerHTML = data[i].name;
                adresse.innerHTML = data[i].adresse;
                mail.innerHTML = data[i].mail;
                telefon.innerHTML = data[i].telefon;
                geburtstag.innerHTML = data[i].geburtstag;
                lastSchool.innerHTML = data[i].lastSchool;
                lastPosition.innerHTML = data[i].lastPosition;
                specials.innerHTML = data[i].specials;
                references.innerHTML = data[i].references;
            }
        }
    }
    //Bearbeitungsbereich entsperen und sperren
    let star1 = document.getElementById("star1");
    let star2 = document.getElementById("star2");
    let star3 = document.getElementById("star3");
    let mood = document.getElementById("mood");
    let noteField = document.getElementById("textInput");
    let unlockButton = document.getElementById("noteButton");
    unlockButton.addEventListener('click', () => {
        console.log(unlockButton.innerText);
        if (unlockButton.innerText == "Bearbeiten") {
            unlockButton.innerText = "Speichern";
            star1.classList.remove("lock");
            star2.classList.remove("lock");
            star3.classList.remove("lock");
            mood.classList.remove("lock");
            noteField.classList.remove("lock");
            console.log("HI");
        }
        else {
            //noteField.innerText = "Hello";
            //fs.writeFile("bewerber.json", data (error) =>)
            unlockButton.innerText = "Bearbeiten";
            star1.classList.add("lock");
            star2.classList.add("lock");
            star3.classList.add("lock");
            mood.classList.add("lock");
            noteField.classList.add("lock");
            console.log("HI2");
        }
    });
})(talentTalk || (talentTalk = {}));
//# sourceMappingURL=bewerber.js.map