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

const SUPERMERCATI = firebase.database().ref('Supermercati');

window.onload = function() {
    const form = document.getElementById('register-form');
    const button = document.getElementById('signup');

    button.addEventListener("click", e => {
        e.preventDefault();
        const username = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const citta = document.getElementById('citta').value;
        const indirizzo = document.getElementById('text').value;
        const password = document.getElementById('pass').value;
        const confirmPassword = document.getElementById('re_pass').value;

        let higher;
        let check = true;
        if (username != "" && email != "" && password != "" && confirmPassword != "") {
            SUPERMERCATI.on("value", snapshot => {
                snapshot.forEach(element => {
                    SUPERMERCATI.child(element.key).on("value", snap => {
                        snap.forEach(info => {
                            if (info.key == "username" && info.val() == username) {
                                check = false;
                            }
                        });
                    });
                });
                if (check) {
                    if (password == confirmPassword) {
                        SUPERMERCATI.limitToLast(1).on("value", snap => {
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
                            if (citta == "" && indirizzo == "") {
                                var infos = {
                                    username: username,
                                    email: email,
                                    password: password
                                };
                            } else if (citta != "" && indirizzo == "") {
                                var infos = {
                                    username: username,
                                    email: email,
                                    password: password,
                                    città: citta
                                };
                            } else if (citta == "" && indirizzo != "") {
                                var infos = {
                                    username: username,
                                    email: email,
                                    password: password,
                                    indirizzo: indirizzo
                                };
                            } else {
                                var infos = {
                                    username: username,
                                    email: email,
                                    password: password,
                                    città: citta,
                                    indirizzo: indirizzo
                                };
                            }
                            SUPERMERCATI.child(higher).set(infos);
                            window.location.href = "../index.php";
                        });
                    } else {
                        document.getElementById('errore').innerHTML = "La password di conferma non è uguale a quella inserita";
                    }
                } else {
                    document.getElementById('errore').innerHTML = "E' già presente un utente con questi dati";
                }
            });
        }
    });
};