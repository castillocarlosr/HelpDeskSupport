using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Helpdesk_Ticketing.Models;

namespace Helpdesk_Ticketing.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options): base(options)
        {

        }

        //public object Roles { get; internal set; }
    }
}
