/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package fileReader;

import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.Scanner;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.http.HttpServlet;

/**
 *
 * @author Andrei Golovkin
 */
public class section {
    public static String getText(String path, HttpServlet servlet){
        String ans = "";
        try {
            Scanner fileScan = new Scanner(new FileInputStream(servlet.getServletContext().getRealPath(path)));
            
            while(fileScan.hasNextLine()) ans += fileScan.nextLine();
        } catch (FileNotFoundException ex) {
            Logger.getLogger(section.class.getName()).log(Level.SEVERE, null, ex);
        } catch (IOException ex) {
            Logger.getLogger(section.class.getName()).log(Level.SEVERE, null, ex);
        }
        return ans;
    }
}
