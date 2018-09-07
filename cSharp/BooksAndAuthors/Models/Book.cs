using System.ComponentModel.DataAnnotations;

namespace BooksAndAuthors.Models
{
    public class Book
    {
        [Required]
        public string Title { get; set; }
        [Required]
        public string Author { get; set; }

        public Book() {}

        public Book(string title, string author)
        {
            Title = title;
            Author = author;
        }
    }
}