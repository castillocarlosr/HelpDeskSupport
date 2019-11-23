using System;

namespace WithAuth.Models
{
    public class CartTickets
    {
        public int ID { get; set; }

        [ForeignKey("Cart")]
        public int CartID { get; set; }
        public int OrderID { get; set; }
        //Will fill in from Controller 11/22-Carlos
        [ForeignKey("Inventory")]
        public int InventoryID { get; set; }
        public int Quantity { get; set; }

        public Cart Cart { get; set; }
    }
}
