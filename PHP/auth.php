<?php
header('Access-Control-Allow-Origin: http://localhost:3000');


include("./connection.php");

if($_SERVER["REQUEST_METHOD"] == "POST"){
    $email = filter_var($_POST["email"], FILTER_VALIDATE_EMAIL);
    $username = filter_var($_POST["username"], FILTER_SANITIZE_STRING, FILTER_FLAG_NO_ENCODE_QUOTES);
    $password = filter_var($_POST["password"]);
    $confirmPassword = $_POST["confirmPassword"];
    $hash_pass = filter_var(password_hash($password, PASSWORD_DEFAULT));

    //add additional validation here
    
    $query = "INSERT INTO users (email, username, hash_pass, created_on) VALUES ($1, $2, $3, NOW())";

    

    if($password !== $confirmPassword){
        http_response_code(400);
        $response = ["message"=> "Passwords do not match", "test"=>"hello"];
        echo(json_encode($response));
    exit;        

    } else {
        $result = pg_query_params($dbconn, $query, ['email'=>$email, 'username'=>$username, 'hash_pass'=>$hash_pass]);

        if($result) {
            $response = ["message"=> "Registration successful", "test"=>"hello"]; //sets response message consumed by login.js
            echo(json_encode($response));
            header('Content-Type: application/json');
        }else {
            $response = ["message"=> "Registration failed", "test"=>"hello"];
            echo(json_encode($response));
            header('Content-Type: application/json');
        }
    }



}

?>