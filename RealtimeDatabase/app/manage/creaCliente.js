const firebaseConfig = {
    apiKey: "AIzaSyDoV7TkVu4b_gzOJnk28ObJVMISNE10gxI",
    authDomain: "fedelitysupermarket.firebaseapp.com",
    databaseURL: "https://fedelitysupermarket-default-rtdb.firebaseio.com",
    projectId: "fedelitysupermarket",
    storageBucket: "fedelitysupermarket.appspot.com",
    messagingSenderId: "279293796443",
    appId: "1:279293796443:web:b45baae038f936580d1f7e",
    measurementId: "G-PTLXBT0CX2"
};

firebase.initializeApp(firebaseConfig);

const CLIENTI = firebase.database().ref('Supermercati').child(sessionStorage.getItem("idSupermercato")).child('Clienti');

window.onload = function() {

    const submitButton = document.getElementById('create-btn');
    submitButton.addEventListener("click", e => {
        e.preventDefault();
        const nome = document.getElementById('nome').value;
        const cognome = document.getElementById('cognome').value;
        const dataNascita = document.getElementById('dataNascita').value;
        const sesso = document.getElementById('sesso').value;
        const provincia = document.getElementById('provincia').value;
        const comune = document.getElementById('comune').value;
        const indirizzo = document.getElementById('indirizzo').value;
        const email = document.getElementById('email').value;
        const telefono = document.getElementById('telefono').value;

        let higher;
        let check = true;
        if (nome != "" && cognome != "" && dataNascita != "" && sesso != "" && provincia != "" && comune != "" && indirizzo != "") {
            CLIENTI.on("value", snapshot => {
                snapshot.forEach(element => {
                    CLIENTI.child(element.key).on("value", snap => {
                        let checkCognome = true;
                        let checkNome = true;
                        let checkProvincia = true;
                        let checkComune = true;
                        let checkIndirizzo = true;
                        snap.forEach(info => {
                            if (info.key == "cognome" && info.val() == cognome) {
                                checkCognome = false;
                            } else if (info.key == "nome" && info.val() == nome) {
                                checkNome = false;
                            } else if (info.key == "provincia" && info.val() == provincia) {
                                checkProvincia = false;
                            } else if (info.key == "comune" && info.val() == comune) {
                                checkComune = false;
                            } else if (info.key == "indirizzo" && info.val() == indirizzo) {
                                checkIndirizzo = false;
                            }
                        });
                        if (!checkCognome && !checkNome && !checkProvincia && !checkComune && !checkIndirizzo) {
                            check = false;
                        } else {
                            checkCognome = true;
                            checkNome = true;
                            checkProvincia = true;
                            checkComune = true;
                            checkIndirizzo = true;
                        }
                    });
                });
                if (check) {
                    CLIENTI.limitToLast(1).on("value", snap => {
                        snap.forEach(element => {
                            if (higher == null) {
                                higher = parseInt(element.key) + 1;
                            }
                            if (element.key > higher) {
                                higher = parseInt(element.key) + 1;
                            }
                        });
                        if (higher == null) {
                            higher = 0;
                        }
                        if (email == "" && telefono == "") {
                            var infos = {
                                nome: nome,
                                cognome: cognome,
                                dataNascita: dataNascita,
                                sesso: sesso,
                                provincia: provincia,
                                comune: comune,
                                indirizzo: indirizzo
                            };
                        } else if (email != "" && telefono == "") {
                            var infos = {
                                nome: nome,
                                cognome: cognome,
                                dataNascita: dataNascita,
                                sesso: sesso,
                                provincia: provincia,
                                comune: comune,
                                indirizzo: indirizzo,
                                email: email
                            };
                        } else if (email == "" && telefono != "") {
                            var infos = {
                                nome: nome,
                                cognome: cognome,
                                dataNascita: dataNascita,
                                sesso: sesso,
                                provincia: provincia,
                                comune: comune,
                                indirizzo: indirizzo,
                                telefono: telefono
                            };
                        } else {
                            var infos = {
                                nome: nome,
                                cognome: cognome,
                                dataNascita: dataNascita,
                                sesso: sesso,
                                provincia: provincia,
                                comune: comune,
                                indirizzo: indirizzo,
                                email: email,
                                telefono: telefono
                            };
                        }
                        CLIENTI.child(higher).set(infos);
                        window.location.href = "inner-page.php";
                    });
                } else {
                    document.getElementById('errore').innerHTML = "E' già presente un cliente con questi dati";
                }
            });
        }
    });
};