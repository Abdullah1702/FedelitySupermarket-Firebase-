// For Firebase JS SDK v7.20.0 and later, measurementId is optional


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js";
import { collection, getDocs, doc, getDoc } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js"; 


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

console.log(sessionStorage.getItem("idSupermercato"));


let quantitaP = [""];
let idProdotti = [""];


const TRANSAZIONE = doc(db, "Super",sessionStorage.getItem("idSupermercato"), "Clienti", sessionStorage.getItem("idCliente"), "Transazioni", sessionStorage.getItem("idTransazione").toString());
const PRODOTTI_T = collection(db, "Super",sessionStorage.getItem("idSupermercato"), "Clienti", sessionStorage.getItem("idCliente"), "Transazioni", sessionStorage.getItem("idTransazione").toString(), "Prodotti");
const PRODOTTI = collection(db, "Prodotti");

console.log("ID CLIENTE:" + sessionStorage.getItem("idCliente"));
console.log(TRANSAZIONE);
const docTransazione = await getDoc(TRANSAZIONE);

console.log(sessionStorage.getItem("idTransazione").toString());

if(docTransazione.exists()){

    var dati = docTransazione.data();
    let data = dati.data;
    let prezzoTot = dati.prezzoFinale;
    
    document.getElementById("data").innerHTML = data;
    document.getElementById("prezzoFinale").innerHTML = prezzoTot.toString();



} else{
    console.log("non esiste");
}


 



    const querySnapshot = await getDocs(PRODOTTI_T);

    querySnapshot.forEach((doc) => {
        idProdotti.push(doc.id);
        var dati = doc.data();
        
        quantitaP.push(dati.quantità);

    });




    var counter = 0;
    var counterT = 1;
    var rowC = 0;

    const querySnapshot1 = await getDocs(PRODOTTI);

    querySnapshot1.forEach((doc) => {
        
        var dati = doc.data();


        idProdotti.forEach(id => {
            if (id == doc.id) {
                var descrizione = dati.descrizione;
                var tipo = dati.Tipo;
                var nome = dati.nomeProdotto;
                var prezzo = dati.Prezzo;

                if (counter % 5 == 0) {
                    rowC++;
                    var newRow = `<div class="row inner-row" id="row${rowC}">`;
                    document.getElementById('getTransazioni').innerHTML += newRow;

                }
                counter++;
                

                console.log(descrizione);
                if (descrizione != undefined) {
                    var addCard = `<div class="col" data-aos="zoom-in" data-aos-delay="200">
                        <div class="icon-box">
                            <div class="icon"><i class="zmdi zmdi-book"></i></div>
                            <h4><strong>ID: </strong>${doc.id}</h4>
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
                            <h4><strong>ID: </strong>${doc.id}</h4>
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



