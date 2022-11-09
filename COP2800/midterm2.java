/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package SchoolProjects.java;

/*
Conner Oaks
Midterm 1
9/6/2022
Midterm 2
 */
import static java.lang.Character.toUpperCase;
import java.util.*;
public class midterm2
{

    public static void main(String[] args)
    {
       int evenCount=0;
       int oddCount=0;
       int number=0;
       System.out.println("Enter a list of integers, end it with a non positive value");
       Scanner integers = new Scanner(System.in);
       number = integers.nextInt();
       while(number>0)
       {
           number=integers.nextInt();
           if(number<=0)
           {
                number=0;
           }
           if(number%2==0)
           {
               evenCount++;
           }
           if(number%2>0)
           {
               oddCount++;
           }
           if (number==0)
           {
                System.out.print("The number of even integers is "+ evenCount+ "\n The Number of odd integers is "+oddCount+"\n");
           }
           
       }
    }
}