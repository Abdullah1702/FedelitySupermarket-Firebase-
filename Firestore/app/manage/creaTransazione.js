// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js";


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
  

// Initialize Firebase
    const app = initializeApp(firebaseConfig);
// get realtyme databse reference
// self. to let firebase be global from other modules
   const db = getFirestore(app);

   import {setDoc, collection, doc, getDocs, addDoc, getDoc } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js";
   console.log(sessionStorage.getItem("idCliente"));
   const CLIENTI = collection(db, "Super",sessionStorage.getItem("idSupermercato"), "Clienti");
   
const Prodotti = collection(db, "Prodotti");
const Cliente = doc(db, "Super", sessionStorage.getItem("idSupermercato"), "Clienti", sessionStorage.getItem("idCliente"));
const Transazioni = collection(db, "Super",sessionStorage.getItem("idSupermercato"), "Clienti", sessionStorage.getItem("idCliente"), "Transazioni");

var counterProducts = 0;
const selected = [];
var counterGen = 0;

window.onload = async function() {
    const aggiungiProdotto = document.getElementById('add-product');
    const prodottiSelezionati = document.getElementById('prodotti');
    const querySnapshot = await getDocs(Prodotti);
    querySnapshot.forEach(prod => {
        var data = prod.data()
        let options;
        options = `<option value="${prod.id}">${data.nomeProdotto}</options>`;
        document.getElementById("prezzo0").setAttribute("value", data.Prezzo);
        changeTotalPrice();
        document.getElementById("prodotto0").innerHTML += options;
    });






    // Pulsante che crea nuovi prodotti da aggiungere alla transazione (da finire)
    aggiungiProdotto.addEventListener("click", async e => {
        e.preventDefault();


        console.log(counterGen);

        console.log(selected.length);
        if (selected.length + 1 < counterGen) {
            var idSelected = $(`#prodotto${counterProducts}`).val();

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

            querySnapshot.forEach(prod => {
                var dati = prod.data()
                let isFirst = true;
                    if (!selected.includes(prod.id)) {
                        let option = document.createElement("option");
                        option.value = prod.id;
                                let text = document.createTextNode(dati.nomeProdotto);
                                option.append(text);
                            } else if (isFirst) {
                                prezzo.setAttribute("value", dati.Prezzo);
                                isFirst = false;
                            }
                        });
                        prodotti.append(option);

                    

        

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
    submitButton.addEventListener("click", async e => {
        e.preventDefault();

        const dataTransazione = document.getElementById('dataTransazione').value;
        const prezzoTotale = document.getElementById('prezzoTot').value;

        let higher;
        if (dataTransazione != "" && prezzoTotale != "") {
                const dataTransazione = document.getElementById('dataTransazione').value;
                const prezzoTotale = document.getElementById('prezzoTot').value;

                let infos = {
                    data: dataTransazione,
                    prezzoFinale: prezzoTotale
                };
                const DOCREF = doc(Transazioni) ;
                await setDoc(DOCREF, infos);
                console.log(counterProducts);
                for (let i = 0; i < counterProducts + 1; i++) {
                    let idProdotto = document.getElementById("prodotto" + i).value;
                    console.log(idProdotto);
                    let infos1 = {
                        quantità: document.getElementById("quantità" + i).value,
                    }
                    await setDoc(doc(db, "Super", sessionStorage.getItem("idSupermercato") ,"Clienti",sessionStorage.getItem("idCliente")  ,"Transazioni", DOCREF.id , "Prodotti", idProdotto), infos1);
                    
                }

                window.location.href = "client-page.php";

            

        }
    });
};
