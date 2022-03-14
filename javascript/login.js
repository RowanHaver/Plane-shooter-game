//called by login button
function login(){
    //clear results
    document.getElementById("emailResult").innerHTML = "";
    document.getElementById("passwordResult").innerHTML = "";

    //get email address
    let email = document.getElementById("emailInput").value;
    //get password
    let password = document.getElementById("passwordInput").value;

    if(email !== "" & password !== "" & email.search(/(.+)@(.+){2,}\.(.+){2,}/) >= 0 ){
        //User does does not have an account    
        if(localStorage[email] === undefined){
            //print to user that they do not have an account
            document.getElementById("Result").innerHTML = "Wrong Email or Password, Try again"
            return;
        }
        else{//User has an account 

            //convert to object
            let userObj = JSON.parse(localStorage[email]);
            
            if(password === userObj.password){//sucessful login
                //tells user they are logged in
                document.getElementById("Result").innerHTML = userObj.email + " Logged in.";
                //set session storage
                sessionStorage.loggedInUserEmail = userObj.email;
                //clear input
                document.getElementById("emailInput").value = "";
                document.getElementById("passwordInput").value = "";

                //changes sign in to hidden
                document.getElementById("sign_in_ID").style.visibility = "hidden";
                //changes sign up to visible
                document.getElementById("sign_out").style.visibility = "visible";

            }
            else{
                //prints to user 
                document.getElementById("Result").innerHTML = "Wrong Email or Password, Try again";
            }
        }
    }
    else{
        //checks if email input is empty
        if(email == ""){
            //prints to user
            document.getElementById("emailResult").innerHTML = "Enter email";
        }
        //checks if email input is in the correct format
        else if(email.search(/(.+)@(.+){2,}\.(.+){2,}/) < 0 ){
            //prints to user
            document.getElementById("emailResult").innerHTML = "Email not in the correct format";
        }
        //checks if password input is empty
        if(password == ""){
            //prints to user
            document.getElementById("passwordResult").innerHTML = "Enter password";
        }
        

    }



}
