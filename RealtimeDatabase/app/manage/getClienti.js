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
var counter = 0;
var rowC = 0;

CLIENTI.on("value", snap => {
    snap.forEach(element => {

        if (counter % 5 == 0) {
            rowC++;
            var newRow = `<div class="row inner-row" id="row${rowC}">`;
            document.getElementById('getClienti').innerHTML += newRow;
        }
        counter++;

        element.forEach(info => {
            if (info.key == "cognome") {
                cognome = info.val();
            } else if (info.key == "nome") {
                nome = info.val();
            }
        });

        var addCard = `<div class="col" data-aos="zoom-in" data-aos-delay="200">
            <div class="icon-box">
                <div class="icon"><i class="fas fa-user"></i></div>
                    <h4>${cognome} ${nome}</h4>
                    <div>
                        <form method="POST" action="setSessionVariables.php">
                            <input class="hide" value="${element.key}" name="idCliente" readonly>
                            <button type="submit" class="btn-learn-more" id="more${counter}">More</button>
                            <a class="btn-learn-more1" id="delete${element.key}">Delete</a>
                            <a class="btn-learn-more2" id="update${element.key}">Update</a>
                        </form>
                    </div>
                </div>
            </div>
        </div>`;


        document.addEventListener('click', function(e) {
            if (e.target && e.target.id == `delete${element.key}`) {
                const clienteDaEliminare = CLIENTI.child(`${element.key}`);
                clienteDaEliminare.remove();
                window.location.href = "inner-page.php";
            }
        });
        document.addEventListener('click', function(e) {
            if (e.target && e.target.id == `update${element.key}`) {
                sessionStorage.setItem("idToUpdate", element.key);
                window.location.href = "update.html";
            }
        });
        document.getElementById(`row${rowC}`).innerHTML += addCard;
    });
});