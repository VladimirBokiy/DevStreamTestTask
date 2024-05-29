using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Task1_3.Instances
{
    public abstract class Vehicle
    {
        public int MaxSpeed { get; protected set; }
        public string? Color { get; protected set; }
    }
}
