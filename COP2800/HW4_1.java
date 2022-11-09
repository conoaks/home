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
public class HW4_1 
{

    public static void main(String[] args)
    {
        System.out.println("Enter the first 9 digits of the ISBN");
        int isbn;
        String isbnStr;
        int isbn10=0;
        char isbnChar;
        int x=0;
        int isbn1=0, isbn2=0, isbn3=0, isbn4=0, isbn5=0, isbn6=0, isbn7=0, isbn8=0, isbn9=0;
        //char isbnChar1='0', isbnChar2='0', isbnChar3='0', isbnChar4='0', isbnChar5='0', isbnChar6='0', isbnChar7='0', isbnChar8='0', isbnChar9='0';
        Scanner number=new Scanner(System.in);
        isbn=number.nextInt();
        isbnStr=Integer.toString(isbn);
        x=isbnStr.length();
        while(x==9)
        {
            isbn1=((int)isbnStr.charAt(0)-48);
            isbn2=((int)isbnStr.charAt(1)-48);
            isbn3=((int)isbnStr.charAt(2)-48);
            isbn4=((int)isbnStr.charAt(3)-48);
            isbn5=((int)isbnStr.charAt(4)-48);
            isbn6=((int)isbnStr.charAt(5)-48);
            isbn7=((int)isbnStr.charAt(6)-48);
            isbn8=((int)isbnStr.charAt(7)-48);
            isbn9=((int)isbnStr.charAt(8)-48);//the -48 is to account for the int to char conversion, as '1' is 49, so subtracting 48 once it is an int corrects for this
            isbn10=((isbn1*1)+(isbn2*2)+(isbn3*3)+(isbn4*4)+(isbn5*5)+(isbn6*6)+(isbn7*7)+(isbn8*8)+(isbn9*9))%11;
            System.out.println("The ISBN-10 number is: "+isbnStr+isbn10);
            break;
        }
        while(x<9||x>9)
        {
            System.out.println("The ISBN-10 number is: "+isbnStr+"X");
            break;
        }
    }
}
