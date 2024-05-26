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

    <title>Fidelity Supermarket</title>
    <meta content="" name="description">
    <meta content="" name="keywords">

    <!-- Favicons -->
    <link href="assets/img/apple-touch-icon.png" rel="icon">
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



    <!-- Firebase import -->
    <script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-database.js"></script>
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
                    <li><a href="inner-page.php"><i class="fa fa-user-circle-o fa-3x icon" aria-hidden="true"></i> Area personale</a></li>
                    <li><a href="client-page.php"><i class="fas fa-user-friends icon"></i>Cliente</a></li>
                    <li><a href="add-transaction.php" class="active"><i class="far fa-plus-square icon"></i> Crea transazione</a></li>
                </ul>
                <i class="bi bi-list mobile-nav-toggle"></i>
            </nav>
            <!-- .navbar -->

        </div>
    </header>
    <!-- End Header -->

    <main id="main">

        <script src="manage/creaTransazione.js"></script>

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

                    <!-- ======= Header ======= -->
                    <header id="header" class="fixed-top header-inner-pages">
                        <div class="container d-flex align-items-center">

                            <h1 class="logo me-auto"><a href="index.php">Fidelity Supermarket</a></h1>
                            <!-- Uncomment below if you prefer to use an image logo -->
                            <!-- <a href="index.php" class="logo me-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->

                            <nav id="navbar" class="navbar">
                                <ul>
                                    <li><a href="index.php"><i class="fas fa-home icon"></i>Home</a></li>
                                    <li><a href="inner-page.php"><i class="fa fa-user-circle-o fa-3x icon" aria-hidden="true"></i> Area personale</a></li>
                                    <li><a href="client-page.php"><i class="fas fa-user-friends icon"></i>Cliente</a></li>
                                    <li><a href="create-client.html" class="active"><i class="far fa-plus-square icon"></i> Crea transazione</a></li>
                                </ul>
                                <i class="bi bi-list mobile-nav-toggle"></i>
                            </nav>
                            <!-- .navbar -->

                        </div>
                    </header>
                    <!-- End Header -->

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
                                                            <select class="form-select" aria-label="prodotto" id="prodotto0" required onchange="changeValue(this.id)">
                                                            </select>
                                                        </div>
                                                        <div class="col" data-aos="zoom-in" data-aos-delay="200">
                                                            <label class="form-label">Quantità</label>
                                                            <input type="number" class="form-control" min="1" value="1" id="quantità0" onchange="priceChange(this.id)" required>
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
</body>

</html>