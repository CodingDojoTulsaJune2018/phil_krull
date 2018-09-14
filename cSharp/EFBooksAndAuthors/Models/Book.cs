using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EFBooksAndAuthors
{
    public class Book
    {
        [Key]
        public long BookId {get; set;}

        [Required]
        public string Title {get; set;}

        public long AuthorId {get; set;}
        public Author Author {get; set;}


        public DateTime Created_At {get; set;}
        public DateTime Updated_At {get; set;}

        public Book()
        {
            Created_At = DateTime.Now;
            Updated_At = DateTime.Now;
        }
    }
}