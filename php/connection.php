<?php
$servername = "localhost";
$username = "root"; // Default username in XAMPP
$password = ""; // Default password in XAMPP
$dbname = "studentresult"; // Replace with your actual database name

// Create connection
$conn = new mysqli($servername, $username, $password, $studentresult);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
