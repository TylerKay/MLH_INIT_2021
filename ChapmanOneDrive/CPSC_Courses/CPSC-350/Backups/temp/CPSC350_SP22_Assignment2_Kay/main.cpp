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
#include <exception>

using namespace std;

int main(int argc, char** argv){
    string inputFile = argv[1]; // First argument is the input file
    string outputFile = argv[2]; // Second argument is the output file
    string conversionType = argv[3]; // Third argument is the conversion type. Either "E2T" or "T2E".

    cout << outputFile << endl;

    FileProcessor *fp = new FileProcessor();
    fp -> processFile(inputFile, outputFile, conversionType);
    delete fp;
    return 0;
}