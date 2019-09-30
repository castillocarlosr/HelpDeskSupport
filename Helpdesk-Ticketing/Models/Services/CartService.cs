﻿using Helpdesk_Ticketing.Data;
using Helpdesk_Ticketing.Models.Interfaces;
using Helpdesk_Ticketing.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Helpdesk_Ticketing.Models.Services
{
    public class CartService : ICart
    {
        private TicketsDbContext _context { get; }
        public CartService(TicketsDbContext context)
        {
            _context = context;
        }
  
        public async Task<bool> DeleteCartItems(string username)
        {
            try
            {
                Cart cart = await _context.Cart.FirstOrDefaultAsync(c => c.UserID == username);

                foreach (var cartItem in cart.CartTickets)
                {
                    _context.CartItems.Remove(cartItem);
                }

                await _context.SaveChangesAsync();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        public async Task<CartTickets> DeleteItem(int id)
        {
            CartTickets item = await _context.CartItems.Include(o => o.Inventory)
                                           .FirstOrDefaultAsync(o => o.ID == id);

            _context.Remove(item);
            await _context.SaveChangesAsync();
            return item;
        }

        public async Task<Cart> UpdateCartItems(int id, string email)
        {
            Cart cart = await _context.Cart.Include(ci => ci.CartItems)
                                            .ThenInclude(oi => oi.Inventory)
                                            .FirstOrDefaultAsync(c => c.UserID == email);

            _context.Update(cart);
            await _context.SaveChangesAsync();
            return cart;
        }

        private bool CartItemExists(int id)
        {
            //return _context.Shoes.Any(e => e.ID == id);
        }

        public async Task<Cart> GetCartForUser(string email)
        {
            Cart cart = new Cart();
            cart.UserID = email;
            _context.Cart.Add(cart);
            await _context.SaveChangesAsync();
            return cart;
        }
    }
}
