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

import { deleteDoc , collection, getDocs, doc } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js";
console.log(sessionStorage.getItem("idSupermercato"))
const CLIENTI = collection(db, "Super",sessionStorage.getItem("idSupermercato"), "Clienti");
var counter = 0;
var rowC = 0;
let clienteDaEliminare = false;
const getClienti = document.getElementById('getClienti');
const querySnapshot = await getDocs(CLIENTI);
    querySnapshot.forEach(client => {
        var data = client.data();
        if (data.cognome != null  && data.nome != null && data.provincia != null && data.comune != null && data.indirizzo != null) {
            var cognome = data.cognome; 
            var nome = data.nome;
            var provincia = data.provincia; 
            var comune = data.comune;
            var indirizzo = data.indirizzo;
           
            if (counter % 5 == 0) {
                rowC++;
                var newRow = `<div class="row inner-row" id="row${rowC}">`;
                document.getElementById('getClienti').innerHTML += newRow;
            }

            counter++;
            var addCard = `<div class="col" data-aos="zoom-in" data-aos-delay="200">
                <div class="icon-box">
                    <div class="icon"><i class="fas fa-user"></i></div>
                    <h4>${cognome} ${nome}</h4>
                    <div>
                        <form method="POST" action="setSessionVariables.php">
                            <input style="display: none" class="hide" value="${client.id}" name="idCliente" readonly>
                            <button type="submit" class="btn-learn-more" id="more${client.id}">More</button>
                            <a class="btn-learn-more1" id="delete${client.id}">Delete</a>
                            <a class="btn-learn-more2" id="update${client.id}">Update</a>
                        </form>
                        
                    </div>
                </div>
            </div>`;
            
            document.addEventListener('click', async function(e){
                if(e.target && e.target.id == `delete${client.id}`){
                console.log(client.id);
                console.log(sessionStorage.getItem("idSupermercato"))
                await deleteDoc(doc(db, "Super", sessionStorage.getItem("idSupermercato"), "Clienti", client.id));
                window.location.href = "inner-page.php";
                }
             });

            document.addEventListener('click',function(e){
                if(e.target && e.target.id == `update${client.id}`){
                    sessionStorage.setItem("idToUpdate", client.id);
                    window.location.href = "update.html";
                 }
             });
            document.getElementById(`row${rowC}`).innerHTML += addCard;
    
        }
    });


