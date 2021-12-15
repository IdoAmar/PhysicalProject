using Services.Models;
using Services.Models.DTOs;
using Services.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Services.Implementations
{
    public class RepositoryService : IRepositoryService
    {
        private readonly IDataReaderService _dataReader;



        public RepositoryService(IDataReaderService dataReader)
        {
            _dataReader = dataReader;
        }

        public async Task<IEnumerable<CustomersByCallsDTO>> GetCustomerByCalls()
        {
            var calls = await _dataReader.GetCalls();
            var cities = await _dataReader.GetCities();
            var customersByCalls = 
                (await _dataReader.GetCustomers())
                    .Select(c => 
                        MapToCustomerByCalls(
                            c,
                            c.phoneNumbers
                                .Select(n => calls.Where(call => call.phoneNumber == n)
                                .Aggregate(new TimeSpan(), (sum, current) => sum + current.callTime.TimeOfDay))
                                    .Aggregate(new TimeSpan(), (sum, current) => sum + current),
                            cities.Single(city => city.id == c.cityId).name
                            ));
            return customersByCalls.OrderByDescending(c => c.TotalCallTime);
        }

        public async Task<IEnumerable<CallDTO>> GetCallsByCustomer(int customerId)
        {
            var customers = await _dataReader.GetCustomers();
            var calls = (await _dataReader.GetCalls())
                .Where(call => customers
                    .Single(c => c.id == customerId).phoneNumbers.Contains(call.phoneNumber))
                .Select(call => new CallDTO((int)call.callTime.TimeOfDay.TotalSeconds, call.phoneNumber));
            return calls;
        }

        private CustomersByCallsDTO MapToCustomerByCalls(Customer customer, TimeSpan Sum, string CityName)
        {
            return new CustomersByCallsDTO(
                customer.id,
                customer.firstName + " ; " + customer.lastName,
                CityName,
                (int)Sum.TotalSeconds);
        }
    }
}
