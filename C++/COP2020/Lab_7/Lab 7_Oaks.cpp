    #include <iostream>
    #include <string>
    
    using namespace std;
    
    int main()
    {
        //defining variables
        float creditScore, mortgageRate, mortgageType, thirtyYearFixed, fifteenYearFixed;
        thirtyYearFixed=4.1;
        fifteenYearFixed=3.3;
        //start execution
        cout<<"What is your credit score?";
        cin>> creditScore;
        if(creditScore<500 || creditScore>850)
        {
            cout<<"ERROR NUMBER INVALD\n";
            return 0;
        }
        cout<<"What type of mortgage are you looking for, a 30 year fixed rate(type 30) or a 15 year fixed rate(type 15)?";
        cin>> mortgageType;
        if(mortgageType !=30 || mortgageType !=15)
        {
            cout<<"ERROR Not a valid mortgage type\n";
            return 0;
        }
        if(creditScore>=500 && creditScore<=579 && mortgageType== 30)
        {
            mortgageRate=thirtyYearFixed + 4.0;
            cout<<"Your mortgage rate is:" <<mortgageRate << "\n";
        
        }
        if(creditScore>=580 && creditScore<=619 && mortgageType== 30)
        {
            mortgageRate=thirtyYearFixed + 2.25;
            cout<<"Your mortgage rate is:" <<mortgageRate << "\n";
        }
        if(creditScore>=620 && creditScore<=659 && mortgageType== 30)
        {
            mortgageRate=thirtyYearFixed + 1.5;
            cout<<"Your mortgage rate is:" <<mortgageRate << "\n";
        }
        if(creditScore>=660 && creditScore<=699 && mortgageType== 30)
        {
            mortgageRate=thirtyYearFixed + 0.5;
            cout<<"Your mortgage rate is:" <<mortgageRate << "\n";
        }
        if(creditScore>=700 && creditScore<=759 && mortgageType== 30)
        {
            mortgageRate=thirtyYearFixed + 0.25;
            cout<<"Your mortgage rate is:" <<mortgageRate << "\n";
        }
        if(creditScore>=760 && mortgageType== 30)
        {
            mortgageRate=thirtyYearFixed;
            cout<<"Your mortgage rate is:" <<mortgageRate << "\n";
        }
        if(creditScore>=500 && creditScore<=579 && mortgageType== 15)
        {
            mortgageRate=fifteenYearFixed + 4.0;
            cout<<"Your mortgage rate is:" <<mortgageRate << "\n";
        
        }
        if(creditScore>=580 && creditScore<=619 && mortgageType== 15)
        {
            mortgageRate=fifteenYearFixed + 2.25;
            cout<<"Your mortgage rate is:" <<mortgageRate << "\n";
        }
        if(creditScore>=620 && creditScore<=659 && mortgageType== 15)
        {
            mortgageRate=fifteenYearFixed + 1.5;
            cout<<"Your mortgage rate is:" <<mortgageRate << "\n";
        }
        if(creditScore>=660 && creditScore<=699 && mortgageType== 15)
        {
            mortgageRate=fifteenYearFixed + 0.5;
            cout<<"Your mortgage rate is:" <<mortgageRate << "\n";
        }
        if(creditScore>=700 && creditScore<=759 && mortgageType== 15)
        {
            mortgageRate=fifteenYearFixed + 0.25;
            cout<<"Your mortgage rate is:" <<mortgageRate << "\n";
        }
        if(creditScore>=760 && mortgageType== 15)
        {
            mortgageRate=fifteenYearFixed;
            cout<<"Your mortgage rate is:" <<mortgageRate << "\n";
        }
        cout<<"thank you for using our software!";
        return 0;
    }