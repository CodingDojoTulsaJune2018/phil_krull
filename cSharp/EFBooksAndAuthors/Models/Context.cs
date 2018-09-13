using Microsoft.EntityFrameworkCore;
 
namespace EFBooksAndAuthors.Models
{
    public class Context : DbContext
    {
        public DbSet<Author> Authors {get; set;}
        
        // base() calls the parent class' constructor passing the "options" parameter along
        public Context(DbContextOptions<Context> options) : base(options) {}
    }
}