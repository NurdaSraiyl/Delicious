function upload() {
    if (window.localStorage.getItem("login") != null || window.sessionStorage.getItem("login") != null) {
        document.getElementById("authorization-bar").innerHTML = "";
        document.getElementById("authorization-bar").innerHTML += "<li><a href='profilePage.jsp'><span class='glyphicon glyphicon-user'> Profile</a></li>";
        document.getElementById("authorization-bar").innerHTML += "<li><a href='#' onclick='logOut()'><span class='glyphicon glyphicon-log-out'> Logout</a></li>";
    }

    $.ajax({
        type: "POST",
        url: "/project/checkAcc",
        data: {
            login: window.localStorage.getItem("login") == null ? window.sessionStorage.getItem("login") : window.localStorage.getItem("login"),
            password: window.localStorage.getItem("password") == null ? window.sessionStorage.getItem("password") : window.localStorage.getItem("password")
        },
        success: function (result) {

            if (result === "false" && window.localStorage.getItem("login") != null)
                logOut();
        }
    });
}

function logOut() {
    window.localStorage.removeItem("login");
    window.localStorage.removeItem("password");
    
    window.sessionStorage.removeItem("login");
    window.sessionStorage.removeItem("password");

    location.reload();
}

 $(document).on("click.bs.dropdown.data-api", ".noclose", function (e) { e.stopPropagation() });