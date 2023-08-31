/*
Tyler Kay
2376966
tkay@chapman.edu
CPSC-350-01
Assignment 1 

Main file to run the program
*/

#include <iostream>
#include "FileProcessor.h"
using namespace std;

int main(int argc, char** argv){
    string inputFile = argv[1]; // First argument is the input file
    string outputFile = argv[2]; // Second argument is the output file

    cout << outputFile << endl;

    FileProcessor *fp = new FileProcessor();
    fp -> processFile(inputFile, outputFile);
    delete fp;
    return 0;
}