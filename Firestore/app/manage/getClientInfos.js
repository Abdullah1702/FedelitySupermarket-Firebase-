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

import {doc, getDoc, deleteDoc, getDocs, collection} from "https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js";

console.log(sessionStorage.getItem("idSupermercato"));
const Cliente = doc(db, "Super", sessionStorage.getItem("idSupermercato"), "Clienti", sessionStorage.getItem("idCliente"));
const DocCliente = await getDoc(Cliente);
if(DocCliente.exists()){
    var data = DocCliente.data();
    var cognome = data.cognome;
    var nome = data.nome;
    var dataNascita = data.dataNascita;
    var provincia = data.provincia;
    var comune = data.comune;
    var indirizzo = data.indirizzo;
    var email = data.email;
    var telefono = data.telefono;

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
}else{
    console.log("non esiste");
}


var counter = 0;
var rowC = 0;
const Transazioni = collection(db, "Super",sessionStorage.getItem("idSupermercato"), "Clienti", sessionStorage.getItem("idCliente"), "Transazioni");
const querySnapshot = await getDocs(Transazioni);
querySnapshot.forEach(list => {
        var dati = list.data();
        if (dati.data != null  && dati.prezzoFinale != null) {


        if (counter % 5 == 0) {
            rowC++;
            var newRow = `<div class="row inner-row" id="row${rowC}">`;
            document.getElementById('getTransazioni').innerHTML += newRow;
        }
        counter++;

        var data = dati.data;
        console.log(data);
        var prezzoFinale = dati.prezzoFinale;
        console.log(prezzoFinale);
            
    

        var addCard = `<div class="col" data-aos="zoom-in" data-aos-delay="200">
                <div class="icon-box">
                    <div class="icon"><i class="zmdi zmdi-book"></i></div>
                    <h4><strong>ID: </strong>${list.id} </h4>
                    <div>
                        <form method="POST" action="setSessionVariables.php">
                            <input class="hide" value="${list.id}" name="idTransazione" readonly>
                            <a class="btn-learn-more" id="moreT${list.id}">More</a>
                            <a class="btn-learn-more1" id="deleteT${list.id}">Delete</a>
                        </form>
                    </div>
                </div>
            </div>`;


        document.addEventListener('click', async function(e) {
            if (e.target && e.target.id == `deleteT${list.id}`) {
            console.log("cancella" + list.id);
            await deleteDoc(doc(db, "Super", sessionStorage.getItem("idSupermercato"), "Clienti", sessionStorage.getItem("idCliente"), "Transazioni", list.id ));


            window.location.href = "client-page.php";
            
                
            }
        });

        document.addEventListener('click', async function(e) {
            if (e.target && e.target.id == `moreT${list.id}`) {
                sessionStorage.setItem("idTransazione", list.id);


                window.location.href = "transaction-page.php";
            
                
            }
        });
        document.getElementById(`row${rowC}`).innerHTML += addCard;
    }
});
