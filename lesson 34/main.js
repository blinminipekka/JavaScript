function writenames(){
    console.log("nil");
    //callback
    setTimeout(function(){ console.log("blin")}, 2000);
    console.log("nil")
}

var colors = ["blue", "red", "green", "purple"];

function changeBgColor(){
    document.querySelector('body').style.background = colors[Math.floor(Math.random()*colors.length)];
}


var names = ["Dorant", "Olsa", "Daris", "Anik", "Eden", "Shpat", "Blin"];

function changeName(){
    document.querySelector('p').innerHTML = names[Math.round(Math.random * (names.lenght-1))];
}