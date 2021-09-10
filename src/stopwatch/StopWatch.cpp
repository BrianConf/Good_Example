#include "StopWatch.h"
#include <ctime>
using namespace std;

// returns the amount of time in seconds that has
double getProcessTime()
{
	clock_t time = clock();
	return static_cast<double>(time)/CLOCKS_PER_SEC;
}
