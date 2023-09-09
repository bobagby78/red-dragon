<?php
    header('Access-Control-Allow-Origin: http://localhost:3000');
    $username = $_POST['username'];
    echo (
    "<h1> {$username} is a Bitch!!!</h1>"    
    );
?>