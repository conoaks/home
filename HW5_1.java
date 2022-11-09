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
public class HW5_1 
{

    public static void main(String[] args)
    {
      int t9_2, t9_3, t9_4, t9_5, t9_6, t9_7, t9_8, cycle;
      String phoneNum, repeat;
      boolean cont=true;
      while (cont==true)
      {
          System.out.println("Enter a phone number as a string using the format #-###-AAAAAAA)");
          Scanner number=new Scanner(System.in);
          phoneNum=number.nextLine();
          t9_2=getNumber( toUpperCase(phoneNum.charAt(6)));
          t9_3=getNumber( toUpperCase(phoneNum.charAt(7)));
          t9_4=getNumber( toUpperCase(phoneNum.charAt(8)));
          t9_5=getNumber( toUpperCase(phoneNum.charAt(9)));
          t9_6=getNumber( toUpperCase(phoneNum.charAt(10)));
          t9_7=getNumber( toUpperCase(phoneNum.charAt(11)));
          t9_8=getNumber( toUpperCase(phoneNum.charAt(12)));
          System.out.println(phoneNum+" Translates to "+phoneNum.substring(0, 6)+t9_2+t9_3+t9_4+t9_5+t9_6+t9_7+t9_8);
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
      if (cont==false)
      {
          System.out.println("Good bye!");
      }
    }
     public static int getNumber(char uppercaseLetter)
     {
         if (uppercaseLetter=='A' || uppercaseLetter=='B' || uppercaseLetter=='C')
         {
         return 2;
         }
         if(uppercaseLetter=='D' || uppercaseLetter=='E' || uppercaseLetter=='F')
         {
             return 3;
         }
         if(uppercaseLetter=='G' || uppercaseLetter=='H' || uppercaseLetter=='I')
         {
             return 4;
         }
         if(uppercaseLetter=='J' || uppercaseLetter=='K' || uppercaseLetter=='L')
         {
             return 5;
         }
         if(uppercaseLetter=='M' || uppercaseLetter=='N' || uppercaseLetter=='O')
         {
             return 6;
         }
         if(uppercaseLetter=='Q' || uppercaseLetter=='R' || uppercaseLetter=='S')
         {
             return 7;
         }
         if(uppercaseLetter=='T' || uppercaseLetter=='U' || uppercaseLetter=='V')
         {
             return 8;
         }
         if(uppercaseLetter=='W' || uppercaseLetter=='X' || uppercaseLetter=='Y'||uppercaseLetter=='Z')
         {
             return 9;
         }
         else
         {
             return 0;
         }
     }
}