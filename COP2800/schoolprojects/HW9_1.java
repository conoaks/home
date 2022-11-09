/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package schoolprojects.java;

/*
Conner Oaks
COP2800 
9/6/2022
Midterm 1
 */
import static java.lang.Character.toUpperCase;
import java.util.*;
public class HW9_1 
{

    public static void main(String[] args)
    {
        System.out.print("Enter the side of a square: ");
        Scanner square = new Scanner(System.in);
        Square s1=new Square(square.nextDouble());
        Scanner squareColor = new Scanner(System.in);
        System.out.print("Enter a color: ");
        s1.setColor(squareColor.nextLine());
        System.out.print("Enter a Boolean value to indicate if the triangle is filled: ");
        Scanner squareBool = new Scanner(System.in);
        s1.setFilled(squareBool.nextBoolean());
        System.out.print(s1.toString());
        System.out.println("Area: "+s1.getArea());
        System.out.println("Perimiter: "+s1.getPerimiter());
        System.out.println("Color: "+s1.getColor());
        System.out.println("Filled: "+s1.isFilled());
        
    }
}
class GeometricObject
{
    private String color = "white";
    private boolean filled;
    private java.util.Date dateCreated;

    public GeometricObject() 
    {
      dateCreated = new java.util.Date();
    }


    public GeometricObject(String color, boolean filled)
    {
      dateCreated = new java.util.Date();
      this.color = color;
      this.filled = filled;
    }

    public String getColor() 
    {
      return color;
    }

    public void setColor(String color) 
    {
      this.color = color;
    }

    public boolean isFilled() 
    {
      return filled;
    }

    public void setFilled(boolean filled)
    {
      this.filled = filled;
    }

    public java.util.Date getDateCreated()
    {
      return dateCreated;
    }

    public String toString()
    {
      return "created on " + dateCreated + "\ncolor: " + color + 
        " and filled: " + filled;
    }
}
class Square extends GeometricObject
{
    private double side=1.0;
    Square()
    {

    }
    Square(double s)
    {
        this.setSide(s);
    }
    public void setSide(double s)
    {
        side=s;
    }
    public double getSide()
    {
        return side;
    }
    public double getArea()
    {
        return side*side;
    }
    public double getPerimiter()
    {
        return side*4;
    }
    public String toString()
    {
        return "Square: side = " + (int)side + "\n";
    }
}