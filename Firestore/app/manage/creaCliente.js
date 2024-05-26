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

   import {setDoc, collection, doc, getDocs, addDoc } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js";
   
   
   const CLIENT = collection(db, "Super",sessionStorage.getItem("idSupermercato"), "Clienti");
   const idMerca = sessionStorage.getItem("idSupermercato");
   console.log(idMerca)

window.onload = function() {

    const submitButton = document.getElementById('create-btn');
    submitButton.addEventListener("click", async e => {
        e.preventDefault();
        const nome = document.getElementById('nome').value;
        const cognome = document.getElementById('cognome').value;
        const dataNascita = document.getElementById('dataNascita').value;
        const sesso = document.getElementById('sesso').value;
        const provincia = document.getElementById('provincia').value;
        const comune = document.getElementById('comune').value;
        const indirizzo = document.getElementById('indirizzo').value;
        const email = document.getElementById('email').value;
        const telefono = document.getElementById('telefono').value;

        let check = true;
        if (nome != "" && cognome != "" && dataNascita != "" && sesso != "" && provincia != "" && comune != "" && indirizzo != "") {
            const querySnapshot = await getDocs(CLIENT);
                querySnapshot.forEach((doc) => {
                    var data = doc.data()
                    if (data.cognome == cognome && data.nome == nome && data.provincia == provincia && data.comune == comune && data.indirizzo == indirizzo) {
                        check = false;
                    }
                });
                    
                if (check) {
                    if (email == "" && telefono == "") {
                        var infos = {
                            nome: nome,
                            cognome: cognome,
                            dataNascita: dataNascita,
                            sesso: sesso,
                            provincia: provincia,
                            comune: comune,
                            indirizzo: indirizzo
                            };
                        } else if (email != "" && telefono == "") {
                            var infos = {
                                nome: nome,
                                cognome: cognome,
                                dataNascita: dataNascita,
                                sesso: sesso,
                                provincia: provincia,
                                comune: comune,
                                indirizzo: indirizzo,
                                email: email
                            };
                        } else if (email == "" && telefono != "") {
                            var infos = {
                                nome: nome,
                                cognome: cognome,
                                dataNascita: dataNascita,
                                sesso: sesso,
                                provincia: provincia,
                                comune: comune,
                                indirizzo: indirizzo,
                                telefono: telefono
                            };
                        } else {
                            var infos = {
                                nome: nome,
                                cognome: cognome,
                                dataNascita: dataNascita,
                                sesso: sesso,
                                provincia: provincia,
                                comune: comune,
                                indirizzo: indirizzo,
                                email: email,
                                telefono: telefono
                            };
                        }
                        const DocREF = doc(CLIENT) ;
                        await setDoc(DocREF, infos);
                        console.log(CLIENT);
                        await addDoc(collection(db, "Super", sessionStorage.getItem("idSupermercato") ,"Clienti", DocREF.id , "Transazioni"), {
                        });
                        window.location.href = "inner-page.php";
                } else {
                    document.getElementById('errore').innerHTML = "E' già presente un cliente con questi dati";
                }
        }
    });
};