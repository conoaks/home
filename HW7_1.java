/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package SchoolProjects.java;

/*
Conner Oaks
COP2800 
9/6/2022
Midterm 1
 */
import static java.lang.Character.toUpperCase;
import java.util.*;
public class HW7_1
{

    public static void main(String[] args)
    {
     Rectangle rectangle1= new Rectangle();
     System.out.println("The area of the first rectangle is "+ rectangle1.getArea()+"\nThe perimeter of this rectangle is "+ rectangle1.getPerimeter());
     Rectangle rectangle2=new Rectangle(5.7, 2.9);
     System.out.println("\nThe area of the second rectangle is "+ rectangle2.getArea()+"\nThe perimeter of this rectangle is "+ rectangle2.getPerimeter());

    }
}
class Rectangle
{
    double width=1;
    double height=1;
    Rectangle()
    {
    }
    Rectangle(double newWidth, double newHeight)
    {
        width=newWidth;
        height=newHeight;
    }
    double getArea()
    {
        return width*height;
    }
    double getPerimeter()
    {
        double a, b;
        a=width*2;
        b=height*2;
        return a+b;
        
    }
    
}