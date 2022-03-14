<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://fonts.googleapis.com/css2?family=Odibee+Sans&display=swap" rel="stylesheet">
        <title>Sign up</title>
        <style>
            <?php 
                include '../css/sign-in.css';
            ?>
        </style>
    </head>
    
    <body>
        <?php
            //navigation bar
            include ('common.php');  
            navigation_bar("Sign in"); //argument is the page name

            //side image
            side_image();
        ?>

        <li class="sign-out-button" id="sign_out">
            <a href="sign-in.php" onclick="logout()">Sign-out</a>
        </li>
            
            <div class="sign-up-right-side">
                <!-- title -->
                <p style="margin-bottom: 10px; margin: 20px;">Create your account</p>
                
                    <!--Username-->
                    <p class="input-label" >User Name: </p> 
                    <input class="input"  type="text" id="usernameInput" > <span class="errors" id="usernameResult"></span> 

                    <!--Email-->
                    <p class="input-label" >Email: </p>
                    <input class="input"  type="email" id="emailInput" > <span class="errors" id="emailResult"></span> 

                    <!--Telephone Number-->
                    <p class="input-label" >Telephone Number: </p>
                    <input class="input" type="tel" id="telephoneInput">

                    <!--Address-->
                    <p class="input-label" >Address: </p>
                    <input class="input" type="text" id="addressInput">
        
                    <!--Create password-->
                    <p class="input-label" >Create Password: </p>
                    <input class="input" type="password" id="passwordInput" > <span class="errors" id="passwordResult"></span>
                    
                    <!--Confirm password-->
                    <p class="input-label" >Confirm Password: </p>
                    <input class="input" type="password" id="confirmPasswordInput" > <span class="errors" id="passwordMatch"></span>

                    <!--Button-->
                    <br>
                    <button class="submit-button" onclick="storeUser()">Create account</button>

                    <p class="result" id="Result"></p>

                    <!-- already have an account? -->
                    <div class="account-question-div">
                        <p class="account-question">Already have an Account?<a href="sign-in.php">Sign in</a></p>
                    </div> 

            
            </div>

            <script src=../javascript/signUp.js></script>
            <script src=../javascript/common.js></script>

    </body>
</html>

