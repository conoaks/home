//Conner Oaks Lab 6
#include<iostream>
using namespace std;


int main()
{
    cout<< "********************\n";
    cout<<"Welcome to the Lab_6 Program\n";
    cout<<"Program Description: This Program is designed to kep track of monthly traffic at a local Airport for a year\n";
    cout<<"Designed by: Red Hills Industries\n";
    cout<< "********************\n";
    //Introduction;
    int size=12;
    struct MonthTravel
    {
        int land;
        int depart;
        int great;
        int least;
    };
    double monthaverageland, monthaveragedepart, totalLand=0, totalDepart; 
    int month;
    MonthTravel array[size];
    //Structure and varible declaration 
    for(month=0; month<size; month++ )
    {
        cout<<"Please enter Total number of planes that have landed for month " << month+1 << ".\n";
        cin>> array[month].land;
        cout<<"Please enter Total number of planes that have departed for month " << month+1 << ".\n";
        cin>> array[month].depart;
        cout<<"Please enter the most number of planes that landed on a given day in month "<< month+1 <<".\n";
        cin>> array[month].great;
        cout<<"Please enter the most number of planes that departed on a given day in month "<< month+1 <<".\n";
        cin>> array[month].least;
    }
    /* //a test to make sure that values are passing correctly
    for(month=0; month<size; month++)
    {
        cout<< array[month].land;
        cout<< array[month].depart;
        cout<< array[month].great;
        cout<< array[month].least;
    }
    */
   for (month=0; month<size; month++)
   {
       totalLand=array[month].land+totalLand;
   }
   //cout<<totalLand/size;//a test to make sure that totalLand was initialized correctly
   for (month=0; month<size; month++)
   {
       totalDepart=array[month].depart+totalDepart;
   }
   //cout<<totalDepart/2;//totalDepart average test
   cout<<"The total number of planes that have landed for the year is: " << totalLand <<"\n";
   cout<<"The total number of planes that have departed this year is: " <<totalDepart <<"\n";
   for (month=0; month<size; month++)
   {
       cout<<"The number of planbes that landed in month " <<month+1 <<" is " << array[month].land <<"\n";
       cout<<"The number of planes that have departed in month " <<month+1 <<" is " <<array[month].depart <<"\n";
       cout<<"The greatest number of planes that landed in month " <<month+1 <<" is " <<array[month].great<<"\n";
       cout<<"The least number of p[lanes that landed in month " <<month+1 <<" is " <<array[month].least<<"\n";
   }
   cout<<"The average number of planes that have landed this year is "<<totalLand/2<<"\n";
   cout<<"The average number of planes that have departed this year is "<<totalDepart/size<<"\n";
   
}
