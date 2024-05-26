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
const TRANSAZIONE = CLIENTI.child(sessionStorage.getItem("idCliente")).child("Transazioni").child(sessionStorage.getItem("idTransazione"));
const PRODOTTI_T = TRANSAZIONE.child("Prodotti");
const SUPERMERCATI = firebase.database().ref('Supermercati').child(sessionStorage.getItem("idSupermercato"));
const PRODOTTI = SUPERMERCATI.child("Prodotti");

let quantitaP = [""];
let idProdotti = [""];


window.onload = function() {
    TRANSAZIONE.on("value", snap => {
        let data = "";
        let prezzoTot = 0;

        snap.forEach(info => {
            if (info.key == "data") {
                data = info.val();
            } else if (info.key == "prezzoFinale") {
                prezzoTot = info.val();
            }
        });

        document.getElementById("data").innerHTML = data;
        document.getElementById("prezzoFinale").innerHTML = prezzoTot.toString();

    });







    PRODOTTI_T.on("value", snap => {

        snap.forEach(element => {
            idProdotti.push(element.key);
            element.forEach(info => {
                if (info.key == "quantità") {
                    quantitaP.push(info.val());
                }
            });
        });

    });



    var counter = 0;
    var counterT = 1;
    var rowC = 0;




    PRODOTTI.on("value", snap => {
        snap.forEach(element => {
            idProdotti.forEach(id => {
                if (id == element.key) {
                    var descrizione = "";
                    var tipo = "";
                    var nome = "";
                    var prezzo = 0;

                    if (counter % 5 == 0) {
                        rowC++;
                        var newRow = `<div class="row inner-row" id="row${rowC}">`;
                        document.getElementById('getTransazioni').innerHTML += newRow;

                    }
                    counter++;
                    element.forEach(info => {
                        if (info.key == "nomeProdotto") {
                            nome = info.val();
                        } else if (info.key == "descrizione") {
                            descrizione = info.val();
                        } else if (info.key == "prezzo") {
                            prezzo = info.val();
                        } else if (info.key == "tipo") {
                            tipo = info.val();
                        }

                    });


                    if (descrizione != "") {
                        var addCard = `<div class="col" data-aos="zoom-in" data-aos-delay="200">
                            <div class="icon-box">
                                <div class="icon"><i class="zmdi zmdi-book"></i></div>
                                <h4><strong>ID: </strong>${element.key}</h4>
                                <div>
                                    <p><strong>Nome Prodotto: </strong> ${nome}<br>
                                    <strong>Prezzo Singolo: </strong> ${prezzo}<br>
                                    <strong>Quantità Acquistata: </strong> ${quantitaP[counterT]}<br>
                                    <strong>Tipo Prodotto: </strong> ${tipo}<br>
                                    <strong>Descrizione Prodotto: </strong> ${descrizione}<br>

                                    </p>
                                    
                                </div>
                            </div>
                        </div>`;
                    } else {
                        var addCard = `<div class="col" data-aos="zoom-in" data-aos-delay="200">
                            <div class="icon-box">
                                <div class="icon"><i class="zmdi zmdi-mall"></i></div>
                                <h4><strong>ID: </strong>${element.key}</h4>
                                <div>
                                    <p><strong>Nome Prodotto: </strong> ${nome}<br>
                                    <strong>Prezzo Singolo: </strong> ${prezzo}<br>
                                    <strong>Quantità Acquistata: </strong> ${quantitaP[counterT]}<br>
                                    <strong>Tipo Prodotto: </strong> ${tipo}
                                    </p>
                                    
                                </div>
                            </div>
                        </div>`;
                    }

                    document.getElementById(`row${rowC}`).innerHTML += addCard;
                    counterT++;
                }
            });
        });
    });
}