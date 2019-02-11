<%-- 
    Document   : index
    Created on : 26.01.2019, 15:43:25
    Author     : Andrei Golovkin
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
        
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        <link rel="stylesheet" href="style.css">

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
        <script src="script.js"></script>
    </head>
    <body>
        <nav class="navbar navbar-inverse container">
            <ul class="nav navbar-nav">
                <li><a href="index.jsp"><span class="glyphicon glyphicon-home"></span> Home</a></li>
                <li><a href="/project/getMeals">catalogue</a></li>
            </ul>
            <ul id="authorization-bar" class="nav navbar-nav navbar-right">
                <li><a href="login.jsp"><span class="glyphicon glyphicon-log-in"></span> Log in</a></li>
            </ul>
        </nav>
        
        <div class="container text-left main-place">
            
        </div>

        <footer class="container"></footer>
    </body>
    
    <script>upload()</script>
</html>
