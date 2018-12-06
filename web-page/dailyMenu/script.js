var title = ["dsa", "asd", "foskvosk"];
var disc = ["klskgsf", "pvol;rlg,", "kvpdkbskvpdkbs"];
var pic = ["!", "images/food.jpg", "!"];

function change(i, id){
  if(i){
    document.getElementById(id).style.animationName = "in";
    document.getElementById(id).style.animationDuration = "400ms";
    document.getElementById(id).style.backgroundColor = "#FACA7E";
    document.getElementById(id).style.color = "white";
  }
  else{
    document.getElementById(id).style.animationName = "out";
    document.getElementById(id).style.animationDuration = "400ms";
    document.getElementById(id).style.backgroundColor = "white";
    document.getElementById(id).style.color = "black";
  }
}

function nextPage(i){
  console.log(data.recipies[i]);
  for(var n = 0; n < data.recipies[i].recipie.length; n++){
    window.sessionStorage.setItem("text" + n, data.recipies[i].recipie[n]);
  }
  window.sessionStorage.setItem("title", data.recipies[i].title);
  window.sessionStorage.setItem("l", data.recipies[i].recipie.length);
  window.location = "sample.html";
}

function upload(){
console.log(data);

  for(var n = 0; n < data.recipies.length; n++){
    var index = "b" + n;

    var str = "<div class='meal'>";
    str += "<button></button>"
    str += "<div class='btn' id='b" + n + "' onclick='nextPage(" + n + ")' onmousemove='change(true, " + '"' + index + '"' + ")' onmouseout='change(false, " + '"' + index + '"' + ")'>";
    str += "<img src='" + (data.recipies[n].pic == "!" ? "images/blank.png" : data.recipies[n].pic) + "' width='100px' height='100px'>";
    str += "<div class='brief-info'>";
    str += "<h3 id='title'>" + data.recipies[n].title + "</h3>";
    str += "<p id='disc'>" + data.recipies[n].shortDisc + "</p>";
    str += "</div>";
    str += "</div>";
    str += "</div>";
    document.getElementById('container').innerHTML += str;
  }

  var t = window.sessionStorage.getItem("Type");
  if(t == "Chef"){
    var index = "b" + data.recipies.length;
    var str = "<div class='meal'>";
    str += "<button></button>"
    str += "<div class='btn' id='b" + data.recipies.length + "' onmousemove='change(true, " + '"' + index + '"' + ")' onmouseout='change(false, " + '"' + index + '"' + ")'>";
    str += "<img src='images/blank.png' width='100px' height='100px'>";
    str += "<div class='brief-info'>";
    str += "<h3 id='title'>Add item</h3>";
    str += "<p id='disc'></p>";
    str += "</div>";
    str += "</div>";
    str += "</div>";
    document.getElementById('container').innerHTML += str;
  }
}

function vote(){
  console.log("asdasd");
}
