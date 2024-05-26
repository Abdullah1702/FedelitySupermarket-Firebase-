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
const PRODOTTI = SUPERMERCATI.child(sessionStorage.getItem("idSupermercato")).child('Prodotti');
const CLIENTI = SUPERMERCATI.child(sessionStorage.getItem("idSupermercato")).child('Clienti');
const CLIENTE_SELEZIONATO = CLIENTI.child(sessionStorage.getItem("idCliente"));
const TRANSAZIONI = CLIENTE_SELEZIONATO.child("Transazioni");

var counterProducts = 0;
const selected = [];
var counterGen = 0;


window.onload = function() {
    const aggiungiProdotto = document.getElementById('add-product');
    const prodottiSelezionati = document.getElementById('prodotti');

    PRODOTTI.on("value", snap => {
        snap.forEach(element => {
            counterGen++;
            console.log(counterGen);
            element.forEach(info => {
                let options;
                if (info.key == "nomeProdotto") {
                    options = `<option value="${element.key}">${info.val()}</options>`;
                } else if (info.key == "prezzo" && element.key == "0") {
                    document.getElementById("prezzo0").setAttribute("value", info.val());
                    changeTotalPrice();
                }

                document.getElementById("prodotto0").innerHTML += options;

            });
        });
    });






    // Pulsante che crea nuovi prodotti da aggiungere alla transazione (da finire)
    aggiungiProdotto.addEventListener("click", e => {
        e.preventDefault();


        console.log(counterGen);

        console.log(selected.length);
        if (selected.length + 1 < counterGen) {
            idSelected = $(`#prodotto${counterProducts}`).val();

            selected.push(idSelected);


            $(`#prodotto${counterProducts} option:not(:selected)`).attr('disabled', true);

            counterProducts++;

            let row = document.createElement("div");
            row.classList.add("row");
            row.classList.add("inner-row");

            let divProdotti = document.createElement("div");
            divProdotti.classList.add("col");
            divProdotti.setAttribute("data-aos", "zoom-in");
            divProdotti.setAttribute("data-aos-delay", "200");

            let divQuantity = document.createElement("div");
            divQuantity.classList.add("col");
            divQuantity.setAttribute("data-aos", "zoom-in");
            divQuantity.setAttribute("data-aos-delay", "200");

            let divPrezzo = document.createElement("div");
            divPrezzo.classList.add("col");
            divPrezzo.setAttribute("data-aos", "zoom-in");
            divPrezzo.setAttribute("data-aos-delay", "200");

            let prodotti = document.createElement("select");
            prodotti.classList.add("form-select");
            prodotti.setAttribute("id", "prodotto" + String(counterProducts));
            prodotti.setAttribute("onchange", "changeValue(this.id)");

            let prezzo = document.createElement("input");
            prezzo.classList.add("form-control");
            prezzo.setAttribute("type", "number");
            prezzo.setAttribute("id", "prezzo" + counterProducts);
            prezzo.setAttribute("readonly", "");

            PRODOTTI.on("value", snap => {
                let isFirst = true;
                snap.forEach(element => {
                    if (!selected.includes(element.key)) {
                        let option = document.createElement("option");
                        option.value = element.key;

                        element.forEach(info => {
                            if (info.key == "nomeProdotto") {
                                let text = document.createTextNode(info.val());
                                option.append(text);
                            } else if (info.key == "prezzo" && isFirst) {
                                prezzo.setAttribute("value", info.val());
                                isFirst = false;
                            }
                        });
                        prodotti.append(option);

                    }

                });
            });

            divProdotti.append(prodotti);

            let quantità = document.createElement("input");
            quantità.classList.add("form-control");
            quantità.setAttribute("type", "number");
            quantità.setAttribute("min", 1);
            quantità.setAttribute("value", 1);
            quantità.setAttribute("id", "quantità" + counterProducts);
            quantità.setAttribute("required", "");
            quantità.setAttribute("onchange", "priceChange(this.id)");

            divQuantity.append(quantità);

            divPrezzo.append(prezzo);

            row.append(divProdotti);
            row.append(divQuantity);
            row.append(divPrezzo);

            prodottiSelezionati.append(row);
            changeTotalPrice();
        }

    });

    const submitButton = document.getElementById('create-btn');
    submitButton.addEventListener("click", e => {
        e.preventDefault();

        const dataTransazione = document.getElementById('dataTransazione').value;
        const prezzoTotale = document.getElementById('prezzoTot').value;

        let higher;
        if (dataTransazione != "" && prezzoTotale != "") {
            TRANSAZIONI.limitToLast(1).on("value", snap => {
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
                const dataTransazione = document.getElementById('dataTransazione').value;
                const prezzoTotale = document.getElementById('prezzoTot').value;

                let infos = {
                    data: dataTransazione,
                    prezzoFinale: prezzoTotale
                };
                TRANSAZIONI.child(higher).set(infos);
                console.log(counterProducts);
                for (let i = 0; i < counterProducts + 1; i++) {
                    let idProdotto = document.getElementById("prodotto" + i).value;
                    TRANSAZIONI.child(higher).child("Prodotti").child(idProdotto).set({
                        quantità: document.getElementById("quantità" + i).value
                    });
                }

                window.location.href = "client-page.php";

            });

        }
    });
};

function changeValue(id) {
    let rowIndex = id.charAt(id.length - 1);
    let prodotto = document.getElementById(id).value;
    let quantità = document.getElementById("quantità" + rowIndex).value;
    PRODOTTI.child(prodotto).on("value", snap => {
        snap.forEach(element => {
            if (element.key == "prezzo") {
                document.getElementById("prezzo" + rowIndex).setAttribute("value", element.val() * quantità);
            }
        });
    });
    changeTotalPrice();
}

function priceChange(id) {
    let rowIndex = id.charAt(id.length - 1);
    let quantità = document.getElementById(id).value;
    let prodotto = document.getElementById("prodotto" + rowIndex).value;
    PRODOTTI.child(prodotto).on("value", snap => {
        snap.forEach(element => {
            if (element.key == "prezzo") {
                document.getElementById("prezzo" + rowIndex).setAttribute("value", element.val() * quantità);
            }
        })
    });
    changeTotalPrice();
}

function changeTotalPrice() {
    let prezzoTotale = 0.0;
    for (let i = 0; i < counterProducts + 1; i++) {
        prezzoTotale += parseFloat(document.getElementById("prezzo" + i).value);
    }
    document.getElementById("prezzoTot").setAttribute("value", prezzoTotale);
}