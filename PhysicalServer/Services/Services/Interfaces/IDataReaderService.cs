using Services.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Services.Interfaces
{
    public interface IDataReaderService
    {
        Task<IEnumerable<Customer>> GetCustomers();
        Task<IEnumerable<City>> GetCities();
        Task<IEnumerable<Call>> GetCalls();
    }
}
