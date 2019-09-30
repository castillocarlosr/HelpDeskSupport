using Helpdesk_Ticketing.Data;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;
using System;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Helpdesk_Ticketing.Models.ViewModels
{
    public class RoleInitializer
    {
        private static readonly List<IdentityRole> Roles = new List<IdentityRole>()
        {
            new IdentityRole{Name= ApplicationRoles.MemberAdmin, NormalizedName = ApplicationRoles.MemberAdmin.ToUpper(), ConcurrencyStamp = Guid.NewGuid().ToString() },
            new IdentityRole{Name = ApplicationRoles.User, NormalizedName = ApplicationRoles.User.ToUpper(), ConcurrencyStamp = Guid.NewGuid().ToString()}
        };

        public static void SeedData(IServiceProvider serviceProvider)
        {
            using (var dbContext = new MembersDbContext(serviceProvider.GetRequiredService<DbContextOptions<MembersDbContext>>()))
            {
                dbContext.Database.EnsureCreated();
                AddRoles(dbContext);
            }
        }
        private static void AddRoles(MembersDbContext context)
        {
            if (context.Roles.Any()) return;

            foreach (var role in Roles)
            {
                context.Roles.Add(role);
                context.SaveChanges();
            }
        }


    }
}
