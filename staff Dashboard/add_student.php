<?php
include '../php/connection.php'; // Include database connection

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $index_number = $_POST['index_number'];
    $name = $_POST['name'];
    $class = $_POST['class'];

    // Prevent SQL injection
    $index_number = mysqli_real_escape_string($conn, $index_number);
    $name = mysqli_real_escape_string($conn, $name);
    $class = mysqli_real_escape_string($conn, $class);

    // Insert query (Ensure table and column names are correct)
    $sql = "INSERT INTO stresult (index_number, `name`, class) VALUES ('$index_number', '$name', '$class')";

    if ($conn->query($sql) === TRUE) {
        echo "<script>alert('Student added successfully!'); window.location.href='addStudent.html';</script>";
    } else {
        echo "Error: " . $conn->error;
    }

    $conn->close();
}
?>
