var t = window.sessionStorage.getItem("Type");
if(t == "Chef"){
  document.getElementById('p').innerHTML = "Edit menu";
}
document.getElementById('text').innerHTML = window.sessionStorage.getItem("name");
