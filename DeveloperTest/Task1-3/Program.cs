using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using Task1_3.Instances;
using Task1_3.Services;

namespace Task1_3
{
    class Program
    {
        static void Main(string[] args)
        {
            var vehicleTypes = InstanceService.GetSortedInstances<Vehicle>();
            foreach (var type in vehicleTypes)
            {
                Console.WriteLine(type);
            }
            Console.WriteLine();

            Console.WriteLine("Enter specific part of the name to find all types with names containing this part: ");
            var namePart = Console.ReadLine();
            var matchingTypes = InstanceService.SearchTypesByNamePart<Vehicle>(namePart);
            Console.WriteLine($"Types containing '{namePart}': {string.Join(", ", matchingTypes)}");

            InstanceService.WriteInstancesToDisk<Vehicle>();
        }

    }
}

