#include <cstdlib>
#include <iostream>
#include <ctime>

using namespace std;

/*this program allows the user to enter a guess of a random numbers 5 times,
if the entered number is equal to the randomly genereted number, the user wins
else if the number is high, it prompts the user to guess lower
else it prompts the user to guess higher, after the fifth attempt the user loses*/

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
