<?php
session_start();

if (!isset($_SESSION["username"]) && !isset($_SESSION["idSupermercato"])) {
    header("Location: index.php");
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">

    <title>Inner Page - Arsha Bootstrap Template</title>
    <meta content="" name="description">
    <meta content="" name="keywords">

    <!-- Favicons -->
    <link href="assets/img/favicon.png" rel="icon">
    <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <script src="https://kit.fontawesome.com/c9bd9ac924.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="sign_forms/fonts/material-icon/css/material-design-iconic-font.min.css">

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Jost:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet">

    <!-- Vendor CSS Files -->
    <link href="assets/vendor/aos/aos.css" rel="stylesheet">
    <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
    <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet">
    <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet">
    <link href="assets/vendor/remixicon/remixicon.css" rel="stylesheet">
    <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet">

    <!-- Template Main CSS File -->
    <link href="assets/css/style.css" rel="stylesheet">


</head>

<body>

    <!-- ======= Header ======= -->
    <header id="header" class="fixed-top header-inner-pages">
        <div class="container d-flex align-items-center">

            <h1 class="logo me-auto"><a href="index.php">Fidelity Supermarket</a></h1>
            <!-- Uncomment below if you prefer to use an image logo -->
            <!-- <a href="index.php" class="logo me-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->

            <nav id="navbar" class="navbar">
                <ul>
                    <li><a href="index.php"><i class="fas fa-home icon"></i>Home</a></li>
                    <li><a href="inner-page.php" class="active"><i class="fa fa-user-circle-o fa-3x icon" aria-hidden="true"></i>  Area personale</a></li>
                    <li><a href="create-client.html" class="getstarted"><i class="fas fa-user-plus icon"></i>Crea cliente</a></li>
                </ul>
                <i class="bi bi-list mobile-nav-toggle"></i>
            </nav>
            <!-- .navbar -->

        </div>
    </header>
    <!-- End Header -->

    <main id="main">

       <!-- <script type="module" src="manage/creaTransazione.js"></script> -->

        <main id="main">

            <!-- ======= Breadcrumbs ======= -->
            <section id="breadcrumbs" class="breadcrumbs">
                <div class="container">

                    <ol>
                        <li><a href="index.php">Home</a></li>
                        <li><a href="inner-page.php">Area personale</a></li>
                        <li><a href="client-page.php">Cliente</a></li>
                        <li>Crea transazione</li>
                    </ol>
                    <div class="row">
                        <div class="col">

                            <h2>Crea transazione</h2>
                        </div>
                        <div class="col" style="text-align: right;">
                            <a href="client-page.php" class="getstartedB"><i class="fas fa-angle-left icon"></i>Back</a>
                        </div>

                    </div>


                    <main id="main">


                        <!-- Form Section -->
                        <section class="inner-page">
                            <div class="container">
                                <section id="services" class="services section-bg-inner">
                                    <div class="container" data-aos="fade-up">

                                        <div class="section-title">
                                            <h2>Nuova transazione</h2>
                                        </div>
                                        <!-- Form -->
                                        <form action="">
                                            <div id="form-fields">
                                                <div class="row">
                                                    <div class="col" data-aos="zoom-in" data-aos-delay="200">
                                                        <label class="form-label">Data</label>
                                                        <input type="date" class="form-control" name="dataTransazione" id="dataTransazione" required>
                                                    </div>

                                                    <div class="col" data-aos="zoom-in" data-aos-delay="200">
                                                        <label class="form-label">Prezzo totale</label>
                                                        <input type="text" class="form-control" name="prezzoTot" id="prezzoTot" readonly>
                                                    </div>
                                                </div>

                                                <div class="row inner-row" style="margin-top: 18px;" data-aos="zoom-in" data-aos-delay="200">
                                                    <div class="col" style="text-align: center;">
                                                        <h2>Prodotti</h2>
                                                    </div>
                                                </div>

                                                <div id="prodotti">
                                                    <div class="row inner-row">
                                                        <div class="col" data-aos="zoom-in" data-aos-delay="200">
                                                            <label class="form-label">Prodotto</label>
                                                            <select class="form-select" aria-label="prodotto" id="prodotto0" required>
                                                            </select>
                                                        </div>
                                                        <div class="col" data-aos="zoom-in" data-aos-delay="200">
                                                            <label class="form-label">Quantità</label>
                                                            <input type="number" class="form-control" min="1" value="1" id="quantità0" required>
                                                        </div>
                                                        <div class="col" data-aos="zoom-in" data-aos-delay="200">
                                                            <label class="form-label">Prezzo</label>
                                                            <input type="number" class="form-control" id="prezzo0" readonly>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>


                                            <div class="row">
                                                <div style="text-align:center;" class="d-grid gap-2 col-6 mx-auto inner-row">
                                                    <input type="button" value="Aggiungi prodotto" class="btn-create" id="add-product">
                                                </div>
                                                <div style="text-align:center;" class="d-grid gap-2 col-6 mx-auto inner-row">
                                                    <input type="submit" value="Crea transazione" class="btn-create" id="create-btn">
                                                </div>
                                            </div>


                                        </form>
                                        <!-- End Form -->



                                    </div>
                                </section>
                                <!-- End Form Section -->
                            </div>
                        </section>

                    </main>
                    <!-- End #main -->

                    <!-- ======= Footer ======= -->
                    <footer id="footer" class="fixed-bottom">
                        <div class="container footer-bottom clearfix">
                        <div class="copyright">
                                &copy; Copyright <strong><span>Fidelity Supermarket</span></strong>. All Rights Reserved
                            </div>
                            <div class="credits">
                                <!-- All the links in the footer should remain intact. -->
                                <!-- You can delete the links only if you purchased the pro version. -->
                                <!-- Licensing information: https://bootstrapmade.com/license/ -->
                                <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/arsha-free-bootstrap-html-template-corporate/ -->
                                Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                            </div>
                        </div>
                    </footer>
                    <!-- End Footer -->

                    <div id="preloader"></div>
                    <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

                    <!-- Vendor JS Files -->
                    <script src="assets/vendor/aos/aos.js"></script>
                    <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
                    <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
                    <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
                    <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
                    <script src="assets/vendor/waypoints/noframework.waypoints.js"></script>
                    <script src="assets/vendor/php-email-form/validate.js"></script>

                    <!-- Template Main JS File -->
                    <script src="assets/js/main.js"></script>
                    <script src="https://requirejs.org/docs/release/2.3.5/minified/require.js"></script>

                    <script type="module"> 
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
   //console.log(sessionStorage.getItem("idCliente"));
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
    let isFirstT = true; 
    querySnapshot.forEach(prod => {
        var data = prod.data()
        let options;
        options = `<option value="${prod.id}">${data.nomeProdotto}</options>`;
        if(isFirstT){
        document.getElementById("prezzo0").setAttribute("value", data.Prezzo);
        changeTotalPrice();
        isFirstT = false;
    }
        document.getElementById("prodotto0").innerHTML += options;
        counterGen ++;
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

            console.log(`quantità${selected.length - 1}`);
            document.getElementById(`quantità${selected.length - 1}`).readOnly = true;
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

            let prezzo = document.createElement("input");
            prezzo.classList.add("form-control");
            prezzo.setAttribute("type", "number");
            prezzo.setAttribute("id", "prezzo" + counterProducts);
            prezzo.setAttribute("readonly", "");

            let option;
            let isFirst = true;
            querySnapshot.forEach(prod => {
                var dati = prod.data()
                if (!selected.includes(prod.id)) {
                    console.log("kala")
                    option = document.createElement("option");
                    option.value = prod.id;
                    let text = document.createTextNode(dati.nomeProdotto);
                    option.append(text);
                    if (isFirst) {
                        console.log(dati.nomeProdotto , dati.Prezzo);
                                prezzo.setAttribute("value", dati.Prezzo);
                                isFirst = false;
                            }
                    } 
                    prodotti.append(option);

                    divProdotti.append(prodotti);
            });


            let quantità = document.createElement("input");
            quantità.classList.add("form-control");
            quantità.setAttribute("type", "number");
            quantità.setAttribute("min", 1);
            quantità.setAttribute("value", 1);
            quantità.setAttribute("id", "quantità" + counterProducts);
            quantità.setAttribute("required", "");

            divQuantity.append(quantità);

            divPrezzo.append(prezzo);

            row.append(divProdotti);
            row.append(divQuantity);
            row.append(divPrezzo);

            prodottiSelezionati.append(row);
            document.addEventListener('change',async function(e) {
            if (e.target && e.target.id == "quantità" + counterProducts) {
                var id = "quantità" + counterProducts;
                let rowIndex = id.charAt(id.length - 1);
                let quantità = document.getElementById(id).value;
                let prodotto = document.getElementById("prodotto" + rowIndex).value;
                console.log(prodotto);
                const PRODOTTO = doc(db,"Prodotti", prodotto);
                const queryProdotto = await getDoc(PRODOTTO);
                var data = queryProdotto.data()
                document.getElementById("prezzo" + rowIndex).setAttribute("value", data.Prezzo  * quantità);
                    
    changeTotalPrice();
                        
                    }
        });
        document.addEventListener('change',async function(e) {
            if (e.target && e.target.id == "prodotto" + String(counterProducts)) {
                var id = "prodotto" + String(counterProducts);
                let rowIndex = id.charAt(id.length - 1);
                let prodotto = document.getElementById(id).value;
                let quantità = document.getElementById("quantità" + rowIndex).value;
                console.log(prodotto)
                const Prodotto = doc(db,"Prodotti", prodotto);
                const DocProdotto = await getDoc(Prodotto);
                var data = DocProdotto.data();  
                console.log(data.Prezzo)      
                document.getElementById("prezzo" + rowIndex).setAttribute("value", data.Prezzo * quantità);   
                changeTotalPrice();
        }
});
            changeTotalPrice();
        }

    });

    const submitButton = document.getElementById('create-btn');

    submitButton.addEventListener("click", async e => {
        e.preventDefault();

        const dataTransazione = document.getElementById('dataTransazione').value;
        const prezzoTotale = document.getElementById('prezzoTot').value;
        const Transazioni = collection(db, "Super",sessionStorage.getItem("idSupermercato"), "Clienti", sessionStorage.getItem("idCliente"), "Transazioni");

        let higher;
        if (dataTransazione != "" && prezzoTotale != "") {
                const dataTransazione = document.getElementById('dataTransazione').value;
                const prezzoTotale = document.getElementById('prezzoTot').value;

                let infos = {
                    data: dataTransazione,
                    prezzoFinale: prezzoTotale,
                };

                const DOCREF = doc(Transazioni) ;

                await setDoc(DOCREF, infos);
                console.log(counterProducts);
                for (let i = 0; i < counterProducts + 1; i++) {
                    let idProdotto = document.getElementById("prodotto" + i).value;
                    console.log(idProdotto);
                    await setDoc(doc(db, "Super", sessionStorage.getItem("idSupermercato") ,"Clienti",sessionStorage.getItem("idCliente")  , "Transazioni", DOCREF.id , "Prodotti", idProdotto), {
                       quantità: document.getElementById("quantità" + i).value
                    });
                    


                }

                window.location.href = "client-page.php";

            

        }
    });
};
                    
document.getElementById("prodotto0").addEventListener("change", async (e) => {
    var id = "prodotto0";
    let rowIndex = id.charAt(id.length - 1);
    let prodotto = document.getElementById(id).value;
    let quantità = document.getElementById("quantità" + rowIndex).value;
    console.log(prodotto)
    const Prodotto = doc(db,"Prodotti", prodotto);
    const DocProdotto = await getDoc(Prodotto);
    var data = DocProdotto.data();  
    console.log(data.Prezzo)      
    document.getElementById("prezzo" + rowIndex).setAttribute("value", data.Prezzo * quantità);   
    changeTotalPrice();
});

document.getElementById("quantità0").addEventListener("change", async (e) => {
    var id = "quantità0";
    let rowIndex = id.charAt(id.length - 1);
    let quantità = document.getElementById(id).value;
    let prodotto = document.getElementById("prodotto" + rowIndex).value;
    console.log(prodotto);
    const PRODOTTO = doc(db,"Prodotti", prodotto);
    const queryProdotto = await getDoc(PRODOTTO);
    var data = queryProdotto.data()
    document.getElementById("prezzo" + rowIndex).setAttribute("value", data.Prezzo  * quantità);
   
    changeTotalPrice();
                        });
                

function changeTotalPrice() {
    let prezzoTotale = 0.0;
    for (let i = 0; i < counterProducts + 1; i++) {
        prezzoTotale += parseFloat(document.getElementById("prezzo" + i).value);
    }
    document.getElementById("prezzoTot").setAttribute("value", prezzoTotale);
}

</script>
</body>

</html>