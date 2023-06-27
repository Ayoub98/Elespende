// Definition von Variablen, die in verschiedenen Methoden benötigt werden.

adresse = document.getElementById('adresse');
plz = document.getElementById('plz');
abholung = document.getElementById('abholung');
spende = {art:'', gebiet:''};

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
    const kleidungsart = document.getElementById('kleidungsart').value;
    const krisengebiet = document.getElementById('krisengebiet').value;

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
    if (kleidungsart === '0') {
        alert('Bitte wählen Sie die Kleidungsart aus!');
        return false;
    }
    if (krisengebiet === '0') {
        alert('Bitte wählen Sie ein Krisengebiet aus!');
        return false;
    }
    if (checkPLZ() || uebergabe.checked) {
        let datum = new Date();
        localStorage.setItem('kleidungsart', kleidungsart);
        localStorage.setItem('krisengebiet', krisengebiet);
        localStorage.setItem('datum', datum.toLocaleDateString('de-DE'));
        localStorage.setItem('uhrzeit', datum.getHours() + ':' + datum.getMinutes() + ' Uhr');
        window.location.replace('danke.html');
    } else {
        alert('Die Abholadresse befindet sich leider nicht in unserer Nähe, daher kann die Abholung nicht erfolgen. Es tut uns leid!');
        return false;
    }
}

function checkPLZ() {
    return plz.value.substr(0, 2) === '70';
}

function registriereSpende() {
}

// Script für danke.html

function ausfuellen() {
    document.getElementById('uebersicht-kleidungsart').innerHTML = localStorage.getItem('kleidungsart');
    document.getElementById('uebersicht-krisengebiet').innerHTML = localStorage.getItem('krisengebiet');
    document.getElementById('datum').innerHTML = localStorage.getItem('datum');
    document.getElementById('uhrzeit').innerHTML = localStorage.getItem('uhrzeit');
    localStorage.clear();
}

