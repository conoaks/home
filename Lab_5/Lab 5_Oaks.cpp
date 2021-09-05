//Conner Oaks
//2/28/2021
//Lab 5
//welcome message, then student will enter first and last name, loan payment, insurance costs, gas costs, and maintenance costs then display them, then total them up, should be shown in a neat manner

#include <iostream>
#include<string>
#include<iomanip>

using namespace std;

int main ()
{
    //Variables
    string name;
    float month_loan, month_insurance, month_gas, month_misc, month_total, year_total;
    //program
    cout<< "Hello and welcome, this program will list out the total cost of owning a vehicle, and your name, as you go, you will be asked various questions including dollar amounts, do not enter a dollar sign, it will be entered later.\n";
    cout<< "Please Enter your name then press enter:";
    getline (cin, name);
    cout<< "Please input your monthly loan payment:";
    cin>> month_loan;
    cout<< "Please input your monthly insurance cost:";
    cin>> month_insurance;
    cout<< "Please input your monthly gas bill:";
    cin>> month_gas;
    cout<<"Please input your monthly maintenance costs, and other miscellaneous costs:";
    cin>> month_misc;
    // all information is now input
    //defining new variable
    month_total=(month_loan+month_insurance+month_gas+month_misc);
    year_total=(month_total*12);
    //continuing execution
    cout<<"\n";
    cout<<setw(25) <<"Name:" <<name <<"\n";
    cout<< left<< setprecision(6) << setw(25) << "Monthly Loan Payment:" <<"$" <<month_loan <<"\n";
    cout<< left<< setprecision(6)  << setw(25) << "Monthly Insurance cost:" <<"$" <<month_insurance <<"\n";
    cout<< left<< setprecision(6) << setw(25) <<"Monthly Gas Cost:" <<"$" <<month_gas <<"\n";
    cout<< left<< setprecision(6) << setw(25) <<"Monthly Misc. Costs:" <<"$" <<month_misc <<"\n";
    cout<< left<< setprecision(6) << setw(25) <<"Total Monthly cost:" <<"$" <<month_total <<"\n";
    cout<< left<< setprecision(6)<< setw(25) <<"Total Yearly cost:" <<"$" <<year_total <<"\n";
    cout<< "Thank you for using out software.";
    return 0;

}
