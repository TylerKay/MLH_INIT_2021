/*
Tyler Kay
2376966
CPSC-350-01
Assignment 1 

The model class is used to return a string tutnese translation given a single english character.
*/

#include "Model.h"

Model::Model(){
    cout << "Constructor" << endl;
}
Model::~Model(){
    cout << "Deconstructor" << endl;
}

string Model::translateSingleCharacter(char currChar){
    // Returns a tutnese string translation given a single english vowel.
    if (currChar == 'B'){
        return "Bub";
    }
    else if (currChar == 'b'){
        return "bub";
    }
    else if (currChar == 'C'){
        return "Cash";
    }
    else if (currChar == 'c'){
        return "cash";
    }
    else if (currChar == 'D'){
        return "Dud";
    }
    else if (currChar == 'd'){
        return "dud";
    }
    else if (currChar == 'F'){
        return "Fuf";
    }
    else if (currChar == 'f'){
        return "fuf";
    }
    else if (currChar == 'G'){
        return "Gug";
    }
    else if (currChar == 'g'){
        return "gug";
    }
    else if (currChar == 'H'){
        return "Hash";
    }
    else if (currChar == 'h'){
        return "hash";
    }
    else if (currChar == 'J'){
        return "Jay";
    }
    else if (currChar == 'j'){
        return "jay";
    }
    else if (currChar == 'K'){
        return "Kuck";
    }
    else if (currChar == 'k'){
        return "kuck";
    }
    else if (currChar == 'L'){
        return "Lul";
    }
    else if (currChar == 'l'){
        return "lul";
    }
    else if (currChar == 'M'){
        return "Mum";
    }
    else if (currChar == 'm'){
        return "mum";
    }
    else if (currChar == 'N'){
        return "Nun";
    }
    else if (currChar == 'n'){
        return "nun";
    }
    else if (currChar == 'P'){
        return "Pub";
    }
    else if (currChar == 'p'){
        return "pub";
    }
    else if (currChar == 'Q'){
        return "Quack";
    }
    else if (currChar == 'q'){
        return "quack";
    }
    else if (currChar == 'R'){
        return "Rug";
    }
    else if (currChar == 'r'){
        return "rug";
    }
    else if (currChar == 'S'){
        return "Sus";
    }
    else if (currChar == 's'){
        return "sus";
    }
    else if (currChar == 'T'){
        return "Tut";
    }
    else if (currChar == 't'){
        return "tut";
    }
    else if (currChar == 'V'){
        return "Vuv";
    }
    else if (currChar == 'v'){
        return "vuv";
    }
    else if (currChar == 'W'){
        return "Wack";
    }
    else if (currChar == 'w'){
        return "wack";
    }
    else if (currChar == 'X'){
        return "Ex";
    }
    else if (currChar == 'x'){
        return "ex";
    }
    else if (currChar == 'Y'){
        return "Yub";
    }
    else if (currChar == 'y'){
        return "yub";
    }
    else if (currChar == 'Z'){
        return "Zub";
    }
    else if (currChar == 'z'){
        return "zub";
    }
    else {
        return string(1, currChar);
    }
}

string Model::translateDoubleCharacter(char charToTranslate){
    // Returns squat if there is a double in letters for vowels.
    if ((charToTranslate == 'A') || (charToTranslate == 'a') || (charToTranslate == 'E') || (charToTranslate == 'e') || (charToTranslate == 'I') || (charToTranslate == 'i') || (charToTranslate == 'O') || (charToTranslate == 'o') || (charToTranslate == 'U') || (charToTranslate == 'u')){
        return "squat";
    }
    // Returns squa if there is a double in letters (not vowels)
    return "squa";
}

string Model::translateTutneseString(string stringToTranslate){
    if (stringToTranslate == "Bub"){
        return "B";
    }
    else if (stringToTranslate == "bub"){
        return "b";
    }
    else if (stringToTranslate == "Cash"){
        return "C";
    }
    else if (stringToTranslate == "cash"){
        return "c";
    }
    else if (stringToTranslate == "Dud"){
        return "D";
    }
    else if (stringToTranslate == "dud"){
        return "d";
    }
    else if (stringToTranslate == "Fuf"){
        return "F";
    }
    else if (stringToTranslate == "fuf"){
        return "f";
    }
    else if (stringToTranslate == "Gug"){
        return "G";
    }
    else if (stringToTranslate == "gug"){
        return "g";
    }
    else if (stringToTranslate == "Hash"){
        return "H";
    }
    else if (stringToTranslate == "hash"){
        return "h";
    }
    else if (stringToTranslate == "Jay"){
        return "J";
    }
    else if (stringToTranslate == "jay"){
        return "j";
    }
    else if (stringToTranslate == "Kuck"){
        return "K";
    }
    else if (stringToTranslate == "kuck"){
        return "k";
    }
    else if (stringToTranslate == "Lul"){
        return "L";
    }
    else if (stringToTranslate == "lul"){
        return "l";
    }
    else if (stringToTranslate == "Mum"){
        return "M";
    }
    else if (stringToTranslate == "mum"){
        return "m";
    }
    else if (stringToTranslate == "Nun"){
        return "N";
    }
    else if (stringToTranslate == "nun"){
        return "n";
    }
    else if (stringToTranslate == "Pub"){
        return "P";
    }
    else if (stringToTranslate == "pub"){
        return "p";
    }
    else if (stringToTranslate == "Quack"){
        return "Q";
    }
    else if (stringToTranslate == "quack"){
        return "q";
    }
    else if (stringToTranslate == "Rug"){
        return "R";
    }
    else if (stringToTranslate == "rug"){
        return "r";
    }
    else if (stringToTranslate == "Sus"){
        return "S";
    }
    else if (stringToTranslate == "sus"){
        return "s";
    }
    else if (stringToTranslate == "Tut"){
        return "T";
    }
    else if (stringToTranslate == "tut"){
        return "t";
    }
    else if (stringToTranslate == "Vuv"){
        return "V";
    }
    else if (stringToTranslate == "vuv"){
        return "v";
    }
    else if (stringToTranslate == "Wack"){
        return "W";
    }
    else if (stringToTranslate == "wack"){
        return "w";
    }
    else if (stringToTranslate == "Ex"){
        return "X";
    }
    else if (stringToTranslate == "ex"){
        return "x";
    }
    else if (stringToTranslate == "Yub"){
        return "Y";
    }
    else if (stringToTranslate == "yub"){
        return "y";
    }
    else if (stringToTranslate == "Zub"){
        return "Z";
    }
    else if (stringToTranslate == "zub"){
        return "z";
    }
    else if (stringToTranslate[1] == ' '){
        return string(1, stringToTranslate[0]) + " ";
    }
    else {
        return "";
    }
}
