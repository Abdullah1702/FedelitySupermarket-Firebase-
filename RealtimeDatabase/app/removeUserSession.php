<?php
session_start();

unset($_SESSION["username"]);
unset($_SESSION["idSupermercato"]);

header("Location: ../../Firestore/app/index.php");