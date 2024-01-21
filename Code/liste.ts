namespace talentTalk {
    // Beispiel für Bewerberdaten
    interface Bewerber {
        name: string;
    }

    listenInfo();

    function listenInfo(): void {
        getData("bewerber.json");
    }

    // Funktion, um Daten zu laden
    async function getData(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url);
        let data: Bewerber[] = await response.json();

        handleListe(data);
    }

    function handleListe(data: Bewerber[]) {
        let liste = document.getElementById('liste');

        //füge für jeden ein <li>-Element hinzu
        data.forEach(bewerber => {
            let listItem = document.createElement('li');
            listItem.innerHTML = bewerber.name;
            if (liste) {
                liste.appendChild(listItem);
            }
            listItem.addEventListener("click", () => { window.open("index.html?bewerber=" + bewerber.name, "_self") });
        });
    }


}
