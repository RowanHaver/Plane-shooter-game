//calls when window loads
window.onload = () =>{
    checkLogin();
}

//function to either show log in button or show signout button
function checkLogin(){
    //checks if there is a logged in user in session storage
    if(sessionStorage.loggedInUserEmail !== undefined){
        //changes sign in to hidden
        document.getElementById("sign_in_ID").style.visibility = "hidden";
        //changes sign up to visible
        document.getElementById("sign_out").style.visibility = "visible";
    }
    else{
        //changes sign in to visible
        document.getElementById("sign_in_ID").style.visibility = "visible";
        //changes sign up to hidden
        document.getElementById("sign_out").style.visibility = "hidden";
    }
}   

//Logs user out
function logout(){
    //removes current user logged into session storage
    sessionStorage.removeItem("loggedInUserEmail");
    document.getElementById("sign_in_ID").style.visibility = "visible";
    document.getElementById("sign_out").style.visibility = "hidden";
}