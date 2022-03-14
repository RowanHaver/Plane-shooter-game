<?php 
    include ('common.php');  
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://fonts.googleapis.com/css2?family=Odibee+Sans&display=swap" rel="stylesheet">
        <title>Tutorial</title>
        <style>
            <?php 
                include ('../css/tutorial.css')
            ?>
        </style>
    </head>
    
    <body>

        <?php
            //navigation bar
            navigation_bar("Tutorial");
        ?>

        <li class="sign-out-button" id="sign_out">
            <a href="sign-in.php" onclick="logout()">Sign-out</a>
        </li>

        <!-- presents how to play, objectives and a paragraph -->
        <div class="display-column">
            <p class="page_heading">How to play?</p>
            <p class="objective">Objective</p>
            <p class="objective_paragraph"> To destroy as many enemies & targets as possible without getting destroyed, more enemeies & targets destroyed, higher score!</p>
        </div>                             

        <!-- div of rows to display tutorial of how to play -->
        <div class="display-row">

            <!-- controls -->
            <div class="display-column">
                <div  >
                    <img class="circle_image" src="../img/B963C056-18CE-4FD5-8440-15CDF3021266.JPEG" alt="">
                </div>
                <div class="description_header">Controls</div>
                <div class="description">The up and down arrow keys control the plane to go up & down</div>
            </div>

            <!-- How to shoot -->
            <div class="display-column">
                <div >
                    <img class="circle_image" src="../img/509E3DE2-E9A5-4400-992C-9E9A3F95A2B0.JPEG" alt="Image">
                </div>
                <div class="description_header">How to shoot</div>
                <div class="description">The spacebar is used to shoot bullets to destroy enemies & targets</div>
            </div>

            <!-- Targets & Enemies -->
            <div class="display-column">
                <div >
                    <img class="circle_image"  src="../img/5053C5B9-C2DE-477D-9C70-D0668F89CF5B.jpg" alt="Image">
                </div>
                <div class="description_header">Targets & Enemies</div>
                <div class="description">Enemies will shoot back & remove a life, targets will drop from the sky </div>  
            </div>

        </div>

        <script type="text/javascript" src=../javascript/common.js> </script>
    </body>
</html>