#include <iostream>
#include <fstream>
#include <string>
using namespace std;
int main ()
{
    string a = "help.txt";
    while(true)
    {
        cout<<"Enter tag to convetr to C++ string"<<endl;
        getline(cin,a);
        cout<<a;
        for(int i =0; i<a.length();i++)
        {
            char letter = a[i];
            if(letter == '"' || letter == '\\')
            {a.insert(i,"\\");
            i++;
            }

        }
        cout<<endl<<a<<endl; //<<"Finished"<<endl;



    };
    return 0;
}
