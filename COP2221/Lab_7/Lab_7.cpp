#include<iostream>
using namespace std;

void welcomemessage();
class Car
    {
        public:
        int yearModel;
        string model;
        int speed;
        public:
        void getYear(int y)
        {
            yearModel=y;
        }
        void getModel(string m)
        {
            model=m;
        }
        int Accelerate(int s)
        {
            speed=s+5;
            return speed;
        }
        int Brake(int s)
        {
            speed=s-5;
            return speed;
        }

    };
int main()
{
    int year;
    string veh;
    int vroom=0;
    int sqert;
    int loop;
    welcomemessage();
    Car thing;
    cout<<"Enter the car's year:\n";
    cin>> year;
    thing.getYear(year);
    cout<<"Enter your car's model\n";
    cin>>veh;
    thing.getModel(veh);
    for(loop=0; loop<5; loop++)
    {
        sqert=thing.Accelerate(vroom);
        vroom=sqert;
        cout<<"your Speed is now: "<<vroom<<" Miles Per Hour\n";
    }
    for(loop=0; loop<5; loop++)
    {
        sqert=thing.Brake(vroom);
        vroom=sqert;
        cout<<"your Speed is now: "<<vroom<<" Miles Per Hour\n";
    }
}
void welcomemessage()
{
    cout<< "********************\n";
    cout<<"Welcome to the Lab_7 Program\n";
    cout<<"Program Description: This Program is designed to be a template for all future programs in the class\n";
    cout<<"Designed by: Red Hills Industries\n";
    cout<< "********************\n";
}
