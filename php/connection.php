<?php
$host = "127.0.0.1"; 
$password = "";     
$database = "studentresult"; 


$conn = new mysqli($host, $username, $password, $database);


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
