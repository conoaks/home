#include <iostream>
using namespace std;
int main()
{
    int choice;
    cout<<"Geometry Calculator\n 1. Calculate the Area of a circle \n 2. Calculate the Area of a rectangle \n 3.Calculate the Area of a Triangle\n 4. Quit \n Enter your choice (1-4)\n";
    cin>>choice;
    if(choice>1||choice<5)
    {
        switch (choice)
        {
            case 1:
            {
                float circleRadius, circleArea;
                cout<<"What is the radius of the circle?";
                cin>>circleRadius;
                circleArea=(3.154159*(circleRadius*circleRadius));
                cout<<"the area of the circle is: " <<circleArea;
             break;
            }   
            case 2:
            {
                float width, height, area;
                cout<<"What is the width of the rectangle?";
                cin>>width;
                cout<<"What is the height of the rectangle?";
                cin>>height;
                area=width*height;
                cout<<"The area of the rectangle is: " <<area;
                break;
            }
            case 3:
            {
                float base, height, triangleArea;
                cout<<"What is the base of the triangle?";
                cin>>base;
                cout<<"What is the height of the triangle";
                cin>>height;
                triangleArea=(0.5*base*height);
                cout<<"The area of the triange is: " <<triangleArea;
             break;
            }
            case 4:
            {
                cout<<"Goodbye";
                return 0;
                break;
            }
        }
    }
    if(choice<1||choice>5)
    {
        cout<<"ERROR\n Invalid Number inputted, please restart the program and input a value from the list given.";
    }
}