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

    for (int i = 0; i < tWord.size(); ++i){ 
        string threeChar = "";
        // Translate the word into tutnese by taking each character and putting it in either the translateSingleCharacter or translateDoubleCharacter method in the model object.
        threeChar = string(1, tWord[i]) + string(1,tWord[i+1]) + string(1, tWord[i+2]); 
        cout << "threeChar: " << threeChar << endl;
        if (i != tWord.size()-1){
            if ((tWord[i] == 's') && (tWord[i+1] == 'q') && (tWord[i+2] == 'u') && (tWord[i+3] == 'a') && (tWord[i+4] == 't')){ // If the string appears to include "squat", it indicates that there is a vowel and that needs to be doubled.
                eWord += string(1, tWord[i+5]) + string(1, tWord[i+5]);
            }

            else if ((tWord[i] == 's') && (tWord[i+1] == 'q') && (tWord[i+2] == 'u') && (tWord[i+3] == 'a')){ // there is no vowel after squat. Return squa
                eWord += "squa";
            }

            else {
                eWord += m -> translateTutneseString(threeChar);
                cout << "eWord: " << eWord << endl;
            }
        }
        else {
            eWord += m -> translateTutneseString(threeChar);
            cout << "eWord: " << eWord << endl;
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

int main(){
    cout << "Hello " << endl;
    Translator t;
    string sentence = "I tutsquatokuck a wackalulkuck";
    cout << "Sentence: " << t.translateTutneseSentence(sentence) << endl;
    
    return 0;
}