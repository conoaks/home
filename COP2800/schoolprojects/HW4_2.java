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
import java.util.*;
public class HW4_2 
{

    public static void main(String[] args)
    {
      int max;
      int number;
      int count=1;
      String cont="y";
      
      Scanner num=new Scanner(System.in);
      Scanner conti=new Scanner(System.in);
      System.out.println("Enter numbers, input ends with 0:");
      max=num.nextInt();
      number=1;
        while(cont.equals("y")||cont.equals("Y"))
        {
              number=num.nextInt();
              if(number>max)
              {
                  max=number;
                  count=1;
              }
              if(number==max)
              {
                  count++;
              }
              if(max>number && number==0)
              {
                System.out.println("The largest number is "+max+" and it occours "+(count-1)+" times");
                System.out.println("Continue? (y/n)");
                cont=conti.nextLine();
                  if(cont.equals("y")|| cont.equals("Y"))
                  {
                     System.out.println("Enter numbers, input ends with 0:");
                        max=num.nextInt();
                  }
                  if(cont.equals("n")|| cont.equals("N"))
                  {
                     return;
                  }
              }
            if(max==0)
            {
              System.out.println("The only number entered is 0");
              System.out.println("Continue? (y/n)");
              cont=conti.nextLine();
              System.out.println("Enter numbers, input ends with 0:");
            }
        }
    }
}