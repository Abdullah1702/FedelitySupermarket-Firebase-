<?php
session_start();

if (isset($_POST["username"])) {
    $_SESSION["username"] = $_POST["username"];
}
if (isset($_POST["idSupermercato"])) {
    $_SESSION["idSupermercato"] = $_POST["idSupermercato"];
}
if (isset($_POST["idCliente"])) {
    $_SESSION["idCliente"] = $_POST["idCliente"];
    header("Location: client-page.php");
}
if (isset($_POST["idTransazione"])) {
    $_SESSION["idTransazione"] = $_POST["idTransazione"];
    header("Location: transaction-page.php");
}