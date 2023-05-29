function check() {
    var besuchername = document.getElementById('name');
    var email = document.getElementById('email');
    var nachricht = document.getElementById('nachricht');
    if (besuchername.value === '' || besuchername == null) {
        alert('Sie müssen einen Namen eingeben!');
        return false;
    }
    if (email == null || email.value === '') {
        alert('Bitte geben Sie eine gültige Email ein!')
        return false;
    }
    if (nachricht == null || nachricht.value.length < 20) {
        alert('Ihre Nachricht ist zu kurz!')
    }
}

var adresse = document.getElementById('adresse');
var plz = document.getElementById('plz');
var abholung = document.getElementById('abholung');


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
    if (abholung.checked) {
        if (checkAdresse()) {
            hh
        } else {
            alert('Sie sind leider nicht in unserer Nähe, daher kann die Abholung nicht erfolgen. Es tut uns leid!');
        }
    }
}

function checkAdresse() {
    return plz.value.substr(0, 2) === '70';
}
