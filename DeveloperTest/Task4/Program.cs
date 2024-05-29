namespace Task4
{
    class Program
    {
        public static void Main(string[] args) 
        {
            Console.WriteLine("task: " + ProblemSolver.IsPalindrome("task"));
            Console.WriteLine("palindrom: " + ProblemSolver.IsPalindrome("palindrom"));
            Console.WriteLine("civic: " + ProblemSolver.IsPalindrome("civic"));
            Console.WriteLine("anna: " + ProblemSolver.IsPalindrome("anna"));


            int[] ints = {1, 3, 4, 5, 8, 10, 11, 15};
            var missing = ProblemSolver.MissingElements(ints);

            Console.WriteLine();
            Console.WriteLine("Given array: ");
            foreach (var i in ints)
            {
                Console.Write(i + " ");
            }
            Console.WriteLine();
            Console.WriteLine("Missing elements for this array: ");
            foreach (var i in missing) {
                Console.Write(i + " ");
            }
        }
    }
}
