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
    const form = document.getElementById('login-form');
    const button = document.getElementById('signin');

    button.addEventListener("click", e => {
        e.preventDefault();
        const username = form.your_name.value;
        const password = form.your_pass.value;
        SUPERMERCATI.orderByChild("username").equalTo(username).on("value", snap => {
            if (snap.val() != null) {
                snap.forEach(child => {
                    sessionStorage.setItem("idSupermercato", child.key);
                    SUPERMERCATI.child(sessionStorage.getItem("idSupermercato")).child("password").on("value", snapshot => {
                        if (snapshot.val() == password) {
                            $.post('../setSessionVariables.php', { username: username, idSupermercato: sessionStorage.getItem("idSupermercato") });
                            window.location.href = "../inner-page.php";
                        } else {
                            document.getElementById('errore').innerHTML = "La password non è corretta";
                        }
                    })

                });
            } else {
                document.getElementById('errore').innerHTML = "L'utente non esiste";
            }
        });
    });
}