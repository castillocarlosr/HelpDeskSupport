using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Helpdesk_Ticketing.Models.Interfaces
{
    interface ICart
    {
        Task<ICart> UpdateCartItems(int id, string username);

        Task<ICart> GetCartForUser(string username);
    }
}
