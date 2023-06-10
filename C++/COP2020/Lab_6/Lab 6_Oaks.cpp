#include<iostream>
using namespace std;
int main()
{
    int lengthone, lengthtwo, heightone, heighttwo, areaone, areatwo;
    cout<< "Welcome, this program takes the length and the width of two rectangles and compare the areas of each\n";
    cout<< "Please enter the length of the first rectangle.\n";
    cin>> lengthone;
    cout<< "Please enter the width of the first rectangle.\n";
    cin>> heightone;
    cout<< "Please enter the length of the secont rectangle.\n";
    cin>> lengthtwo;
    cout<<"Please enter the width of the second rectangle.\n";
    cin>> heighttwo;
    
        areaone=lengthone*heightone;
        areatwo=lengthtwo*heighttwo;
    if (areaone>areatwo)
    {
        cout<< areaone;
        cout<<"\n";
        cout<< areatwo <<"\n";
        cout<< "The area of the first rectangle is larger than the area of the second rectangle\n";

    }
    if (areaone<areatwo)
    {
         cout<< areaone;
        cout<<"\n";
        cout<< areatwo <<"\n";
        cout<< "The area of the second rectangle is larger than the area of the second rectangle\n";
    }
    if (areaone==areatwo)
    {
        cout<< areaone;
        cout<<"\n";
        cout<< areatwo <<"\n";
        cout<< "The area of the second rectangle is equal to the area of the second rectangle\n";
    }
    cout<< "The program has run succesfully and has finished.";

}
