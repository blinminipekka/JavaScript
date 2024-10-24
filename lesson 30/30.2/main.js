var button = document.getElementById('button');
var text = document.getElementById('text');
var input = document.getElementById('input');
var numberone = document.getElementById('n1')
var numbertwo = document.getElementById('n2')
var equal = document.getElementById('equal');
var sum = document.getElementById('Sum');

var age = document.getElementById('age')
var city = document.getElementById('city')
var btn = document.getElementById('votebtn')
var allowed = document.getElementById('allowed')

button.onclick = function(){
    text.innerHTML = input.value;
}

sum.onclick = function(){
    equal.innerHTML = parseFloat(numberone.value) + parseFloat(numbertwo.value);
}

btn.onclick = function(){
    if (parseInt(age.value) > 17 && city.value == "Prishtina"){
        allowed.innerHTML = "You can Vote!";
    }
    else {
        allowed.innerHTML = "You cant vote"
    }
    }
