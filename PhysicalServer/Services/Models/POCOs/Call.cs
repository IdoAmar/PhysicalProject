using Newtonsoft.Json;
using Services.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Models
{
    public record Call(
        [JsonConverter(typeof(DateFormatConverter), "hh:mm:ss")]
        DateTime callTime, 
        long phoneNumber);
}
