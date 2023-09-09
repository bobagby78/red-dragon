<?php

    // Set CORS headers to allow requests from any origin
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST");
    header("Access-Control-Allow-Headers: Content-Type");
    header("Content-Type: application/json");

    $host = "localhost";
    $port = "5432";
    $dbname = "reactProject";
    $user = "postgres";
    $password = "postgres";
    $connection_string = "host={$host} port={$port} dbname={$dbname} user={$user} password={$password}";
    $dbconn = pg_connect($connection_string);



    if(!$dbconn){
        echo('failed to connect');
    }else{
        // echo('connected to DB: ');
    }
     
?>
