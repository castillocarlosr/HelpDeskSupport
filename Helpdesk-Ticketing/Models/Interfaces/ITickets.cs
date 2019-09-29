using Helpdesk_Ticketing.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Helpdesk_Ticketing.Models.Interfaces
{
    public interface ITickets
    {
        Task<Cart> UpdateCartTickets(int id, string username);

        /// <summary>
        /// Delete option only for Admin
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        Task<Cart> DeleteTicket(int id);

        Task<bool> DeleteCartTickets(string username);
        Task<Cart> GetCartForUser(string username);
    }
}
