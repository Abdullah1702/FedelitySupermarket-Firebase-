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

import {doc, getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js";

console.log(sessionStorage.getItem("idSupermercato"));
console.log(sessionStorage.getItem("idToUpdate"));

const Cliente = doc(db, "Super", sessionStorage.getItem("idSupermercato"), "Clienti", sessionStorage.getItem("idToUpdate"));
window.onload = async function() {
    const nome = document.getElementById('nome');
    const cognome = document.getElementById('cognome');
    const dataNascita = document.getElementById('dataNascita');
    const provincia = document.getElementById('provincia');
    const comune = document.getElementById('comune');
    const indirizzo = document.getElementById('indirizzo');
    const email = document.getElementById('email');
    const telefono = document.getElementById('telefono');
    
    const DocCliente = await getDoc(Cliente);
    var data = DocCliente.data()

        
        cognome.setAttribute("value", data.nome);
        nome.setAttribute("value", data.cognome);
        dataNascita.setAttribute("value", data.dataNascita);                
        $("div.provincia select").val(data.provincia).change();
        comune.setAttribute("value", data.comune);
        console.log(provincia)
        indirizzo.setAttribute("value", data.indirizzo);
        email.setAttribute("value", data.email);
        telefono.setAttribute("value", data.telefono);
        $("div.sesso select").val(data.sesso).change();
        const updateButton = document.getElementById('update-btn');

        updateButton.addEventListener("click", async e => {
            e.preventDefault();

            const nomeU = document.getElementById('nome').value;
            const cognomeU = document.getElementById('cognome').value;
            const dataNascitaU = document.getElementById('dataNascita').value;
            const indirizzoU = document.getElementById('indirizzo').value;
            const emailU = document.getElementById('email').value;
            const telefonoU = document.getElementById('telefono').value;
            const sessoU = document.getElementById('sesso').value;
            const provinciaU = document.getElementById('provincia').value;
            const comuneU = document.getElementById('comune').value;


            if (email == "" && telefono == "") {
            await updateDoc(Cliente, {
                nome: nomeU,
                cognome: cognomeU,
                dataNascita: dataNascitaU,
                sesso: sessoU,
                provincia: provinciaU,
                comune: comuneU,
                indirizzo: indirizzo

            });    
            } else if (email != "" && telefono == "") {
                await updateDoc(Cliente, {
                    nome: nomeU,
                    cognome: cognomeU,
                    dataNascita: dataNascitaU,
                    sesso: sessoU,
                    provincia: provinciaU,
                    comune: comuneU,
                    indirizzo: indirizzoU,
                    email: emailU
    });
                


            } else if (email == "" && telefono != "") {
                await updateDoc(Cliente, {
                    nome: nomeU,
                    cognome: cognomeU,
                    dataNascita: dataNascitaU,
                    sesso: sessoU,
                    provincia: provinciaU,
                    comune: comuneU,
                    indirizzo: indirizzoU,
                    telefono: telefonoU
    });


            } else {
                await updateDoc(Cliente, {
                                nome: nomeU,
                                cognome: cognomeU,
                                dataNascita: dataNascitaU,
                                sesso: sessoU,
                                provincia: provinciaU,
                                comune: comuneU,
                                indirizzo: indirizzoU,
                                email: emailU,
                                telefono: telefonoU
                });

            }

                window.location.href = "inner-page.php";
        });
}  



