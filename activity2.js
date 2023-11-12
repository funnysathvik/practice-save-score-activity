function getscore(){
    score=localStorage.getItem("score");
    document.getElementById("output").innerHTML="score"+score;
}
function back(){
    window.location="activity_1.html";
}