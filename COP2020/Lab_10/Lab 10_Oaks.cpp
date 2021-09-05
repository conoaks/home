#include<iostream>
#include<iomanip>
using namespace std;
int main()
{
    int squarew, squareh, iterations; 
    cout<<"How wide and tall do you want the square? ";
    cin>>iterations;
    for(squarew=0; squarew<iterations; squarew++)
    {
        cout<<"*";
        for(squareh=1; squareh<iterations; squareh++)
        {
            cout<<"*";
        }
        cout<<"\n";
    }
    
}