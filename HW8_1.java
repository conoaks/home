/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package SchoolProjects.java;

/*
Conner Oaks
COP2800 
9/6/2022
Midterm 1
 */
import static java.lang.Character.toUpperCase;
import java.util.*;
public class HW8_1 
{

    public static void main(String[] args)
    {
        MyString s = new MyString(new char[]{'H', 'e', 'l', 'l', 'o'}); 
        System.out.println(s.length()); 
        System.out.println(s.charAt(1)); 
        s.printMyString(); 
        s.toUpperCase().printMyString(); 
        s.substring(2).printMyString(); 
    }
}

class MyString
{
    private char chars[];
    public MyString(char[] newChars)
    { 
        chars = new char[newChars.length];         
        System.arraycopy(newChars, 0, chars, 0, chars.length);
    }
    int length()
    {
        return chars.length;
    }
    char charAt(int index)
    {
        return chars[index];
    }
    MyString toUpperCase()
    {
        char up[];
        up = new char[chars.length];
        for(int i=0; i<chars.length; i++)
        {
            char uppercase, lowercase;
            lowercase=chars[i];
            uppercase=Character.toUpperCase(lowercase);
            up[i]=uppercase;
        }
        return new MyString(up);
    }
    MyString substring(int begin)
    {
        char str[];
        int cut;
        int j=0;//substring count
        cut=chars.length-begin;
        str = new char[cut];
        for(int i=begin; i<chars.length; i++)
        {
            char temp;
            temp=chars[i];
            str[j]=temp;
            j++;
        } 
        return new MyString(str);
    } 
    void printMyString()
    {
        for(int i=0; i<=chars.length; i++)
        {
            if(i<chars.length)
            {
            System.out.print(chars[i]);
            }
            if(i==chars.length)
            {
                System.out.print("\n");
            }
            
        }
    }
}
