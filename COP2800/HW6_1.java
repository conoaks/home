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
public class HW6_1 
{

    public static void main(String[] args)
    {
        boolean cycle=true;
        int number;
        int [] counts= new int[10];
        System.out.println("This program generates 100 random integers between 0 and 9 and displays the count for each number");
        while (cycle==true)
        {
            for(int x=0; x<100; x++)
            {
                number=(int)(Math.random()*10);
                switch (number)
                {
                    case 0: counts[0]+=1; break;
                    case 1: counts[1]+=1; break;
                    case 2: counts[2]+=1; break;
                    case 3: counts[3]+=1; break;
                    case 4: counts[4]+=1; break;
                    case 5: counts[5]+=1; break;
                    case 6: counts[6]+=1; break;
                    case 7: counts[7]+=1; break;
                    case 8: counts[8]+=1; break;
                    case 9: counts[9]+=1; break;
                }
            }
            for(int y=0; y<=9; y++)
            {
                System.out.println("Number of "+y+"s is "+ counts[y]);
            }
            cycle=repeat();
        }
    }
    //this is a method for the asking to repeat
    public static boolean repeat() 
    {
        int cycle; 
        String repeat; 
        System.out.println("Continue? (y/n)");
          Scanner again=new Scanner(System.in);
          repeat=again.nextLine();
          cycle=toUpperCase(repeat.charAt(0));
          if(cycle=='Y')
          {
              return true;
          }
          if(cycle!='Y')
          {
              System.out.println("Good bye!");
              return false;
          }
          else
          {
              System.out.println("Good bye!");
              return false;
          }
    }
}