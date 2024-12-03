$('#list').click(function(){
    alert("Clicked")
});

$("#button1").click(function(){
    $("#anik").text("nili bakijli");
    $("anik").append("ne digitalschool");
});

$("div").click(function(){
    $(this).addClass("clicked");
}).find("span").attr("title", "this is a changed title")