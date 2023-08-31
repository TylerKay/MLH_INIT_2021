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

// string Model::translateTutneseString(string stringToTranslate){
//     cout << "String to Translate:" << stringToTranslate << endl;
//     if ((stringToTranslate[0] == 'B') && (stringToTranslate[1] == 'u') && (stringToTranslate[2] == 'b')){
//         return "B";
//     }
//     else if ((stringToTranslate[0] == 'b') && (stringToTranslate[1] == 'u') && (stringToTranslate[2] == 'b')){
//         return "b";
//     }
//     else if ((stringToTranslate[0] == 'C') && (stringToTranslate[1] == 'a') && (stringToTranslate[2] == 's') && (stringToTranslate[3] == 'h')){
//         return "C";
//     }
//     else if ((stringToTranslate[0] == 'c') && (stringToTranslate[1] == 'a') && (stringToTranslate[2] == 's') && (stringToTranslate[3] == 'h')){
//         return "C";
//     }
//     else if ((stringToTranslate[0] == 'D') && (stringToTranslate[1] == 'u') && (stringToTranslate[2] == 'd')){
//         return "D";
//     }
//     else if ((stringToTranslate[0] == 'd') && (stringToTranslate[1] == 'u') && (stringToTranslate[2] == 'd')){
//         return "d";
//     }
//     else if ((stringToTranslate[0] == 'F') && (stringToTranslate[1] == 'u') && (stringToTranslate[2] == 'f')){
//         return "F";
//     }
//     else if ((stringToTranslate[0] == 'f') && (stringToTranslate[1] == 'u') && (stringToTranslate[2] == 'f')){
//         return "f";
//     }
//     else if ((stringToTranslate[0] == 'G') && (stringToTranslate[1] == 'u') && (stringToTranslate[2] == 'g')){
//         return "G";
//     }
//     else if ((stringToTranslate[0] == 'g') && (stringToTranslate[1] == 'u') && (stringToTranslate[2] == 'g')){
//         return "g";
//     }
//     else if ((stringToTranslate[0] == 'H') && (stringToTranslate[1] == 'a') && (stringToTranslate[2] == 's') && (stringToTranslate[3] == 'h')){
//         return "H";
//     }
//     else if ((stringToTranslate[0] == 'h') && (stringToTranslate[1] == 'a') && (stringToTranslate[2] == 's') && (stringToTranslate[3] == 'h')){
//         return "h";
//     }
//     else if ((stringToTranslate[0] == 'J') && (stringToTranslate[1] == 'a') && (stringToTranslate[2] == 'y')){
//         return "J";
//     }
//     else if ((stringToTranslate[0] == 'j') && (stringToTranslate[1] == 'a') && (stringToTranslate[2] == 'y')){
//         return "j";
//     }
//     else if ((stringToTranslate[0] == 'K') && (stringToTranslate[1] == 'u') && (stringToTranslate[2] == 'c') && (stringToTranslate[2] == 'k')){
//         return "K";
//     }
//     else if ((stringToTranslate[0] == 'k') && (stringToTranslate[1] == 'u') && (stringToTranslate[2] == 'c') && (stringToTranslate[2] == 'k')){
//         return "k";
//     }
//     else if ((stringToTranslate[0] == 'L') && (stringToTranslate[1] == 'u') && (stringToTranslate[2] == 'l')){
//         return "L";
//     }
//     else if ((stringToTranslate[0] == 'l') && (stringToTranslate[1] == 'u') && (stringToTranslate[2] == 'l')){
//         return "l";
//     }
//     else if ((stringToTranslate[0] == 'M') && (stringToTranslate[1] == 'u') && (stringToTranslate[2] == 'm')){
//         return "M";
//     }
//     else if ((stringToTranslate[0] == 'm') && (stringToTranslate[1] == 'u') && (stringToTranslate[2] == 'm')){
//         return "m";
//     }
//     else if ((stringToTranslate[0] == 'N') && (stringToTranslate[1] == 'u') && (stringToTranslate[2] == 'n')){
//         return "N";
//     }
//     else if ((stringToTranslate[0] == 'n') && (stringToTranslate[1] == 'u') && (stringToTranslate[2] == 'n')){
//         return "n";
//     }
//     else if ((stringToTranslate[0] == 'P') && (stringToTranslate[1] == 'u') && (stringToTranslate[2] == 'p')){
//         return "P";
//     }
//     else if ((stringToTranslate[0] == 'p') && (stringToTranslate[1] == 'u') && (stringToTranslate[2] == 'p')){
//         return "p";
//     }
//     else if ((stringToTranslate[0] == 'Q') && (stringToTranslate[1] == 'u') && (stringToTranslate[2] == 'a') && (stringToTranslate[2] == 'k')){
//         return "Q";
//     }
//     else if ((stringToTranslate[0] == 'q') && (stringToTranslate[1] == 'u') && (stringToTranslate[2] == 'a') && (stringToTranslate[2] == 'k')){
//         return "q";
//     }
//     else if ((stringToTranslate[0] == 'R') && (stringToTranslate[1] == 'u') && (stringToTranslate[2] == 'g')){
//         return "R";
//     }
//     else if ((stringToTranslate[0] == 'r') && (stringToTranslate[1] == 'u') && (stringToTranslate[2] == 'g')){
//         return "r";
//     }
//     else if ((stringToTranslate[0] == 'S') && (stringToTranslate[1] == 'u') && (stringToTranslate[2] == 's')){
//         return "S";
//     }
//     else if ((stringToTranslate[0] == 's') && (stringToTranslate[1] == 'u') && (stringToTranslate[2] == 's')){
//         return "s";
//     }
//     else if ((stringToTranslate[0] == 'T') && (stringToTranslate[1] == 'u') && (stringToTranslate[2] == 't')){
//         return "T";
//     }
//     else if ((stringToTranslate[0] == 't') && (stringToTranslate[1] == 'u') && (stringToTranslate[2] == 't')){
//         return "t";
//     }
//     else if ((stringToTranslate[0] == 'V') && (stringToTranslate[1] == 'u') && (stringToTranslate[2] == 'v')){
//         return "V";
//     }
//     else if ((stringToTranslate[0] == 'v') && (stringToTranslate[1] == 'u') && (stringToTranslate[2] == 'v')){
//         return "v";
//     }
//     else if ((stringToTranslate[0] == 'W') && (stringToTranslate[1] == 'a') && (stringToTranslate[2] == 'c') && (stringToTranslate[3] == 'k')){
//         return "W";
//     }
//     else if ((stringToTranslate[0] == 'w') && (stringToTranslate[1] == 'a') && (stringToTranslate[2] == 'c') && (stringToTranslate[3] == 'k')){
//         return "w";
//     }
//     else if ((stringToTranslate[0] == 'E') && (stringToTranslate[1] == 'x')){
//         return "E";
//     }
//     else if ((stringToTranslate[0] == 'e') && (stringToTranslate[1] == 'x')){
//         return "e";
//     }
//     else if ((stringToTranslate[0] == 'Y') && (stringToTranslate[1] == 'u') && (stringToTranslate[2] == 'b')){
//         return "Y";
//     }
//     else if ((stringToTranslate[0] == 'y') && (stringToTranslate[1] == 'u') && (stringToTranslate[2] == 'b')){
//         return "y";
//     }
//     else if ((stringToTranslate[0] == 'Z') && (stringToTranslate[1] == 'u') && (stringToTranslate[2] == 'b')){
//         return "Z";
//     }
//     else if ((stringToTranslate[0] == 'z') && (stringToTranslate[1] == 'u') && (stringToTranslate[2] == 'b')){
//         return "z";
//     }
//     else if (stringToTranslate[0] == ' '){
//         return string(1, stringToTranslate[0]);
//     }
//     else {
//         return "";
//     }
// }


int Model::amountToIncrement(string tString){
    if ((tString == "Ex") || (tString == "ex")){
        return 2;
    }
    else if ((tString == "Bub") || (tString == "bub") || (tString == "Dud") || (tString == "dud") || (tString == "Fuf") || (tString == "fuf") || (tString == "Gug") || (tString == "gug") || (tString == "Jay") || (tString == "jay") || (tString == "Lul") || (tString == "lul") || (tString == "Mum") || (tString == "mum") || (tString == "Nun") || (tString == "nun") || (tString == "Pub") || (tString == "pub") || (tString == "Rug") || (tString == "rug") || (tString == "Sus") || (tString == "sus") || (tString == "Tut") || (tString == "tut") || (tString == "Vuv") || (tString == "vuv") || (tString == "Yub") || (tString == "yub") || (tString == "Zub") || (tString == "zub")) {
        return 3;
    }
    else if ((tString == "Cash") || (tString == "cash") || (tString == "Hash") || (tString == "hash") || (tString == "Kuck") || (tString == "kuck") || (tString == "Wack") || (tString == "wack")){
        return 4;
    }
    else if ((tString == "Quack") || tString == "quack") {
        return 5;
    }
    
    return 0;
}
