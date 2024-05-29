using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Task1_3.Instances
{
    public class Bicycle: Vehicle
    {
        public int WheelsNumber { get; set; }
        public Bicycle() {
            WheelsNumber = 3;
            MaxSpeed = 30;
            Color = "Green";
        }
    }
}
