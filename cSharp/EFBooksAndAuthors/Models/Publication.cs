using System;
using System.ComponentModel.DataAnnotations;

namespace EFBooksAndAuthors.Models
{
    public class Publication
    {
        [Key]
        public long PublicationId { get; set; }

        [Range(1, int.MaxValue,ErrorMessage="book is required!")]
        public long BookId { get; set; }
        public Book Book { get; set; }
 
        [Range(1, int.MaxValue,ErrorMessage="publisher is required!")]
        public long PublisherId { get; set; }
        public Publisher Publisher { get; set; }

        public DateTime PublishedDate {get; set;}

        public Publication()
        {
            PublishedDate = DateTime.Now;
        }
    }
}