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
import static java.lang.Character.isDigit;
import java.util.*;
public class HW3_1 
{

    public static void main(String[] args)
    {
        System.out.println("Enter your Social Security Number in the format xxx-xx-xxxx");
       String ssn;
        Scanner number= new Scanner(System.in);
        ssn= number.nextLine();
        Character dash1=ssn.charAt(3);
        Character dash2=ssn.charAt(6);
            if (dash1.equals(dash2))
            {
                String ssn1=ssn.substring(0, 3);
                //System.out.println(ssn1); each to test substring
                String ssn2=ssn.substring(4, 6);
                //System.out.println(ssn2);
                String ssn3=ssn.substring(7, 11);
                //System.out.println(ssn3);
                if(isDigit(ssn1.charAt(0))&& isDigit(ssn1.charAt(1)))
                {
                    if(isDigit(ssn1.charAt(2)))
                    {
                        if(isDigit(ssn2.charAt(0)))
                        {
                            if(isDigit(ssn2.charAt(1)))
                            {
                                if(isDigit(ssn3.charAt(0)))
                                {
                                    if(isDigit(ssn3.charAt(1)))
                                    {
                                        if(isDigit(ssn3.charAt(2)))
                                        {
                                            if(isDigit(ssn3.charAt(3)))
                                            {
                                                System.out.println(ssn+" is a valid Social Security Number");
                                            }
                                            else
                                            {
                                                System.out.println(ssn+" is not a valid social security number");
                                            }
                                        }
                                        else
                                        {
                                            System.out.println(ssn+" is not a valid social security number");
                                        }
                                    }
                                    else
                                    {
                                        System.out.println(ssn+" is not a valid social security number");
                                    }
                                }
                                else
                                {
                                    System.out.println(ssn+" is not a valid social security number");
                                }
                            }
                            else
                            {
                                System.out.println(ssn+" is not a valid social security number");
                            }
                        }else
                        {
                            System.out.println(ssn+" is not a valid social security number");
                        }
                    }
                    else
                    {
                        System.out.println(ssn+" is not a valid social security number");
                    }
                }
                else
                {
                    System.out.println(ssn+" is not a valid social security number");
                }
            }
            else
            {
                System.out.println(ssn+" is not a valid social security number");
            }

        
        
        
        
    }
    
}
