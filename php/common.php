<style><?php 
    include '../css/sign-in.css';
    include '../css/nav.css';
?></style>
<?php 

    //outputing the navigation bar 
    function navigation_bar($pageName){
        echo '<nav>';
        echo '<ul class="navbar-ul">';
        echo '<p class="navbar-title">Plane shooter</p>';

        //arrays
        $linkNames = array("Sign in", "Tutorial", "Leaderboard", "Game");
        $linkAddresses = array("sign-in.php","tutorial.php", "leaderboard.php", "index.php");

        //for loop going through each index of the array
        for($x = 0; $x < count($linkNames); $x++) {
            echo ' <li> <a ';
            //if condition to determine what the current page is
            if($linkNames[$x] == $pageName){
                echo 'class = "current" ';
            }
            //prints href using counter from the for loop
            echo 'href="' . $linkAddresses[$x] . '" id="sign_in_ID">' . $linkNames[$x] . '</a> </li>';

        }
        echo '</ul> </nav> ';
        
    }



    //function to present leaderboard boxes with parameters for two colours and the number
    function leaderboard_box($background_colour, $background_colour2, $number){
        echo '<div>
                <div style="background-color:' . $background_colour . ';" class="leadership-box">';
                    echo '<div style="background-color: ' . $background_colour2 . ';"; class="number-box">' . $number . '</div>';
                    echo '<div class="player-name">PLAYER' . $number .  '</div>
                    <div class="score">SCORE:</div>
                </div>
            </div>'  
        ;}


    //function to print form label and input field using parameters
    function input_field($type, $nameID, $name, $results){
        echo '<div> 
                  <label style="font-size: 25px" for=" ' . $nameID . ' "> ' . $name . ' </label><br> ';
              echo '</div>';
              echo '<div> ';
                  echo '<input class="input" type="' . $type . '" id=" ' . $nameID . ' " 
                    required placeholder=" ' . $name . ' " > <span class="" id=" '. $results .'"></span>
              </div>';


    }


    //prints out submit button for sign in and sign up page with parameter
    function submit_button($name, $onclick){
        echo '<button class="submit-button"  onclick="'.$onclick.' " ' . $name . '</button>';
    }


    //prints out image on the left side of the screen
    function side_image(){
        echo '<div class="left-side-div" >   
                <img class="left-side-image" src="../img/FE855913-2A51-4C4B-A1B7-E8D122738133.JPEG" alt="image"> 
             </div>';
    }
    
?>



