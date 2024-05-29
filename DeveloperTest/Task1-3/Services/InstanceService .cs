using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using Task1_3.Instances;

namespace Task1_3.Services
{
    public class InstanceService
    {
        public static IEnumerable<T> GetInstances<T>()
        {
            return Assembly.GetAssembly(typeof(T))
                .GetTypes()
                .Where(t => typeof(T).IsAssignableFrom(t) && !t.IsAbstract)
                .Select(t => (T)Activator.CreateInstance(t));
        }

        public static IEnumerable<string> GetSortedInstances<T>()
        {
            return GetInstances<T>()
                .Select(v => v.GetType().Name)
                .OrderBy(n => n);
        }

        public static IEnumerable<string> SearchTypesByNamePart<T>(string namePart)
        {
            return GetInstances<T>()
                .Select(v => v.GetType().Name)
                .Where(n => n.Contains(namePart));
        }

        public static void WriteInstancesToDisk<T>()
        {
            var filePath = $"{typeof(T).Name}_instances.txt";
            var instances = GetInstances<T>();
            using (var writer = new StreamWriter(filePath))
            {
                foreach (var instance in instances)
                {
                    writer.WriteLine($"=============INSTANCE============");
                    writer.WriteLine($"Instance name: {instance.GetType().Name}");
                    foreach (MemberInfo member in instance.GetType().GetMembers())
                    {
                        writer.WriteLine($"{member.DeclaringType} {member.MemberType} {member.Name}");
                    }
                    writer.WriteLine();
                }
            }
        }
    }
}
