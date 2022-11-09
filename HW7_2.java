/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package SchoolProjects.java;

/*
Conner Oaks
COP2800 
Homework 7
 */
public class HW7_2
{

    public static void main(String[] args)
    {
        Account account1=new Account(9876, 5700);
        System.out.println("Initial balance of the account with ID "+account1.getId()+" is $"+account1.getBalance());
        account1.deposit(1650);
        account1.withdraw(1300);
        System.out.println("End of month balance is $"+account1.calMonthlyBalance());
        
    }
}
class Account
{
    private static int id=0;
    private static double monthlyFee=0;
    private static double balance=0;
    Account(){};
    Account(int id,double balance)
    {
       Account.setId(id);
       Account.setBalance(balance);
       Account.setMonthlyFee(24.5);
    }
    static void setId(int newId)
    {
        id=newId;
    }
    int getId()
    {
        return id;
    }
    static void setBalance(double newBal)
    {
        balance=newBal;
    }
    double getBalance()
    {
        return balance;
    }
    static void setMonthlyFee(double newFee)
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