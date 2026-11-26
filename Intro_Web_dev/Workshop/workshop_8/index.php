
<?php
include "includes/db.php";
// Haal alle producten uit de database
$producten = $pdo->query("SELECT * FROM producten")->fetchAll();
?>

<?php include "includes/header.php"; ?>

<!-- <?php
echo "<pre>";
print_r($producten[0]);
echo "</pre>";
?> -->


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=>, initial-scale=1.0">
    <title>index</title>
    <link rel="stylesheet" type="text/css" href="stylesheet/style.css">

</head>
<body>
    
    <!-- eerste image die je ziet & title -->
    <header><h1>RTS games</h1></header>
    
    <p class="divider"></p>


<div class="rij">
    <?php foreach ($producten as $product) { ?>
        <div class="rij">
            <img src="images/<?php echo $product['afbeelding']; ?>" alt="<?php echo $product['naam']; ?>">
            <h3><?php echo $product['naam']; ?></h3>
            <p class="prijs">&euro; <?php echo number_format($product['prijs'], 2, ',', '.'); ?></p>
            <a href="item.php?id=<?php echo $product['id']; ?>" class="knop">Bekijk</a>
        </div>
    <?php } ?>
</div>

</body>
</html>