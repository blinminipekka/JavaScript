var button1 = document.getElementById("btn1")
var button2 = document.getElementById("btn2")
var button3 = document.getElementById("btn3")
var button4 = document.getElementById("btn4")
var ds_text = document.getElementById("txt1")
var js_text = document.getElementById("txt2")

button1.onclick = function() { 
    ds_text.style.color = "blue";
    ds_text.style.textAlign = "center";
    ds_text.style.fontSize = "50px";
    js_text.setAttribute('class','test')
}
button2.onmouseover = function() { 
    alert("you hovereed over this button")
}
button3.onmouseleave = function() { 
    alert("you left this button")
}
button4.onwheel = function() { 
    ds_text.style.cssText = "color: red; text-align: right; font-size: 100px; background-color: lightblue;"
}