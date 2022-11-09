/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package schoolprojects.java;

/*
Conner Oaks
COP2800 
9/6/2022
Midterm 1
 */
import static java.lang.Character.toUpperCase;
import java.util.*;
public class HW8_2 
{

    public static void main(String[] args)
    {
        int tempAccId;
        int choice=0;
        Account accID[] = new Account[10];
            for(int i=0; i<accID.length; i++)
            {
                accID[i] = new Account();
                accID[i].setBalance(100);
                accID[i].setId(i);
            }
        System.out.println("Welcome to the ATM machine game!\n \nEnter an ID between 0 and 9, 999 to quit the game: ");
        Scanner acc= new Scanner(System.in);
        tempAccId=acc.nextInt();
        Scanner num = new Scanner(System.in); Scanner amount=new Scanner(System.in);
        while (tempAccId!=999)
        {
            {
                
                if(tempAccId>=0 &&tempAccId<=9)
                {
                    System.out.println("Main menu \n1: check balance \n2: withdraw \n3: deposit \n4: exit");
                    choice=num.nextInt();
                    int number;
                    while(choice!=4)
                    {
                        switch(choice)
                        {
                            default: System.out.println("Enter a valid option");choice=num.nextInt(); break;
                            case 1: System.out.println("The Account Balance is $"+accID[tempAccId].getBalance()); System.out.println("Main menu \n1: check balance \n2: withdraw \n3: deposit \n4: exit"); choice=num.nextInt(); break;
                            case 2: System.out.println("Enter the amount you would like to withdraw: "); number=amount.nextInt(); accID[tempAccId].withdraw(number); System.out.println("Main menu \n1: check balance \n2: withdraw \n3: deposit \n4: exit"); choice=num.nextInt(); break;
                            case 3: System.out.println("Enter the amount you would like to deposit: ");number=amount.nextInt(); accID[tempAccId].deposit(number); System.out.println("Main menu \n1: check balance \n2: withdraw \n3: deposit \n4: exit"); choice=num.nextInt(); break;
                        }
                    }
                    if(choice==4)
                    {
                        System.out.println("Enter an ID between 0 and 9, 999 to quit the game: ");
                        tempAccId=acc.nextInt();
                    }
                    if(choice>4)
                    {
                        System.out.println("Enter a valid Option");
                    }
                }
                if (tempAccId<0 || tempAccId>9 && tempAccId!=999)
                {
                    System.out.println("Error: Enter a valid Account Number");
                    tempAccId=acc.nextInt();            
                }
            }
        }
        
        if (tempAccId==999)
        {
            System.out.println("Goodbye");
        }
    }
}
class Account
{
    private int id;
    private double monthlyFee;
    private double balance;
    Account(){};
    Account(int id,double balance)
    {
       Account Account = new Account();
       Account.setId(id);
       Account.setBalance(balance);
       Account.setMonthlyFee(0);
    }
    void setId(int newId)
    {
        id=newId;
    }
    int getId()
    {
        return id;
    }
    void setBalance(double newBal)
    {
        balance=newBal;
    }
    double getBalance()
    {
        return balance;
    }
    void setMonthlyFee(double newFee)
    {
        monthlyFee=newFee;
    }
    double getMonthlyFee()
    {
        return monthlyFee;
    }
    double calMonthlyBalance()
    {
        double endBal;
        endBal=balance-monthlyFee;
        return endBal;
    }
    void withdraw(double amount)
    {
        balance-=amount;
    }
    void deposit(double amount)
    {
        balance+=amount;
    }
}