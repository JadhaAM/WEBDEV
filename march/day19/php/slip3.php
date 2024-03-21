<!-- First page (employee details) -->
<?php
session_start();
if($_SERVER['REQUEST_METHOD'] == 'POST') {
    $_SESSION['employee_details'] = [
        'Eno' => $_POST['Eno'],
        'Ename' => $_POST['Ename'],
        'Address' => $_POST['Address']
    ];
    header('Location: second_page.php');
    exit;
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Employee Details</title>
</head>
<body>
    <h2>Enter Employee Details</h2>
    <form method="POST" action="">
        Eno: <input type="text" name="Eno"><br>
        Ename: <input type="text" name="Ename"><br>
        Address: <input type="text" name="Address"><br>
        <input type="submit" value="Next">
    </form>
</body>
</html>

<!-- Second page (earning details) -->
<?php
session_start();
if($_SERVER['REQUEST_METHOD'] == 'POST') {
    $_SESSION['earning_details'] = [
        'Basic' => $_POST['Basic'],
        'DA' => $_POST['DA'],
        'HRA' => $_POST['HRA']
    ];
    header('Location: third_page.php');
    exit;
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Earning Details</title>
</head>
<body>
    <h2>Enter Earning Details</h2>
    <form method="POST" action="">
        Basic: <input type="text" name="Basic"><br>
        DA: <input type="text" name="DA"><br>
        HRA: <input type="text" name="HRA"><br>
        <input type="submit" value="Next">
    </form>
</body>
</html>

<!-- Third page (print employee information) -->
<?php
session_start();
if(isset($_SESSION['employee_details']) && isset($_SESSION['earning_details'])) {
    $employee_details = $_SESSION['employee_details'];
    $earning_details = $_SESSION['earning_details'];
    $total = $earning_details['Basic'] + $earning_details['DA'] + $earning_details['HRA'];
    
    echo "<h2>Employee Information</h2>";
    echo "Eno: " . $employee_details['Eno'] . "<br>";
    echo "Ename: " . $employee_details['Ename'] . "<br>";
    echo "Address: " . $employee_details['Address'] . "<br>";
    echo "Basic: " . $earning_details['Basic'] . "<br>";
    echo "DA: " . $earning_details['DA'] . "<br>";
    echo "HRA: " . $earning_details['HRA'] . "<br>";
    echo "Total: " . $total . "<br>";
    
    // Unset session variables
    unset($_SESSION['employee_details']);
    unset($_SESSION['earning_details']);
} else {
    echo "Please fill out all the details first.";
}
?>
