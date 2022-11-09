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
public class SchoolProjects 
{

    public static void main(String[] args)
    {
        Product p1=new Product("html", "Crash course HTML", 19.99);
        p1.print();
        System.out.print("\n");
        Book b1=new Book("java", "Introduction to Java", 59.99, "Danial Liang");
        b1.print();
        System.out.print("\n");
        Software s1=new Software("jdk", "Java Development Kit", 29.99, "1.8.0");
        s1.print();
    }
}
class Product
{
    private String code;
    private String description;
    private double price;
    Product(){}
    Product(String code,String description, double price)
    {
        this.setCode(code);
        this.setDescription(description);
        this.setPrice(price);
    }
    public void setCode(String code)
    {
        this.code=code;
    }
    public String getCode()
    {
        return this.code;
    }
    public void setDescription(String description)
    {
        this.description=description;
    }
    public String getDescription()
    {
        return this.description;
    }
    public void setPrice(double price)
    {
        this.price=price;
    }
    public double getPrice()
    {
        return this.price;
    }
    public void print()
    {
        System.out.println("Product Code: "+this.getCode());
        System.out.println("Product Name: "+this.getDescription());
        System.out.println("Price: $"+this.getPrice());
    }
}
class Book extends Product
{
    private String author;
    Book(){}
    Book(String code,String description, double price, String author)
    {
        this.setCode(code);
        this.setDescription(description);
        this.setPrice(price);
        this.setAuthor(author);
    }
    public void setAuthor(String author)
    {
        this.author=author;
    }
    public String getAuthor()
    {
        return this.author;
    }
    @Override
    public void print()
    {
       super.print();
        System.out.println("Author: "+this.getAuthor());
    }
}
class Software extends Product
{
    private String version;
    Software(){}
    Software(String code,String description, double price,String version)
    {
        this.setCode(code);
        this.setDescription(description);
        this.setPrice(price);
        this.setVersion(version);
    }
    public void setVersion(String version)
    {
        this.version=version;
    }
    public String getVersion()
    {
        return this.version;
    }
    @Override
    public void print()
    {
        super.print();
        System.out.println("Version: "+this.getVersion());
    }
}