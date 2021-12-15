using Newtonsoft.Json;
using Services.Models;
using Services.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;

namespace Services
{
    public class DataReaderService : IDataReaderService
    {
        private const string _basePath = "../Services/Data";
        private const string _callsFile = "calls.json";
        private const string _citiesFile = "cities.json";
        private const string _customersFile = "customers.json";

        IEnumerable<Customer> _cachedCustomers;
        IEnumerable<City> _cachedCities;
        IEnumerable<Call> _cachedCalls;

        public async Task<IEnumerable<Customer>> GetCustomers() => _cachedCustomers ?? await ReadCustomers();
        
        public async Task<IEnumerable<City>> GetCities() => _cachedCities ?? await ReadCities();
        
        public async Task<IEnumerable<Call>> GetCalls() => _cachedCalls ?? await ReadCalls();

        private async Task<IEnumerable<Customer>> ReadCustomers() =>
            _cachedCustomers = JsonConvert.DeserializeObject<IEnumerable<Customer>>(await File.ReadAllTextAsync($"{_basePath}/{_customersFile}"));
       
        private async Task<IEnumerable<City>> ReadCities() =>
            _cachedCities = JsonConvert.DeserializeObject<IEnumerable<City>>(await File.ReadAllTextAsync($"{_basePath}/{_citiesFile}"));
        
        private async Task<IEnumerable<Call>> ReadCalls() =>
            _cachedCalls = JsonConvert.DeserializeObject<IEnumerable<Call>>(await File.ReadAllTextAsync($"{_basePath}/{_callsFile}"));
    }
}
