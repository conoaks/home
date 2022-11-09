/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package SchoolProjects.java;

/*
Conner Oaks
COP2800 HW#2
9/6/2022
this program satifies HW#2
 */
import java.util.Scanner;
public class hw2 {

    public static void main(String[] args)
    {
        System.out.println("Enter the first 9 digits of the ISBN");
       int isbn1, isbn2, isbn3, isbn4, isbn5, isbn6, isbn7, isbn8, isbn9, endDigit;
       Scanner input =  new Scanner(System.in);
       isbn1=input.nextInt();
       isbn2=input.nextInt();
       isbn3=input.nextInt();
       isbn4=input.nextInt();
       isbn5=input.nextInt();
       isbn6=input.nextInt();
       isbn7=input.nextInt();
       isbn8=input.nextInt();
       isbn9=input.nextInt();
       endDigit=((isbn1*1)+(isbn2*2)+(isbn3*3)+(isbn4*4)+(isbn5*5)+(isbn6*6)+(isbn7*7)+(isbn8*8)+(isbn9*9))%11;
       System.out.println(isbn1+" "+isbn2+" "+isbn3+" "+isbn4+" "+isbn5+" "+isbn6+" "+isbn7+" "+isbn8+" "+isbn9+" "+endDigit);
    }
    
}
