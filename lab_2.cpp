//Conner Oaks 9/12/2021 Lab 2
#include<iostream>
using namespace std;

void welcomemessage();
int series(int);
void values(int);

int main()
{
    int value, count;
    //Welcome Message
    welcomemessage();
    //Starting Normal execution
    value= series(count);
       //cout<< value <<"\n"; //Used to test an output
    values(value);
    //return 0;

}
void welcomemessage()
{
    cout<< "********************\n";
    cout<<"Welcome to the Lab_1 Program\n";
    cout<<"Program Description: This program tells you if you have entered 10 positive non-zero numbers\n";
    cout<<"Designed by: Red Hills Industries\n";
    cout<< "********************\n";
}
int series(int count)
{
    int number;
    cout<<"Please enter 10 positive numbers that are not 0, once you have reached 10 numbers, enter the number 0 to end.\n";
    number=1;
    count=0;
    while (number>0)
    {
        cin>>number;
         if (number<0)
        {
            cout<<"Number is invalid, try again\n";
            cin>>number;            
        }
        if(number>0)
        {
            cout<<"Enter Another Number\n";
        }
        count++;
        //cout<<"Now on loop:" <<count; //for testing purposes
    }
    count=count-1;
    return count;
}
void values(int value)
{
    if(value>10)
    {
        cout<<"More than 10 positive numbers were entered\n";
        "The program will now end\n";
    }
    if(10>=value)
    {
        cout<<"10 or fewer positive numbers were entered\n The Program will now end\n";
    }
}    