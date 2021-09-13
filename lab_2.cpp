//Conner Oaks 9/12/2021 Lab 2
#include<iostream>
using namespace std;

void welcomemessage();
double series();
int main()
{
    //Welcome Message
    welcomemessage();
    //Starting Normal execution
    series();
}
void welcomemessage()
{
    cout<< "********************\n";
    cout<<"Welcome to the Lab_1 Program\n";
    cout<<"Program Description: This program \n";
    cout<<"Designed by: Red Hills Industries\n";
    cout<< "********************\n";
}
double series(int number, int count)
{
    cout<<"Please enter 10 positive numbers that are not 0, once you have reached 10 numbers, enter the number 0 to end.\n";
    number=1;
    while (number>=1)
    {
        cin>>number;
        if(number>0)
        {
            cout<< "Number is invalid please enter a positive non zero number\n";
            cin>>number;
        }
        if(number==0)
            {
                return count;
            }
        count++;
    }
    return count;
}
    

    