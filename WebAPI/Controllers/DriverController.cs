using Microsoft.AspNetCore.Mvc;
using DriverApi.Models;
using Microsoft.EntityFrameworkCore;

namespace DriversApi.Controllers;

[ApiController]
[Route("[controller]")]
public class DriverController : ControllerBase
{
    private readonly DriverContext context;
    public DriverController(DriverContext _context) // Dependency injection
    {
        context = _context;
    }
    [HttpGet]
    public async Task<List<Driver>> Get()
    {
        List<Driver> drivers = await context.Driver.ToListAsync();
        return drivers;
    }        


    [HttpGet("{id}")] 
    public async Task<ActionResult<Driver>> Get(int id)
    {
        Driver? driver = await context.Driver.FindAsync( id );
        if(driver!=null) {
            return Ok(driver);
        } else {
            return NotFound();
        }
    }

    [HttpPost] 
    public async Task<ActionResult<Driver>> Post(Driver newDriver)
    {
        context.Driver.Add( newDriver );
        await context.SaveChangesAsync();
        return CreatedAtAction("Get", new {id = newDriver.Id}, newDriver);
    }

    [HttpDelete("{id}")] 
    public async Task<ActionResult<Driver>> Delete(int id) {
          Driver? driver = await context.Driver.FindAsync( id );
          if(driver != null) {
            context.Driver.Remove(driver);
            await context.SaveChangesAsync();
          }
          return NoContent();
    }
        [HttpPut("{id}")]
        public async Task<ActionResult> Put(int id, Driver editedDriver)
        {
        Driver driverToUpdate = await context.Driver.FindAsync(id);

        if (driverToUpdate == null)
        {
        return NotFound();
        }

        driverToUpdate.Name = editedDriver.Name;
        driverToUpdate.Age = editedDriver.Age;
        driverToUpdate.Country = editedDriver.Country;
        driverToUpdate.ImageName = editedDriver.ImageName;

        await context.SaveChangesAsync();

        return Ok("Driver updated successfully");
        }
}