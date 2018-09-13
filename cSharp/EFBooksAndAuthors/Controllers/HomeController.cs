using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using EFBooksAndAuthors.Models;

namespace EFBooksAndAuthors.Controllers
{
    public class HomeController : Controller
    {
        public Context _context;
        public HomeController(Context context)
        {
            _context = context;
        }
        public IActionResult Index()
        {
            List<Author> AllAuthors = _context.Authors.ToList();
            Console.WriteLine("====================================================================");
            Console.WriteLine(AllAuthors.Count);

            foreach(Author author in AllAuthors)
            {
                Console.WriteLine(author.First_Name + " " + author.Last_Name);
            }

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
