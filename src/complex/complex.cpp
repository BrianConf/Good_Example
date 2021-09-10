// complex.cpp
// Multiplying complex numbers

#include <iostream>	// contains the definition of cout, endl
#include <complex>	// contains the complex class definition

using namespace std; // cout, endl, complex are all part of this namespace

int main()
{
	auto num1 = complex<float>{2.0, 2.0};  // use auto for type deduction
	auto num2 = complex<float>{4.0, -2.0}; // use 

	auto answer = num1 * num2; // type deduced for 'answer' is: complex<float>

	//ret erye w
	// answer++;

	return 0;
}

