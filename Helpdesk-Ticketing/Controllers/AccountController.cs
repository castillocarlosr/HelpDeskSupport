using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Helpdesk_Ticketing.Models;
using Helpdesk_Ticketing.Models.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace Helpdesk_Ticketing.Controllers
{
    public class AccountController : Controller
    {
        //private UserManager<ApplicationUser> _userManager;
        //private SignInManager<ApplicationUser> _signInManager;
        //use sendgrid if email sender is needed.
        
        private UserManager<IdentityMemberUser> _userManager;
        private SignInManager<IdentityMemberUser> _signinManager;
        private readonly ITickets _context;

        //public AccountController(ITickets)
        //Carlos, finish Interface first in the morning.  -Last night Carlos :)
        
    }
}