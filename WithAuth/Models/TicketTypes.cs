using System;

namespace WithAuth.Models
{
    public class TicketTypes
    {
        public int ID { get; set; }

        public string Name { get; set; }

        public Difficulty GetDifficulty { get; set; }

        public enum Difficulty
        {
            Easy,
            Medium,
            Hard
        }

        public string Comments { get; set; }
    }
}

