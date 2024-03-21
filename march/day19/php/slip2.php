. 1Write a PHP script to change the preferences of your web page like font style, font size, font color, 
background color using cookie. Display selected setting on next web page and actual implementation 
(with new settings) on third page (Use Cookies).

<?php
session_start();

// Define valid username and password
$validUsername = "username";
$validPassword = "password";

// Check if form submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve username and password from form submission
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Check if username and password are correct
    if ($username === $validUsername && $password === $validPassword) {
        $_SESSION['authenticated'] = true;
        header("Location: welcome.php");
        exit();
    } else {
        // Increment the number of attempts
        if (isset($_SESSION['attempts'])) {
            $_SESSION['attempts']++;
        } else {
            $_SESSION['attempts'] = 1;
        }
    }
}

// Display login form
?>
<!DOCTYPE html>
<html>
<head>
    <title>Login</title>
</head>
<body>
    <h2>Login</h2>
    <?php if (isset($_SESSION['attempts']) && $_SESSION['attempts'] <= 3): ?>
        <p>Attempts remaining: <?php echo 3 - $_SESSION['attempts']; ?></p>
    <?php endif; ?>
    <?php if (isset($_SESSION['attempts']) && $_SESSION['attempts'] > 3): ?>
        <p>Maximum login attempts exceeded. Please try again later.</p>
    <?php else: ?>
        <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
            <label for="username">Username:</label>
            <input type="text" name="username" id="username" required><br><br>
            <label for="password">Password:</label>
            <input type="password" name="password" id="password" required><br><br>
            <input type="submit" value="Login">
        </form>
    <?php endif; ?>
</body>
</html>
