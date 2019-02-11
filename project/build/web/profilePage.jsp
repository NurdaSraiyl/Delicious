<%-- 
    Document   : profilePage
    Created on : 04.02.2019, 15:25:43
    Author     : Andrei Golovkin
--%>

<%@page import="fileReader.section"%>
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
        <script src="profilePage/script.js"></script>
    </head>
    <body>
        <%= section.getText("header.html", this) %>
        
        <div class="container text-left main-place">
            <h3 id="login-text">none</h3>
            <table>
                <tr>
                    <td>name:</td>
                    <td id="name">-</td>
                </tr>
            </table>
        </div>
        
        <footer class="container"></footer>
    </body>
    
    <script>
        upload();
        localUpload();
    </script>
</html>
