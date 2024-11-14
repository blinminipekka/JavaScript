var circle = document.getElementById("circle");
var time = document.getElementById("time");
var colors = ["blue", "purple", "yellow","red","black"]
var start;

function showcircle(){
    start = new Date().getTime();
    circle.style.display = "block"; 
    circle.style.top = (Math.random()* 500) + "px";
    circle.style.left = (Math.random()* 1000) + "px";
}
showcircle();

var timing;
var score = 0;

circle.onclick = function (){
        var end = new Date().getTime();
        circle.style.display = "none";
        setTimeout(showcircle , 1000);
        circle.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];
        timing = (end - start)/1000;
        if(timing < 0.5){
            score++;
        }
        time.innerHTML = timing + "seconds" + "      " + "score = " +  score; 
        
}




