#include <iostream>
#include <fstream>
using namespace std;
int main ()
{
    string a = "help2.txt";
    ofstream fout(a);
    for(int i = 0; i<12; i++ )
    {
        fout<<"<option value = \"1\">Ёффект "<<i<<"</option>"<<endl;
        /*for(int ii = 0; ii < 8; ii++)
        {
            int number = 64-8*(i+1) + ii + 1;
            fout<<"    <td id = \"td"<<number<<"\" class = \"cell ";
            //<td id = "td20" class="cell" class =
            if((i + ii) %2)    fout<<" whitee\">";
            else fout<<" blackk\">";
            fout<<"</td>"<<endl;


        }*/
        //fout<<"</div>"<<endl;

    }
    return 0;
}
