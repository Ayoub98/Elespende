// Definition von Variablen, die in verschiedenen Methoden benötigt werden

const adresse = document.getElementById('adresse');
const plz = document.getElementById('plz');
const abholung = document.getElementById('abholung');
const kleidungsart = document.getElementById('kleidungsart');
const krisengebiet = document.getElementById('krisengebiet');

// Script für Kontakt.html

function check() {
    const besuchername = document.getElementById('name');
    const email = document.getElementById('email');
    const nachricht = document.getElementById('nachricht');
    if (besuchername.value === '' || besuchername == null) {
        alert('Sie müssen einen Namen eingeben!');
        return false;
    } else
    if (email == null || email.value === '') {
        alert('Bitte geben Sie eine gültige Email ein!');
        return false;
    } else
    if (nachricht == null || nachricht.value.length < 20) {
        alert('Ihre Nachricht ist zu kurz!');
    } else {
        alert('Ihre Nachricht wurde weitergeleitet. Vielen Dank!');
    }
}

// Script für Registrierung.html

function anpassen() {
    if (abholung.checked) {
        adresse.disabled = false;
        plz.disabled = false;
    } else {
        adresse.disabled = true;
        plz.disabled = true;
    }
}

function pruefe() {
    const uebergabe = document.getElementById('uebergabe');
    if (abholung.checked === false && uebergabe.checked === false) {
        alert('Bitte wählen Sie aus, wie Sie die Spende übergeben möchten.');
        return false;
    }
    if (abholung.checked) {
        if (adresse.value === '' || adresse == null) {
            alert('Bitte geben Sie eine Adresse ein!');
            return false;
        } else 
        if (plz.value === '' || plz == null) {
            alert('Bitte geben Sie eine Postleizahl ein!');
            return false;
        }
    }
    if (kleidungsart.value === '0') {
        alert('Bitte wählen Sie die Kleidungsart aus!');
        return false;
    }
    if (krisengebiet.value === '0') {
        alert('Bitte wählen Sie ein Krisengebiet aus!');
        return false;
    }
    if (checkPLZ() || uebergabe.checked) {
        window.location.replace("danke.html");
        ausfuellen();
    } else {
        alert('Die Abholadresse befindet sich leider nicht in unserer Nähe, daher kann die Abholung nicht erfolgen. Es tut uns leid!');
        return false;
    }
}

function checkPLZ() {
    return plz.value.substr(0, 2) === '70';
}

// Script für danke.html

function ausfuellen() {
    const trElement = document.getElementById('uebersicht-kleidungsart');
    const neueZelle = document.createElement('td');
    neueZelle.innerHTML = kleidungsart.value;
    trElement.appendChild(neueZelle);
}