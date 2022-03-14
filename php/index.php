<?php include ('common.php'); ?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://fonts.googleapis.com/css2?family=Odibee+Sans&display=swap" rel="stylesheet">
        <title>Home</title>
        <style><?php 
            include '../css/index.css';
            include '../css/nav.css';
        ?></style>
    </head>
    
    <body>
        <?php
            //navigation bar
            navigation_bar("Game"); //argument is the page name
        ?>

        <li class="sign-out-button" id="sign_out">
            <a href="sign-in.php" onclick="logout()" >Sign-out</a>
        </li>

        <!-- canvas -->
        <canvas class="game-canvas" id="myCanvas" width="1200" height="650"></canvas>
        
        


    </body>

    <script type="text/javascript" src=../javascript/game.js>/</script>
    <script type="text/javascript" src=../javascript/common.js>/</script>
    
    
</html>