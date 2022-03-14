<?php include ('common.php'); ?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://fonts.googleapis.com/css2?family=Odibee+Sans&display=swap" rel="stylesheet">
        <title>Leaderboard</title>
        <style><?php include '../css/leaderboard.css' ?></style>
    </head>
    
    <body>
        <?php
            //navigation bar
            navigation_bar("Leaderboard");//argument is the page name
        ?>

        <li class="sign-out-button" id="sign_out">
            <a href="sign-in.php" onclick="logout()" >Sign-out</a>
        </li>

        <section>
            <!-- title of page -->
            <p class="leaderboard-title">Leaderboard</p>

            <!-- Holds ranking table -->
            <div class="ranking" id="Ranking" style="border: 3px solid black"></div>
            
        </section>

        <script type="text/javascript" src=../javascript/leaderboard.js> </script>
        <script type="text/javascript" src=../javascript/common.js> </script>


    </body>
</html>