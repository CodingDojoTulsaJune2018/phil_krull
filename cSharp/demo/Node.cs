using System;


namespace demo
{
    class Node
    {
        // attributes
        private int val;
        private Node next;
        // methods
        public Node(int value) {
            val = value;
            next = null;
        }
        public int getVal() {
            return this.val;
        }
        public void setVal(int value) {
            this.val = value;
        }
        public Node getNext() {
            return this.next;
        }
        public void setNext(Node next) {
            this.next = next;
        }
    }

    class ExampleClass
    {
        public string test = "Hello";
    }
}