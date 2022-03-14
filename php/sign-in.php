<?php include ('common.php'); ?>
<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://fonts.googleapis.com/css2?family=Odibee+Sans&display=swap" rel="stylesheet">
        <title>Sign in</title>
        <style>
            <?php 
                include '../css/nav.css';
            ?>
        </style>
    </head>
    <body>
        <?php
            //navigation bar
            
            navigation_bar("Sign in"); //argument is the page name
        ?>

        <li class="sign-out-button" id="sign_out">
            <a href="sign-in.php" onclick="logout()">Sign-out</a>
        </li>

        <?php 
            //side image
            side_image();
        ?>


        <div class="sign-in-right-side">
            <!-- title -->
            <p>Sign into your account</p>

                <!--Email-->
                <p class="input-label" >Email: </p>
                <input class="input"  type="email" id="emailInput" > <span class="errors" id="emailResult"></span> 
    
                <!--password-->
                <p class="input-label" >Password: </p>
                <input class="input" type="password" id="passwordInput"> <span class="errors" id="passwordResult"></span>

                <!--Button-->
                <br>
                <button class="submit-button" onclick="login()">Sign in</button>

                <p class="result" id="Result"></p>

                <!-- Dont have an account? -->
                <div class="account-question-div">
                    <p class="account-question">Dont have an account?<a href="sign-up.php">Sign up</a></p>
                </div>        

        </div>

        <script type="text/javascript" src=../javascript/login.js></script>
        <script type="text/javascript" src=../javascript/common.js></script>
        
        
    </body>
</html>

