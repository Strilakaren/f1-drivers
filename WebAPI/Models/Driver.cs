using System.ComponentModel.DataAnnotations;

namespace DriverApi.Models;

public class Driver
{
    [Key]
    public int Id {get; set;}
    public string Name {get; set;} = "";
    public int Age {get; set;} 
    public string Country {get; set;} = "";

    public string ImageName {get; set;} = "";
}