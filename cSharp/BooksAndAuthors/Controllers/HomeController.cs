using System;
using Microsoft.AspNetCore.Mvc;
using BooksAndAuthors.Models;

namespace BooksAndAuthors.Controllers
{
    public class HomeController:Controller
    {
        [HttpGet("")]
        public IActionResult Index()
        {
            return View();
        }
        [HttpPost("AddBook")]
        public IActionResult AddBook(Book book)
        {
            if(ModelState.IsValid)
            {
                // add to DB
                // use in session
                // send to another view
                Book book1 = new Book("Green eggs and Ham", "Dr. Suess");
                Book book2 = new Book("Hunger Games", "Suzanne Collins");

                Book[] books = {
                    book,
                    book1,
                    book2
                };

                Console.WriteLine($"The title is: {book.Title}, written by: {book.Author}");
                // return RedirectToAction("Index");
                return View("Display", books);
            } else {
                return View("Index", book);
            }
        }
    }
}