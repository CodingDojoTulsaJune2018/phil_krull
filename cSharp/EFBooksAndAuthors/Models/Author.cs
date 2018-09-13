using System;
using System.ComponentModel.DataAnnotations;

namespace EFBooksAndAuthors
{
    public class Author
    {
        [Key]
        public long AuthorId {get; set;}

        public string First_Name {get; set;}

        public string Last_Name {get; set;}

        public DateTime Created_At {get; set;}

        public DateTime Updated_At {get; set;}
    }
}