using DemoMongoDB.Models;
using DemoMongoDB.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace DemoMongoDB.Controllers
{
    public class ContactsController : ApiController
    {
        private static readonly IContactRepository _contacts = new ContactRepository();
        // GET: api/Contacts
        [HttpGet]
        [Route("api/Contacts/GetAllContacts")]
        public IEnumerable<Contact> Get()
        {
            return _contacts.GetAllContacts();
        }

        // GET: api/Contacts/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Contacts
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Contacts/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Contacts/5
        public void Delete(int id)
        {
        }
    }
}
