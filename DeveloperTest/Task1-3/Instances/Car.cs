using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Task1_3.Instances
{
    public class Car : Vehicle
    {
        public int PassengersNumber { get; protected set; }
        public Car() { 
            MaxSpeed = 200;
            Color = "Black";
            PassengersNumber = 5;
        }
    }
}
