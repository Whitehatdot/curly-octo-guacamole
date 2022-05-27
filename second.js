user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function viewhome(){
    window.location = "thirdtwo.html";
}
function makehome(){
    window.location = "thirdone.html";
}