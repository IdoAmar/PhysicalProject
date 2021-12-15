using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Models
{
    public record Customer(
        int id,
        string firstName,
        string lastName, 
        IEnumerable<long> phoneNumbers, 
        int cityId);
}
