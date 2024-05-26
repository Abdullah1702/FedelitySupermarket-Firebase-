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
   import { getDocs, collection, addDoc} from "https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js";

window.onload = function() {
    const form = document.getElementById('login-form');
    const button = document.getElementById('signin');

    button.addEventListener("click", async e => {
        e.preventDefault();
        const username = form.your_name.value;
        const password = form.your_pass.value;
        let checkid = false;
        const Supermercatiref = collection(db,"Super");
        const querySnapshot = await getDocs(Supermercatiref);
        querySnapshot.forEach((doc) => {
            var data = doc.data()
            var user = data.username
            var pass = data.password 
            if(user == username && pass == password){       
                checkid = true;
                sessionStorage.setItem("idSupermercato", doc.id);
                $.post('../setSessionVariables.php', { username: username, idSupermercato: sessionStorage.getItem("idSupermercato") });
                window.location.href = "../inner-page.php";
            }
            });
            if(!checkid){
                document.getElementById('errore').innerHTML = "L'utente o password sbagliata";
            }
    });
}