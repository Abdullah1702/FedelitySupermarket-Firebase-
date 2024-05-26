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
   import { getDocs, collection, doc, setDoc, addDoc} from "https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js";
   
   const Supermercatiref = collection(db,"Super");

window.onload = function() {
    const form = document.getElementById('register-form');
    const button = document.getElementById('signup');

    button.addEventListener("click", async e => {
        e.preventDefault();
        const username = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const citta = document.getElementById('citta').value;
        const indirizzo = document.getElementById('text').value;
        const password = document.getElementById('pass').value;
        const confirmPassword = document.getElementById('re_pass').value;

        let higher;
        let check = true;
        if (username != "" && email != "" && password != "" && confirmPassword != "") {
            const querySnapshot = await getDocs(Supermercatiref);
            querySnapshot.forEach((doc) => {
                var data = doc.data()
                if (data.username == username) {
                    check = false;
                }
            });
                if (check) {
                    if (password == confirmPassword) {
                            if (citta == "" && indirizzo == "") {
                                var infos = {
                                    username: username,
                                    email: email,
                                    password: password
                                };
                            } else if (citta != "" && indirizzo == "") {
                                var infos = {
                                    username: username,
                                    email: email,
                                    password: password,
                                    città: citta
                                };
                            } else if (citta == "" && indirizzo != "") {
                                var infos = {
                                    username: username,
                                    email: email,
                                    password: password,
                                    indirizzo: indirizzo
                                };
                            } else {
                                var infos = {
                                    username: username,
                                    email: email,
                                    password: password,
                                    città: citta,
                                    indirizzo: indirizzo
                                    
                                };
                            }
                            const DocRef = doc(Supermercatiref);
                            await setDoc(DocRef, infos);  
                            await addDoc(collection(db, "Super", DocRef.id, "Clienti"), {
                            });                       
                            window.location.href = "../index.php";
                    } else {
                        document.getElementById('errore').innerHTML = "La password di conferma non è uguale a quella inserita";
                    }
                } else {
                    document.getElementById('errore').innerHTML = "E' già presente un utente con questi dati";
                }
            
        }
    });
};