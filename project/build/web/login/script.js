function submit(){
    
    $.ajax({
        type: "POST",
        url: "/project/checkAcc",
        data: {
            login: $("#login").val(),
            password: $("#password").val()
        },
        success: function (result) {

            if (result === "true"){
                if($("#remember").is(":checked")){
                    window.localStorage.setItem("login", $("#login").val());
                    window.localStorage.setItem("password", $("#password").val());
                }
                else{
                    window.sessionStorage.setItem("login", $("#login").val());
                    window.sessionStorage.setItem("password", $("#password").val());
                }
                
                window.location.replace("index.jsp");
            }
            else
                $("#err").html("<div class='alert alert-danger'><strong>Invalid Data</strong></div>");
        }
    });
}