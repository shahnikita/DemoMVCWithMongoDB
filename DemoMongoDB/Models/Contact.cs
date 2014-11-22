using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DemoMongoDB.Models
{
    public class Contact
    {
        [BsonId]
        public string Id { get; set; }

        public string Name { get; set; }

        public string Phone { get; set; }

        public string Email { get; set; }
        [BsonElement("Date")]
        public DateTime LastModified { get; set; }
    }
}