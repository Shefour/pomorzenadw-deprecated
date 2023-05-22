using PomorzeNadw_vJan.Models;
using Microsoft.EntityFrameworkCore;

namespace PomorzeNadw_vJan.Data
{

    public class DataContext : DbContext
    {
        public DataContext()
        {

        }
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        { 
        
        }
        public DbSet<Place> Places { get; set; }
    }
}