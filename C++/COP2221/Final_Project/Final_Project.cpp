//Conner Oaks 9/5/2021 Lab 1
#include<iostream>
using namespace std;

void welcomemessage();
class Date
{
private:
    int month;
    int day;
    int year;
    string names[12];
    
public:
    Date(int, int, int)
    {
    }
    string setNames(int x)
    {
        names[0]="January";
        names[1]="Feburary";
        names[2]="March";
        names[3]="April";
        names[4]="May";
        names[5]="June";
        names[6]="July";
        names[7]="August";
        names[8]="September";
        names[9]="October";
        names[10]="November";
        names[11]="December";
        return names[x-1];
    }
    int setMonth(int x)
    {
        string monthName;
        month=x;
        if (month>0 && month<13)
        {
           return month;
        }
        else
        {
            cin>>x;
            setMonth(x);
        }
        return 0;
    };
    int setDay(int y)
    {
        day=y;
        if(day>0 && day<32)
        {
           return day;
        }
        else
        {
            cout<<"Enter a valid day: \n";
            cin>>y;
            setDay(y);
        }
        return 0;
    };
    int setYear(int z)
    {
        year=z;
        cout<<"the year is " <<year<<"\n";
        return year;
    }
    Date();
};
Date::Date()
{
   
};
void standard(int, int, int);
void longdate(string, int, int);
void mladate(int, string, int);
int main()
{
    string monthName;
    welcomemessage();
    Date date;
    int mon, da, yea;
    int monthEnd, dayEnd, yearEnd;
    cout<<"Enter the month: \n";
    cin>> mon;
    monthEnd = date.setMonth(mon);
    monthName = date.setNames(monthEnd);
    cout<<"Enter the Day number(1-31): \n";
    cin>> da;
    dayEnd = date.setDay(da);
    cout<< "Enter the Year(4 Number): \n";
    cin>>yea;
    yearEnd = date.setYear(yea);

    standard(monthEnd, dayEnd, yearEnd);

    longdate(monthName, dayEnd, yearEnd);

    mladate(dayEnd, monthName, yearEnd);
    
}
void welcomemessage()
{
    cout<< "********************\n";
    cout<<"Welcome to the Final Project Program\n";
    cout<<"Program Description: This Program is the final exam for this class\n";
    cout<<"Designed by: Red Hills Industries\n";
    cout<< "********************\n";
}
void standard(int a, int b, int c)
{
    cout<< a<<"/"<<b<<"/"<<c<<"\n"; 
}
void longdate(string a, int b, int c)
{
    cout<< a <<" "<< b <<", " <<c <<"\n";
}
void mladate(int a, string b, int c)
{
    cout<< a <<" "<< b <<" " << c<<"\n";
}