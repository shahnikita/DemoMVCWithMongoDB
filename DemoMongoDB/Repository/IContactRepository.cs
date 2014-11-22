using DemoMongoDB.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DemoMongoDB.Repository
{
    interface IContactRepository
    {
         IEnumerable<Contact> GetAllContacts();
         IEnumerable<Contact> GetContact(string val);
        Contact AddContact(Contact item);
     
        bool RemoveContact(string id);
    
       bool UpdateContact(string id, Contact item);

     
    }
}
