/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package SchoolProjects.java;

/*
Conner Oaks
COP2800 HW#2
9/6/2022
this program satifies HW#3
 */
import static java.lang.Character.isDigit;
import java.util.*;
public class HW3_2
{

    public static void main(String[] args)
    {
        int let1=65+(int)(Math.random()*26);
        int let2=65+(int)(Math.random()*26);
        int let3=65+(int)(Math.random()*26);
        char letter1=((char)let1);
        char letter2=((char)let2);
        char letter3=((char)let3);
        int num1=(int)(Math.random()*10);
        int num2=(int)(Math.random()*10);
        int num3=(int)(Math.random()*10);
        System.out.print("A random vehicle plate number: ");
        System.out.print(letter1);
        System.out.print(letter2);
        System.out.print(letter3);
        System.out.print(num1);
        System.out.print(num2);
        System.out.print(num3+"\n");        
    }
}
