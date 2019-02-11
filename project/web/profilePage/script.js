function localUpload(){
    if(window.localStorage.getItem("login") == null)
        location.replace("index.jsp");
    
    document.getElementById("login-text").innerHTML = window.localStorage.getItem("login");
    
    var login = window.localStorage.getItem("login") == null ? window.sessionStorage.getItem("login") : window.localStorage.getItem("login");
    var password = window.localStorage.getItem("password") == null ? window.sessionStorage.getItem("password") : window.localStorage.getItem("password");
    console.log(login);
    
    $.ajax({
        type: "POST",
        url: "/project/userProfile",
        data: {
            login: login,
            password: password
        },
        success: function (result) {
            var str = result.split(";");
            
            $("#name").html(str[0]);
        }
    });
}