﻿using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Helpdesk_Ticketing.Models
{
    public class IdentityMemberUser : IdentityUser
    {
        /// <summary>
        /// Just Login needed here.
        /// </summary>
        public string LoginName { get; set; }
    }

    /// <summary>
    /// Creating User and Member roles.  Calling Member Admin to remember they have full access to tickets.
    /// </summary>
    public static class ApplicationRoles
    {
        public const string MemberAdmin = "MemberAdmin";
        public const string User = "User";
    }
}
