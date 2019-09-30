using Helpdesk_Ticketing.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Helpdesk_Ticketing.Models.Interfaces
{
    public interface ITickets
    {
        // Add item to the cart
        Task AddCartTicket(CartTickets CartItem);
        //Read one Item
        Task<TicketTypes> GetTicketsByID(int id);

        Task<Cart> GetCart(string username);

        //Read all items
        Task<List<TicketTypes>> GetInventories();

        //Update
        Task UpdateInventory(TicketTypes ticketTypes);

        //Delete
        Task DeleteInventory(int id);
    }
}
