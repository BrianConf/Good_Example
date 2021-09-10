#include <cstdlib>
#include <iostream>
#include <ctime>

using namespace std;



int main(){

    srand(time(0)); //take random number usimg current calender time
    auto num = 0;
    auto randomNumber = 1 + rand()%100;

    while(cin>>num && num != randomNumber){
	if( num < randomNumber)
	{
		cout<<"guess Higher"<< endl;
	}
    }
    cout<<"You win"<< endl;
    return 0;
}
