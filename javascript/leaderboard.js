
function loadRankingTable(){
    let str = "<table><tr><th>Name</th><th>Score</th></tr>";
    //runs through each email in local storage
    for(let email of Object.keys(localStorage)){
        //extracts userobject 
        let userObj = JSON.parse(localStorage[email]);
        //adds obejcts email and topscore
        str += "<tr><td>" + userObj.email + "</td><td>" + userObj.topScore + "</td></tr>";
    }
    str += "</table>";
    //sets table into ranking
    document.getElementById("Ranking").innerHTML = str;
}

window.onload = loadRankingTable();