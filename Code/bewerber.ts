
//import { JSONFilePreset } from "../node_modules/lowdb/lib/node.js";

namespace talentTalk {
    // Beispiel für Bewerberdaten


    interface Bewerber {
        pic: HTMLImageElement;
        name: string;
        adresse: string;
        mail: string;
        telefon: string;
        geburtstag: string;
        lastSchool: string;
        lastPosition: string;
        specials: string;
        references: string;
           // Zusätzliche Eigenschaften für Bewertungen und Notizen
        faehigkeiten: number;
        berufserfahrungen: number;
        softskills: number;
        mood: string;
        input: string;
    }

    //let pic: HTMLImageElement = <HTMLImageElement>document.getElementById("pic");
    let name: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("name");
    let adresse: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("adresse");
    let mail: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("mail");
    let telefon: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("telefon");
    let geburtstag: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("geburtstag");
    let lastSchool: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("lastSchool");
    let lastPosition: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("lastPosition");
    let specials: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("specials");
    let references: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("references");
    faehigkeiten: number;
        berufserfahrungen: number;
        softskills: number;
        mood: string;
        input: string;

    bewerberInfo();

    function bewerberInfo(): void {
        getData("bewerber.json");
    }

    async function getData(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url);
        let data: Bewerber[] = await response.json();

        handleBewerber(data);
    }

    function handleBewerber(data: Bewerber[]) {
        let bewerberName: string | null = new URLSearchParams(window.location.search).get("bewerber");
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
    let star1: HTMLElement = <HTMLElement>document.getElementById("star1");
    let star2: HTMLElement = <HTMLElement>document.getElementById("star2");
    let star3: HTMLElement = <HTMLElement>document.getElementById("star3");
    let mood: HTMLElement = <HTMLElement>document.getElementById("mood");
    let noteField: HTMLElement = <HTMLElement>document.getElementById("textInput");
    let unlockButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("noteButton");

    unlockButton.addEventListener('click', () => {
        console.log(unlockButton.innerText)
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
    })
} 