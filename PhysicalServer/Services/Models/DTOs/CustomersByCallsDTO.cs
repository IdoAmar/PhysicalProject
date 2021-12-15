using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Models.DTOs
{
    public record CustomersByCallsDTO(
        int Id,
        string FullName,
        string City,
        int TotalCallTime
        );
}
