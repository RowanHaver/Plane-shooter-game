//called by signup button
function storeUser(){

    document.getElementById("Result").innerHTML = "";
    
    //creates user object
    var userObject = {
        topScore: 0
    };

    //Username
    userObject.username = document.getElementById("usernameInput").value;
    //Email
    userObject.email = document.getElementById("emailInput").value;
    //Telephone number
    userObject.telephoneNumber = document.getElementById("telephoneInput").value;
    //Address
    userObject.address = document.getElementById("addressInput").value;         
    //Password
    userObject.password = document.getElementById("passwordInput").value;
    //Confirm Password
    userObject.confirmPassword = document.getElementById("confirmPasswordInput").value;


        //checks if validate input is true
        if( validateInput() == true){
            //Store users
            localStorage[userObject.email] = JSON.stringify(userObject);
            document.getElementById("Result").innerHTML = "Welcome you created your account"; 
            //clear input
            document.getElementById("emailInput").value = "";
            document.getElementById("usernameInput").value = "";
            document.getElementById("telephoneInput").value = "";
            document.getElementById("addressInput").value = "";
            document.getElementById("passwordInput").value = "";   
            document.getElementById("confirmPasswordInput").value = "";              
        }
        else{
            
        }


    //checks if input is validated
    function validateInput() {
        //gets value
        document.getElementById("passwordResult").innerHTML = "";
        document.getElementById("emailResult").innerHTML = "";
        document.getElementById("usernameResult").innerHTML = "";
        document.getElementById("passwordMatch").innerHTML = "";

        //count
        count = 0;
        // checks if password is past 8 charcters
        if (userObject.password.length < 8) {
            //print error to user
            document.getElementById("passwordResult").innerHTML += "<br>" + " Your password must be at least 8 characters";
            //increase count
            count++;
        }
        // checks if password contains lowercase
        if (userObject.password.search(/[a-z]/) < 0) {
            //print error to user
            document.getElementById("passwordResult").innerHTML += "<br>" + " Your password must contain at least one lowercase letter.";
            count++;
        }
        // checks if password contains upper case
        if (userObject.password.search(/[A-Z]/) < 0) {
            //print error to user
            document.getElementById("passwordResult").innerHTML += "<br>" + "Your password must contain at least one uppercase letter.";
            count++;
        }
        // checks if password contains digits
        if (userObject.password.search(/[0-9]/) < 0) {
            //print error to user
            document.getElementById("passwordResult").innerHTML += "<br>" + " Your password must contain at least one digit.";
            count++;
        }
        // checks if password contains specific special charcters
        if (userObject.password.search(/[!@#$%^&*]/) < 0) {
            //print error to user
            document.getElementById("passwordResult").innerHTML += "<br>" + " Your password must contain at least one of these special character !@#$%^&* .";
            count++;
        }
        //check if passwords are matching
        if(userObject.password !== userObject.confirmPassword){
            //print error to user
            document.getElementById("passwordMatch").innerHTML = "Passwords do not match";
            count++
        }

        //validate email
        if(userObject.email.search(/(.+)@(.+){2,}\.(.+){2,}/) < 0 ){
            //print error to user
            document.getElementById("emailResult").innerHTML += "Email not in the correct format";
            count++;
        } 
        //check if email has been created
        let email = localStorage.getItem(userObject.email);
        if(email){
            //print error to user
            document.getElementById("emailResult").innerHTML += "Account already created with this email, try again";
            count++
        }

        //check if username is empty
        if(userObject.username == ""){
            //print error to user
            document.getElementById("usernameResult").innerHTML += "Enter username";
            count++
        }

        if (count > 0) {
            
            return false;
        }
        return true;
    }   
    
}