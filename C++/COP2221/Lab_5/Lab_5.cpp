//Conner Oaks 9/5/2021 Lab 1
#include<iostream>
#include<string>
#include<cctype>

using namespace std;

void welcomemessage();
void password();
bool test(char);
int main()
{
    char pass2[8];
    welcomemessage();
    password();

}
void welcomemessage()
{
    cout<< "********************\n";
    cout<<"Welcome to the Lab_5 Program\n";
    cout<<"Program Description: This Program is designed to recive a password\n";
    cout<<"Designed by: Red Hills Industries\n";
    cout<< "********************\n";
}
void password()
{
    int SIZE=8;
    char pass[SIZE];
    int length;
    int count;
    int hasupper=0;
    int hasnum=0;
    int haslower=0;
    cout<< "Please enter a 7 character password\n the password must be 7 characters long, no more, no less\n it can be numbers and letters, but must include at least one uppercase letter and at least one number\n";
    cin.getline(pass, SIZE);
    //cout <<length;
    //cout<<"Test";
        
            
    for(count=0; count<8; count++)
    {
        hasnum;
        hasupper;
        //cout<<"Test";
        if(isdigit(pass[count]))
        {
            hasnum++;
        }
        if(isupper(pass[count]))
        {
            hasupper++;
        }
        if(islower(pass[count]))
        {
            haslower++;
        }
        
        
        //cout<<hasupper <<hasnum;
    }
    if (hasnum>0 && hasupper>0 && haslower>0)
    {
        cout<<"Success, you password was accepted!";
    }
    if(hasnum==0 && hasupper>0 && haslower>0)
    {
        cout<<"Your password entry was not accepted because you did not have a number in your entry.";
    }
    if(hasupper==0 && hasnum>0 && haslower>0)
    {
        cout<<"Your Password entry was not accepted because it did not have an upper case character in it";
    }
    if(hasupper==0 && hasnum==0 && haslower==0)
    {
        cout<< "Your password was not accepted bacause it has the wrong number of characters";
    }
    if(hasnum>0 && hasupper==0 && haslower==0)
    {
        cout<<"Your password has no letters in it.";
    }
    if(hasnum==0 && hasupper>0 && haslower>0)
    {
        cout<<"Your password has no numbers in it.";
    }
    if(hasnum==0 && hasupper==0 && haslower>0)
    {
        cout<<"Your password only has lowercase letters.";
    }
}