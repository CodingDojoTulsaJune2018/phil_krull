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
        [HttpGet("")]
        public IActionResult Index()
        {
            // ----------------- Below for testing only -----------------
            // Trail newTrail = new Trail();

            // newTrail.Name = "Trail 4";
            // newTrail.Description = "Description for trail 4";
            // newTrail.Length = 1000;
            // newTrail.Elevation = 5000;
            // newTrail.Longitude = 45;
            // newTrail.Latitude = 45;

            // trailFactory.Add(newTrail);

            IEnumerable<Trail> allTrails = trailFactory.FindAll();
            Console.WriteLine("--------------------------------------------------------------------------------------------");
            Console.WriteLine($"There are {allTrails.Count()} trails in the database and the names are:");
            // foreach(Trail trail in allTrails)
            // {
            //     Console.WriteLine($"The name of the trail is: {trail.Name}");
            // }

            ViewBag.AllTrails = allTrails;

            return View();
        }

        [HttpPost("AddTrail")]
        public IActionResult AddTrail(Trail trail)
        {
            if(ModelState.IsValid)
            {
                trailFactory.Add(trail);
                return RedirectToAction("Index");
            } else {
                return View("NewTrail", trail);
            }
        }

        [HttpGet("NewTrail")]
        public IActionResult NewTrail()
        {
            ViewData["Message"] = "Add a New Trail";

            return View();
        }

        [HttpGet("Trail/{Trail_Id}")]
        public IActionResult ShowTrail(long Trail_Id)
        {
            Trail trail = trailFactory.FindByID(Trail_Id);
            ViewBag.Trail = trail;
            return View();
        }

        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
