<?php
// Database configuration
$host = 'localhost'; // MySQL server host
$dbname = 'student_management'; // Database name
$username = 'root'; // MySQL username (default is 'root')
$password = ''; // MySQL password (default is empty)

// Create a connection
$conn = new mysqli($host, $username, $password, $studentresult);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";

// Close the connection
$conn->close();
?>
