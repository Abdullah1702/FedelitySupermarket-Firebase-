<?php
session_start();

unset($_SESSION["username"]);
unset($_SESSION["idSupermercato"]);

header("Location: ../../RealtimeDatabase/app/index.php");