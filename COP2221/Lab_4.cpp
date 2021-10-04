//Conner Oaks 9/5/2021 Lab 1
#include<iostream>
using namespace std;

void welcomemessage();
void display();
void repeat();

int main()
{
    welcomemessage();
    display();
    
}
void welcomemessage()
{
    cout<< "********************\n";
    cout<<"Welcome to the Lab_4 Program\n";
    cout<<"Program Description: This Program is designed to have a user enter 10 integers and store them into an array, then display the largest and smallest, along with all of the entered numbers.\n";
    cout<<"Designed by: Red Hills Industries\n";
    cout<< "********************\n";
}
void display()
{
    int nums[10];
    int k=0;
    int largest;
    int smallest;
    cout<< "Enter 10 integers please:\n";
    for(int k=0; k<10; k++)
    {
        cout<< "Enter a number:\n";
        cin>>nums[k];
    }
    k=0;
   for(k=0; k<10; k++)
   {
       cout<<nums[k] << "\n";
   }
   largest=nums[0];
   for(k=1; k<10; k++)
   {
       if(nums[k]>largest)
       {
           largest=nums[k];
       }
   }
   cout<<"The Largest Number is " <<largest <<"\n";
smallest=nums[0];
   for(k=1; k<=10; k++)
   {
       if(nums[k]<smallest)
       {
           smallest=nums[k];
       }
   }
   cout<<"The smallest is " <<smallest <<"\n";
   repeat();
}
void repeat()
{
    char repeat;
   
  cout<<"Would you like to do it again?(enter y for yes, n for no)\n";
  cin>> repeat;
  if(repeat=='Y'||repeat=='y')
  {
      display();
  }
  else
  {
      cout<<"Goodbye";
  }
}