/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package DB;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

/**
 *
 * @author Andrei Golovkin
 */
public class requestHandler {
    Connection con;
    
    public requestHandler() throws ClassNotFoundException, SQLException{
        Class.forName(var.driver);
        con = DriverManager.getConnection(var.url, var.user, var.password);
    }
    
    public ResultSet execute(String command) throws SQLException{
        Statement st = con.createStatement();
        return st.executeQuery(command);
    }
    
    public int executeUpdate(String command) throws SQLException{
        Statement st = con.createStatement();
        return st.executeUpdate(command);
    }
    
    public void close() throws SQLException{
        con.close();
    }
}
