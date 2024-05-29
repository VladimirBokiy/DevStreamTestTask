using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Task1_3.Instances
{
    public class Plane : Vehicle
    {
        public int EnginesNumber { get; protected set; }
        public Plane() {
            MaxSpeed = 800;
            Color = "White";
            EnginesNumber = 2;
        }
    }
}
