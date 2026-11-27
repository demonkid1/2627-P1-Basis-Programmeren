
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
    

    <p class="divider"></p>



    <?php foreach ($producten as $product) { ?>
        <div class="rij">
            <img src="images/<?php echo $product['afbeelding']; ?>" alt="<?php echo $product['naam']; ?>">
            <h3><?php echo $product['naam']; ?></h3>
            <p class="prijs">&euro; <?php echo number_format($product['prijs'], 2, ',', '.'); ?></p>
            <button class="abutton"><a href="item.php?id=<?php echo $product['id']; ?>" class="knop">Bekijk</a></button>
        </div>
    <?php } ?>



</body>
</html>