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
public class HW6_2 
{

    public static void main(String[] args)
    {
        boolean cycle=true;
        double numbers[]=new double[10];
        double maximum;
        while (cycle==true)
        {
            System.out.println("Enter 10 numbers for the array, separated by spaces:");
            Scanner input=new Scanner(System.in);
            for(int y=0; y<9; y++)
            {
                numbers[y]=input.nextDouble();
              // System.out.println(numbers[y]); //for testing
            }
            maximum=max(numbers);
            System.out.println("The maximum number in the array is "+ maximum);
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
    public static double max(double[] array)
    {
        double maximum = array[0];
        for(int x=1; x<array.length; x++)
        {
            if (array[x]>maximum)
            {
                maximum=array[x];
            }
        }
        return maximum;
    }
}