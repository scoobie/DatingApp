using System;

namespace API.Entities
{
    public class Message
    {
        public int Id { get; set; }

        // sender
        public int SenderId { get; set; }
        public string SenderUsername { get; set; }

        public AppUser Sender { get; set; }

        // receiver
        public int RecipientId { get; set; }
        public string RecipientUsername { get; set; }

        public AppUser Recipient { get; set; }

        // other attributes for the message
        public string Content { get; set; }
        public DateTime? DateRead { get; set; }
        public DateTime MessageSent { get; set; } = DateTime.UtcNow;
        public bool SenderDeleted { get; set; }
        public bool RecipientDeleted { get; set; }
    }
}