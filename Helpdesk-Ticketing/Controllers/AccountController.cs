using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using Helpdesk_Ticketing.Models;
using Helpdesk_Ticketing.Models.Interfaces;
using Helpdesk_Ticketing.Models.ViewModels;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Text;
using Microsoft.AspNetCore.Authorization;

namespace Helpdesk_Ticketing.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class AccountController : Controller
    {
        //use sendgrid if email sender is needed.

        private UserManager<AccountUsers> _userManager;
        private SignInManager<AccountUsers> _signInManager;
        private readonly ICart _context;

        public AccountController(ICart context, UserManager<AccountUsers> userManager, SignInManager<AccountUsers> signInManager)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _context = context;
        }

        [HttpGet]
        public IActionResult Register() => View();

        /// <summary>
        /// rvm = register-view-model
        /// </summary>
        /// <param name="rvm"></param>
        /// <returns></returns>
        [HttpPost]
        public async Task<IActionResult> Register(RegisterUser rvm)
        {
            if (ModelState.IsValid)
            {
                AccountUsers user = new AccountUsers()
                {
                    UserName = rvm.Email,
                    Email = rvm.Email
                };

                var result = await _userManager.CreateAsync(user, rvm.Password);
                if (result.Succeeded)
                {
                    await _context.GetCartForUser(user.Email);

                    Claim emailClaim = new Claim(ClaimTypes.Email, user.Email);
                    List<Claim> claims = new List<Claim> { emailClaim };

                    await _userManager.AddClaimsAsync(user, claims);
                    await _signInManager.SignInAsync(user, isPersistent: false);

                    if(user.Email == "admin@helpdeskteammember.com" || user.Email.Contains("@admin.com") || user.Email == "castillocarlosr2@gmail.com")
                    {
                        await _userManager.AddToRoleAsync(user, ApplicationRoles.MemberAdmin);
                    }
                    return RedirectToAction("Home", "ClientApp");
                }
            }
            return View(rvm);
        }

        [HttpGet]
        public IActionResult Login() => View();

        [AllowAnonymous]
        [HttpPost("authenticate")]
        public async Task<IActionResult> Login(LoginUser lvm)
        {
            if (ModelState.IsValid)
            {
                var result = await _signInManager.PasswordSignInAsync(lvm.Email, lvm.Password, false, false);

                if (result.Succeeded)
                {
                    var user = await _userManager.FindByEmailAsync(lvm.Email);
                    if (await _userManager.IsInRoleAsync(user, ApplicationRoles.MemberAdmin))
                    {
                        var ourUser = await _userManager.FindByEmailAsync(lvm.Email);
                        return RedirectToPage("/Admin/Index");

                    }
                    return RedirectToAction("Home", "ClientApp");
                }
            }
            ModelState.TryAddModelError(string.Empty, "Invalid Login Attempt");
            return View(lvm);
        }

        public async Task<IActionResult> Logout()
        {
            await _signInManager.SignOutAsync();
            return RedirectToAction("Home", "ClientApp");
        }
    }
}