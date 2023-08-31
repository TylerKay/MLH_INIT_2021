// Write a working C++ program that prompts the user for a non-zero, positive integer and prints "PRIME" if the integer is prime, 
// and "NOT PRIME" otherwise. 
// You should create a separate function, isPrime, to determine whether the integer is prime.  
// It should take an integer as input and return a bool.  
// Recall a natural number is prime if it is greater than 1 and is not a product of 2 smaller natural numbers.

#include <iostream>
using namespace std;


int isPrime(int val){
    if (val % 2 != 0) && (val > 1){
        return true;
    }

    else {
        return false;
    }
}

int main(){
    int value;
    cout << "Enter a non-zero, positive integer" << endl;
    cin >> value;
    
    if (isPrime(value) == true){
        cout << "Prime" << endl;

    else {
        cout << "Not prime" << endl;
    }

}