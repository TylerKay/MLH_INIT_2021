#include "LinkedList.h"
#include <iostream>
using namespace std;

int main(){

    DoublyLinkedList *l = new DoublyLinkedList();
    l->insertBack('H');
    l->insertBack('E');
    l->printList(true);

    delete l;
    return 0;
}