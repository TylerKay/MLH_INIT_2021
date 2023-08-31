/*
Tyler Kay
2376966
CPSC-350-01
Assignment 1 

The FileProcessor class is used to read in a input file (with english translation) and write tutnese translations to an output file.
*/

#include "FileProcessor.h"

FileProcessor::FileProcessor(){
    cout << "Constructor" << endl;
    t = new Translator();
}

FileProcessor::~FileProcessor(){
    cout << "Deconstructor" << endl;
    delete t;
}

void FileProcessor::processFile(string inputFileName, string outputFileName){
    // Reading input file and putting contents to a string.
    ifstream inputFile(inputFileName);
    if(!inputFile.is_open()){
        cerr << "Could not open file" << endl;
        exit(EXIT_FAILURE);
    }
    // Converting english to tutnese
    string englishContent = string((istreambuf_iterator<char>(inputFile)), istreambuf_iterator<char>());
    string tutneseContent = t->translateEnglishSentence(englishContent);

    // Writing to output file
    ofstream outputFile;
    outputFile.open(outputFileName);
    cout << tutneseContent << endl;
    outputFile << tutneseContent;
    outputFile.close();
}
