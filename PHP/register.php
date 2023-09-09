<?php
header('Access-Control-Allow-Origin: http://localhost:3000');


include("./connection.php");

if($_SERVER["REQUEST_METHOD"] == "POST"){
    $email = $_POST["email"];
    $username = $_POST["username"];
    $password = $_POST["password"];
    $confirmPassword = $_POST["confirmPassword"];
    $hash_pass = password_hash($password, PASSWORD_DEFAULT);

    //add additional validation here

    function userExists($username){
        return $query = "SELECT * FROM users WHERE username = $username";
    }
    
    $query = "INSERT INTO users (email, username, hash_pass, created_on) VALUES ($1, $2, $3, NOW())";

    $result = pg_query_params($dbconn, $query, ['email'=>$email, 'username'=>$username, 'hash_pass'=>$hash_pass]);

    if($result) {
        $response = ["message"=> "Registration successful"];
        echo(json_encode($response));
        header('Content-Type: application/json');
    }else {
        $response = ["message"=> "Registration failed"];
        echo(json_encode($response));
        header('Content-Type: application/json');
    }

}

?>