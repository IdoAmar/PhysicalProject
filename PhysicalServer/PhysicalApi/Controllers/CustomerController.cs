using Microsoft.AspNetCore.Mvc;
using Services.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PhysicalApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CustomerController : ControllerBase
    {
        private readonly IRepositoryService repository;

        public CustomerController(IRepositoryService repository)
        {
            this.repository = repository;
        }

        [HttpGet]
        public async Task<IActionResult> GetCustomerByCalls() =>
            Ok(await repository.GetCustomerByCalls());

        [HttpGet("{id}")]
        public async Task<IActionResult> GetCallsByCustomer(int id) =>
            Ok(await repository.GetCallsByCustomer(id));
    }
}
