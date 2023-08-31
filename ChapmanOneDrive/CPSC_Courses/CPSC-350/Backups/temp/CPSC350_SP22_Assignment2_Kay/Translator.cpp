/*
Tyler Kay
2376966
CPSC-350-01
Assignment 1

The translator class is used to translate english words/sentences to tutnese.
*/

#include "Translator.h"

Translator::Translator(){
    cout << "Constructor" << endl;
    m = new Model();
}
Translator::~Translator(){
    cout << "Deconstructor" << endl;
    delete m;
}

string Translator::translateEnglishWord(string eWord){
    // Takes in a english word and translates it into a tutnese word (by creating a model object).
    string tWord = "";
    

    for (int i = 0; i < eWord.size(); ++i){ 
        // Translate the word into tutnese by taking each character and putting it in either the translateSingleCharacter or translateDoubleCharacter method in the model object.
        if (i != eWord.size()-1){
            if (eWord[i] != eWord[i+1]){
                tWord += m->translateSingleCharacter(eWord[i]);
            }
            else {
                tWord += m -> translateDoubleCharacter(eWord[i]);
            }
        }
        else {
            tWord += m -> translateSingleCharacter(eWord[i]);
        }
    }
    return tWord;
}

string Translator::translateEnglishSentence(string eSentence){
    // The method translateEnglishSentence takes in a english sentence and translates/returns it into a tutnese sentence. 
    string tSentence = "";
    string wordToTranslate = "";
 
    for (int i = 0; i < eSentence.size(); ++i){ // For each character in the sentence
        if ((eSentence == " " ) || (eSentence == ",") || (eSentence == ".") || (eSentence == "!") || (eSentence == "!") || (i == eSentence.size()-1)){ 
            // If the current character is a punctuation or the last character in the sentence,
            // add that punctation to the variable wordToTranslate and translate it using the method translateEnglishWord. 
            wordToTranslate += eSentence[i];
            tSentence += translateEnglishWord(wordToTranslate);
            wordToTranslate = "";
        }
        else {
            wordToTranslate += eSentence[i]; // If it isn't a punctation, add it to the variable wordToTranslate and continue
        }
    }
    return tSentence;
}

string Translator::translateTutneseWord(string tWord){ // Given a tutnese word, this method returns a word in english.
    string eWord = "";
    string checkTWord;
    int a_increment;
    int i = 0;

    while (i < tWord.size()){

        if ((tWord[i] == 'S') || (tWord[i] == 's')){
            if ((tWord[i+1] == 'q') && (tWord[i+2] == 'u') && (tWord[i+3] == 'a') && (tWord[i+4] == 't')){ // if there is squat, the next character after squat should be doubled.
                eWord += string(1, tWord[i+5]) + string(1,tWord[i+5]);
                i += 6;
            }
            else if ((tWord[i+1] == 'q') && (tWord[i+2] == 'u') && (tWord[i+3] == 'a')){ // if there is squa (and no t at the end), the next character should be doubled.
                eWord += string(1, tWord[i+4]);
                i += 4;
            }
        } 

        checkTWord = m -> translateSingleCharacter(tWord[i]); // returns tutnese translation given a single character in the tutnese word that we are trying to translate.
        cout << "CheckTWord: " << checkTWord << endl;
        cout << "eWord: " << eWord << endl;
        a_increment = m -> amountToIncrement(checkTWord);

        if (a_increment == 2){
            if (tWord[i+1] == checkTWord[1]){ // If the character returns true for x=x or X=X, return E
                eWord += tWord[i];
                i += a_increment;
            }
        }

        else if (a_increment == 3){ // If the next three characters away from i matches, add the first letter to eWord.
            if ((tWord[i+1] == checkTWord[1]) && (tWord[i+2] == checkTWord[2])){
                eWord += tWord[i];
                i+= a_increment;
            }
        }

        else if (a_increment == 4){ // If the next four characters away from i matches, add the first letter to eWord. increment i by 4.
            string addedTWord = string(1,tWord[i]) + string(1,tWord[i+1]) + string(1,tWord[i+2]) + string(1,tWord[i+3]);
            cout << "addedTWord: " << addedTWord << endl;
            cout << "tWord[i+3]: " << tWord[i+3] << endl;
            if ((tWord[i+1] == checkTWord[1]) && (tWord[i+2] == checkTWord[2]) && (tWord[i+3] == checkTWord[3])){
                eWord += tWord[i];
                i+= a_increment;
            }
        }

        else if (a_increment == 5){ // If the next five characters away from i matches, add the first letter to eWord. increment i by 5.
            if ((tWord[i+1] == checkTWord[1]) && (tWord[i+2] == checkTWord[2]) && (tWord[i+3] == checkTWord[3]) && (tWord[i+4] == checkTWord[4])){
                eWord += tWord[i];
                i+= a_increment + 1;
            }
        }

        else { // add tWord[i] to eWord and increment by 1 to next character.
            cout << tWord[i] << endl;
            eWord += tWord[i];
            ++i;
        }
    }

    return eWord;
}

string Translator::translateTutneseSentence(string tSentence){
    // The method translateTutneseSentence takes in a tutnese sentence and translates/returns it into a english sentence. 
    string eSentence = "";
    string wordToTranslate = "";
 
    for (int i = 0; i < tSentence.size(); ++i){ // For each character in the sentence
        if ((tSentence == " " ) || (tSentence == ",") || (tSentence == ".") || (tSentence == "!") || (tSentence == "!") || (i == tSentence.size()-1)){ 
            // If the current character is a punctuation or the last character in the sentence,
            // add that punctation to the variable wordToTranslate and translate it using the method translateTutneseWord. 
            wordToTranslate += tSentence[i];
            eSentence += translateTutneseWord(wordToTranslate);
            wordToTranslate = "";
        }
        else {
            wordToTranslate += tSentence[i]; // If it isn't a punctation, add it to the variable wordToTranslate and continue
        }
    }
    return eSentence;
}

// int main(){
//     cout << "Hello " << endl;
//     Translator t;
//     string sentence = "Tutrugsquate I tutsquatokuck a wackalulkuck tuto tuthashe pubarugkuck yubesustuterugdudayub. Hashesqualulo Cashomumpubututerug Suscashienuncashe rugocashkucksus!";
//     cout << "Sentence: " << t.translateTutneseSentence(sentence) << endl;
    
//     return 0;
// }