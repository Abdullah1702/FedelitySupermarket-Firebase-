<?php
session_start();

if(!isset($_SESSION["idCliente"])) {
    header("Location: inner-page.php");
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">

    <title>Fedelity Supermarket</title>
    <meta content="" name="description">
    <meta content="" name="keywords">

    <!-- Favicons -->
    <link href="assets/img/apple-touch-icon.png" rel="icon">
    <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <script src="https://kit.fontawesome.com/c9bd9ac924.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="sign_forms/fonts/material-icon/css/material-design-iconic-font.min.css">

    <!-- Google Fonts -->
    <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Jost:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
        rel="stylesheet">

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

    <!-- =======================================================
    * Template Name: Arsha - v4.7.1
    * Template URL: https://bootstrapmade.com/arsha-free-bootstrap-html-template-corporate/
    * Author: BootstrapMade.com
    * License: https://bootstrapmade.com/license/
    ======================================================== -->

    <!-- Firebase import -->
</head>

<body>
    <?php
    echo "<script>sessionStorage.setItem(\"idCliente\", '" . $_SESSION["idCliente"] . "');</script>";
    ?>
    <script type="module" src="manage/getClientInfos.js"></script>
    <!-- ======= Header ======= -->
    <header id="header" class="fixed-top header-inner-pages">
        <div class="container d-flex align-items-center">

            <h1 class="logo me-auto"><a href="index.html">Fedelity Supermarket</a></h1>
            <!-- Uncomment below if you prefer to use an image logo -->
            <!-- <a href="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->

            <nav id="navbar" class="navbar">
                <ul>
                    <li><a href="index.php"><i class="fas fa-home icon"></i>Home</a></li>
                    <li><a href="inner-page.php"><i class="fa fa-user-circle-o fa-3x icon" aria-hidden="true"></i> Area
                            personale</a></li>
                    <li><a href="client-page.php" class="active"><i class="fas fa-user-friends icon"></i>Cliente</a>
                    </li>
                    <li><a href="add-transaction.php"><i class="far fa-plus-square icon"></i> Crea transazione</a></li>
                </ul>
                <i class="bi bi-list mobile-nav-toggle"></i>
            </nav>
            <!-- .navbar -->
        </div>
    </header>
    <!-- End Header -->

    <main id="main">

        <!-- ======= Breadcrumbs ======= -->
        <section id="breadcrumbs" class="breadcrumbs">
            <div class="container">

                <ol>
                    <li><a href="index.php">Home</a></li>
                    <li><a href="inner-page.php"> Area personale</a></li>
                    <li>Cliente</li>
                </ol>

                <div class="row">
                    <div class="col">

                        <h2>Cliente</h2>
                    </div>
                    <div class="col" style="text-align: right;">
                        <a href="inner-page.php" class="getstartedB"><i class="fas fa-angle-left icon"></i>Back</a>
                    </div>

                </div>
            </div>
        </section>
        <!-- End Breadcrumbs -->



        <div class="container" style="margin-top: 10px">


            <div class="row gutters-sm">
                <div class="col-md-4 mb-3">
                    <div class="card">
                        <div class="card-body">
                            <div class="d-flex flex-column align-items-center text-center">
                                <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin"
                                    class="rounded-circle" width="150">
                            </div>
                        </div>
                    </div>

                </div>
                <div class="col-md-8">
                    <div class="card mb-3">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-sm-3">
                                    <h6 class="mb-0">Full Name</h6>
                                </div>
                                <div class="col-sm-9 text-secondary" id="nominativo">
                                </div>
                            </div>
                            <hr>
                            <div class="row">
                                <div class="col-sm-3">
                                    <h6 class="mb-0">Email</h6>
                                </div>
                                <div class="col-sm-9 text-secondary" id="email">
                                </div>
                            </div>
                            <hr>
                            <div class="row">
                                <div class="col-sm-3">
                                    <h6 class="mb-0">Birth-Day</h6>
                                </div>
                                <div class="col-sm-9 text-secondary" id="data_nascita">
                                </div>
                            </div>
                            <hr>
                            <div class="row">
                                <div class="col-sm-3">
                                    <h6 class="mb-0">Phone</h6>
                                </div>
                                <div class="col-sm-9 text-secondary" id="telefono">
                                </div>
                            </div>
                            <hr>
                            <div class="row">
                                <div class="col-sm-3">
                                    <h6 class="mb-0">Address</h6>
                                </div>
                                <div class="col-sm-9 text-secondary" id="indirizzo">
                                </div>
                            </div>

                        </div>
                    </div>





                </div>
            </div>
        </div>




        <!-- Clients Section -->
        <section class="inner-page">
            <div class="container">
                <section id="services" class="services section-bg-inner">
                    <div class="container" data-aos="fade-up">

                        <div class="section-title">
                            <h2>Transazioni fatte</h2>
                            
                        </div>

                        <div class="row">
                            <div class="col" data-aos="zoom-in" data-aos-delay="200">
                                <div class="icon-box">
                                    <div class="icon"><i class="bi bi-journals"></i></div>
                                    <h4><a href="">Nuova transazione </a></h4>
                                    
                                    <div>
                                        <a href="add-transaction.php" class="btn-learn-more">Crea transazione</a>
                                    </div>
                                </div>
                            </div>
                            
                        </div>

                        <div id="getTransazioni">
                        </div>

                    </div>
                </section>
                <!-- End Clients Section -->
            </div>
        </section>

    </main>
    <!-- End #main -->

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

    <div id="preloader"></div>
    <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i
            class="bi bi-arrow-up-short"></i></a>

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
    <script src="assets/js/main.js"></script>
    <script>function addTToSes(idToAdd) {
    sessionStorage.setItem("idTransazione", idToAdd);
}</script>
</body>

</html>

