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
import static java.lang.Character.toUpperCase;
import java.util.*;
public class HW5_2 
{

    public static void main(String[] args)
    {
      String toss;
      boolean cont=true;
      String repeat;
      int cycle;
      while (cont==true)
      {
      System.out.println("How many times do you want to flip?");
      Scanner times=new Scanner(System.in);
      int loop=times.nextInt();
      toss=coinToss(loop);
      System.out.println(toss);
      System.out.println("Continue? (y/n)");
      Scanner again=new Scanner(System.in);
      repeat=again.nextLine();
      cycle=toUpperCase(repeat.charAt(0));
          if(cycle=='Y')
          {
              cont=true;
          }
          if(cycle!='Y')
          {
              cont=false;
          }
      }
    }
    public static String coinToss(int loop)
    {
        int flip, heads=0, tails=0, count=0;
        while(count<=loop)
        {    
            flip=(int) (Math.random()*2)+1;
            if (flip==1)
            {
                heads++;
                count++;
            }
            if (flip==2)
            {
                tails++;
                count++;
            }
            if(count==loop)
            {
                return "It landed on heads "+heads+" times, and it landed on Tails "+ tails+ " times";
            }
            
        }
        return "";
    }
}