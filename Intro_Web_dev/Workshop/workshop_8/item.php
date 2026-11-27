<?php
include "includes/db.php";
// Het id uit de link: detail.php?id=2 geeft 2
$id = $_GET['id'] ?? 0;

// Haal het product met dit id uit de database
$stmt = $pdo->prepare("SELECT * FROM producten WHERE id = ?");
$stmt->execute([$id]);
$product = $stmt->fetch();

echo "Je hebt product " . $id . " gekozen.";
?>
<?php include "includes/header.php"; ?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="stylesheet/style.css">

    <title>item</title>
</head>
<body>
   <p class="divider"></p>
<div class="moveitem">
    <img src="images/<?php echo$product['afbeelding']; ?>" alt="<?php echo$product['naam']; ?>">
    <div class="moveitem">
        <h2><?php echo $product['naam']; ?></h2>
        <p class="prijs">&euro; <?php echo number_format($product['prijs'], 2, ',', '.'); ?></p>

         <div class="scroldown">
        <p><?php echo $product['omschrijving']; ?></p>
         </div>
       
    </div>
</div>
    <button><a href="index.php">Back</a></button>
    <button><a href="form.php">Buy</a></button>
        
</body>
</html>