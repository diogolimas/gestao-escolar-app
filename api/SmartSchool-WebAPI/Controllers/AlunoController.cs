using System;
using Microsoft.AspNetCore.Mvc;

namespace SmartSchool_WebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class Aluno : ControllerBase
    {
     
        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                throw new Exception("apenas um teste");
            }
            catch (System.Exception)
            {
                
                return BadRequest("dioguinho");
            }
            
        }
    }
}