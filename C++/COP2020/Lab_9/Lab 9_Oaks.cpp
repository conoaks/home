#include<iostream>
#include<string>
using namespace std;
int main()
{
    float numAmount, loop, number, numbersum;
    char cont;

    cout<<"Welcome to the program.\n";
    cont='Y';
    numAmount=0;
    number=0;
    while(cont=='Y' || cont=='y')
    {
        cout<< "How many numbers would you like to add?";
        cin>>numAmount;
        cout<<numAmount <<"\n";
        cout<<"Enter the first number in your summation: ";
        cin>>numbersum;
        loop=0;
        while (loop<(numAmount-1))
        {
            int number1;
            loop=loop+1;
            cout<<"Enter the next number in the summation: ";
            cin>>number1;
            number=numbersum+number1;
            //cout<<"The current sum is: " <<number <<"\n"; //this is for testing my varibles, the math was being weird to start
            numbersum=number;
        }
        cout<<"The final sum is " <<number <<"\n";
        cout<<"Would you like to go again?\n";
        cin>>cont;
    }
    cout<<"The program will now end";
    return 0;
}