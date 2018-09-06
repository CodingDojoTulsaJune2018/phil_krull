using System;

namespace demo
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            // all code here
            Node newNode = new Node(8);
            Console.WriteLine(newNode.getNext());
            ExampleClass test = new ExampleClass();
            Console.WriteLine(test.test);
        }
    }
}
