<%-- 
    Document   : catalogue
    Created on : 26.01.2019, 16:11:15
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
            Catalogue<br>
            
            <%
                for(int n = 0; request.getAttribute("m" + n + "title") != null; n++){
                    %>
                    
                    <h3><%= (String) request.getAttribute("m" + n + "title") %></h3>
                    <%= (String) request.getAttribute("m" + n + "desc") %>
                    
                    <%
                }
            %>
            
            <%! 
                int p = 0;
                int mp = 0;
            %>
            
            <%
                p = (Integer) request.getAttribute("page");
                mp = (Integer) request.getAttribute("maxPage");
            %>
            
            <div id="pages" class="text-center">
                <ul class='pagination'>
                    <%= (p > 1) ? ("<li><a href='/project/getMeals?page=" + 1 + "'><<</a></li><li><a href='/project/getMeals?page=" + (p - 1) + "'><</a></li>") : "" %>
                    
                    <% 
                        for(int n = p - 5 > 0 ? p - 5 : 0; n < mp && n < p + 4; n++){
                    %>
                            <%= (n + 1 != p ? "<li><a href='/project/getMeals?page=" + (n + 1) + "'>" : "<li class='active'><a>") + (n+1) + "</a></li>" %>
                    <%
                        }
                    %>
                    
                    <%= (p < mp) ? ("<li><a href='/project/getMeals?page=" + (p + 1) + "'>></a></li><li><a href='/project/getMeals?page=" + mp + "'>>></a></li>") : "" %>
                </ul>
            </div>
        </div>

        <footer class="container"></footer>
    </body>
</html>
