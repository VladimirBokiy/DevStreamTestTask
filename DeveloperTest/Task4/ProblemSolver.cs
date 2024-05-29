using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Task4
{
    public class ProblemSolver
    {
        public static string ReverseString(string s)
        {
            if (String.IsNullOrEmpty(s))
            {
                return s;
            }
            
            string reversed = string.Empty;
            for(int i = s.Length - 1; i >= 0; i--)
            {
                reversed += s[i];
            }
            return reversed;
        }

        public static bool IsPalindrome(string s)
        {
            if (String.IsNullOrEmpty(s))
            {
                return false;
            }

            for(int i = 0; i< s.Length/2; i++)
            {
                if(s[i] != s[s.Length - i - 1])
                {
                    return false;
                }
            }

            return true;
        }

        public static IEnumerable<int> MissingElements(int[] arr)
        {
            if(arr.Length < 2)
            {
                return new List<int>();
            }
            
            List<int> result = new List<int>();

            for (int i = 1; i < arr.Length; i++)
            {
                int gap = arr[i] - arr[i-1];
                if(gap > 1)
                {
                    for(int j = 1; j < gap; j++)
                    {
                        result.Add(arr[i-1] + j);
                    }
                }
            }

            return result;
        }
    }
}
