<?php
include "includes/db.php";
// Haal alle producten uit de database
$producten = $pdo->query("SELECT * FROM producten")->fetchAll();
?>

<?php include "includes/header.php"; ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" type="text/css" href="stylesheet/style.css">
    <title>Document</title>
</head>
<body>
    
    
    
    <p class="divider"></p>
    <form class="moveForm">
    <div>
    <label for="voornaam">Voornaam</label>
    <input type="text" name="voornaam" required> 
    
    </div>

    <div>
    <label for="Achternaam">Achternaam</label>
    <input type="text" name="Achternaam" required> 

    </div>

    <div>
    <label for="email">E-mail</label>
    <input type="email" name="email" required> 
    <input type="submit" value="Versturen">
    </div>

    <button><a href="index.php">Back</a></button>
    
</form>
</body>
</html>