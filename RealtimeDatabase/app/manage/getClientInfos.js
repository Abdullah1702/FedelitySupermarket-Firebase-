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
const CLIENTE_SELEZIONATO = CLIENTI.child(sessionStorage.getItem("idCliente"));


CLIENTE_SELEZIONATO.on("value", snap => {
    let cognome = "";
    let nome = "";
    let dataNascita = "";
    let provincia = "";
    let comune = "";
    let indirizzo = "";
    let email = "";
    let telefono = "";
    snap.forEach(info => {
        if (info.key == "cognome") {
            cognome = info.val();
        } else if (info.key == "nome") {
            nome = info.val();
        } else if (info.key == "dataNascita") {
            dataNascita = info.val();
        } else if (info.key == "provincia") {
            provincia = info.val();
        } else if (info.key == "comune") {
            comune = info.val();
        } else if (info.key == "indirizzo") {
            indirizzo = info.val();
        } else if (info.key == "email") {
            email = info.val();
        } else if (info.key == "telefono") {
            telefono = info.val();
        }
    });

    document.getElementById("nominativo").innerHTML = cognome + " " + nome;
    if (Boolean(email)) {
        document.getElementById("email").innerHTML = email;
    } else {
        document.getElementById("email").innerHTML = "(Non inserito)";
    }
    document.getElementById("data_nascita").innerHTML = dataNascita;
    if (Boolean(telefono)) {
        document.getElementById("telefono").innerHTML = telefono;
    } else {
        document.getElementById("telefono").innerHTML = "(Non inserito)";
    }
    document.getElementById("indirizzo").innerHTML = indirizzo + ", " + comune + " (" + provincia + ")";
});




var counter = 0;
var rowC = 0;
const TRANSAZIONI = CLIENTE_SELEZIONATO.child("Transazioni");
TRANSAZIONI.on("value", snap => {
    snap.forEach(element => {

        let data = "";
        let prezzoFinale = 0;

        if (counter % 5 == 0) {
            rowC++;
            var newRow = `<div class="row inner-row" id="row${rowC}">`;
            document.getElementById('getTransazioni').innerHTML += newRow;
        }
        counter++;

        element.forEach(info => {
            if (info.key == "data") {
                data = info.val();
            } else if (info.key == "prezzoFinale") {
                prezzoFinale = info.val();
            }
        });

        var addCard = `<div class="col" data-aos="zoom-in" data-aos-delay="200">
                <div class="icon-box">
                    <div class="icon"><i class="zmdi zmdi-book"></i></div>
                    <h4><strong>ID: </strong>${element.key}</h4>
                    <div>
                        <form method="POST" action="setSessionVariables.php">
                            <input class="hide" value="${element.key}" name="idTransazione" readonly>
                            <button type="submit" onclick="addTToSes(${element.key})" class="btn-learn-more" id="moreT${counter}">More</button>
                            <a href="client-page.php" class="btn-learn-more1" id="deleteT${element.key}">Delete</a>
                        </form>
                        
                    </div>
                </div>
            </div>`;


        document.addEventListener('click', function(e) {
            if (e.target && e.target.id == `deleteT${element.key}`) {
                const transazioneDaEliminare = TRANSAZIONI.child(`${element.key}`);
                transazioneDaEliminare.remove();
            }
        });
        document.getElementById(`row${rowC}`).innerHTML += addCard;
    });
});

function addTToSes(idToAdd) {
    sessionStorage.setItem("idTransazione", idToAdd);
}