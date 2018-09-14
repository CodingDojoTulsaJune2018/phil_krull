using System.Collections.Generic;

namespace EFBooksAndAuthors.Models
{
    public class IndexViewModel
    {
        public Author Author;
        public Book Book;
        public List<Author> AllAuthors = new List<Author>();
    }
}