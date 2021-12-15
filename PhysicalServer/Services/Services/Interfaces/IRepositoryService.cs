using Services.Models;
using Services.Models.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Services.Interfaces
{
    public interface IRepositoryService
    {
        Task<IEnumerable<CustomersByCallsDTO>> GetCustomerByCalls();
        Task<IEnumerable<CallDTO>> GetCallsByCustomer(int customerId);
    }
}
