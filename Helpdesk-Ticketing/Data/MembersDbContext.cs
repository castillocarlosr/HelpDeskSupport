using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Helpdesk_Ticketing.Data
{
    public class MembersDbContext : DbContext
    {
        public MembersDbContext(DbContextOptions<MembersDbContext> options): base(options)
        {

        }
    }
}
