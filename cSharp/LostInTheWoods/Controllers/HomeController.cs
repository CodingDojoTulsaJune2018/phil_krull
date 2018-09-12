using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using LostInTheWoods.Models;
using LostInTheWoods.Factory;

namespace LostInTheWoods.Controllers
{
    public class HomeController : Controller
    {
        private readonly TrailFactory trailFactory;
        public HomeController()
        {
            trailFactory = new TrailFactory();
        }
        public IActionResult Index()
        {
            Trail newTrail = new Trail();

            newTrail.Name = "Trail 4";
            newTrail.Description = "Description for trail 4";
            newTrail.Length = 1000;
            newTrail.Elevation = 5000;
            newTrail.Longitude = 45;
            newTrail.Latitude = 45;

            trailFactory.Add(newTrail);

            IEnumerable<Trail> allTrails = trailFactory.FindAll();
            Console.WriteLine("--------------------------------------------------------------------------------------------");
            Console.WriteLine($"There are {allTrails.Count()} trails in the database and the names are:");
            foreach(Trail trail in allTrails)
            {
                Console.WriteLine($"The name of the trail is: {trail.Name}");
            }

            ViewBag.AllTrails = allTrails;

            return View();
        }

        public IActionResult About()
        {
            ViewData["Message"] = "Your application description page.";

            return View();
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }

        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
