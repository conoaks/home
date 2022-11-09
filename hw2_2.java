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
public class hw2_2 
{

    public static void main(String[] args)
    {
        int h, y, m, q, k, j;
        System.out.println("Enter the year");
        Scanner yearInput =  new Scanner(System.in);
            y=yearInput.nextInt();
        System.out.println("enter the month(1-12)");
        Scanner monthInput = new Scanner (System.in);
            m=monthInput.nextInt();
                if (m==1 || m==2)
                    {
                        m += 12;
                        y--;
                    }
         System.out.println("Enter the day of the month(1-31)");
         Scanner dayInput = new Scanner(System.in);
            q=dayInput.nextInt();
        j=y/100;
        k=y%100;
        h = (q + (int)((26 * (m + 1)) / 10.0) + k + (int)(k / 4.0) + (int)(j / 4.0) + (5 * j)) % 7;
        System.out.print("The Day of the week is");
        switch(h)
        {
            case 0: System.out.print(" Saturday"); break;
            case 1: System.out.print(" Sunday"); break;
            case 2: System.out.print(" Monday"); break;
            case 3: System.out.print(" Tuesday"); break;
            case 4: System.out.print(" Wednesday"); break;
            case 5: System.out.print(" Thursday"); break;
            case 6: System.out.print(" Friday"); break;
        }
        
    }
    
}
