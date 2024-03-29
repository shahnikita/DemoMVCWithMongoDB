﻿using DemoMongoDB.Models;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Driver.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DemoMongoDB.Repository
{
    public class ContactRepository : IContactRepository
    {
        public MongoServer _server;
        public MongoDatabase _database;
        public MongoCollection<Contact> _contacts;
        public ContactRepository()
        {


            var connection = System.Configuration.ConfigurationManager.ConnectionStrings["Contactcontext"].ConnectionString;


            _server = MongoServer.Create(connection);
            _database = _server.GetDatabase("Contacts", SafeMode.True);
            _contacts = _database.GetCollection<Contact>("contacts");

            // Reset database and add some default entries
            //_contacts.RemoveAll();
            //for (int index = 1; index < 15; index++)
            //{
            //    Contact contact1 = new Contact
            //    {
            //        Email = string.Format("test{0}@example.com", index),
            //        Name = string.Format("test{0}", index),
            //        Phone = string.Format("{0}{0}{0} {0}{0}{0} {0}{0}{0}{0}", index),
            //        LastModified=DateTime.Now
            //    };
            //    AddContact(contact1);
            //}
        }


        public IEnumerable<Contact> GetAllContacts()
        {
            return _contacts.FindAll();
        }

        public  IEnumerable<Contact>  GetContact(string val)
        {
           // IMongoCommand command=IMongoCommand
           // _database.RunCommand()
            IMongoQuery query = Query.Matches("Name", val);
            return _contacts.Find(query);
        }

        public Contact AddContact(Contact item)
        {
            item.Id = ObjectId.GenerateNewId().ToString();
            item.LastModified = DateTime.UtcNow;
            _contacts.Insert(item);
            return item;
        }

        public bool RemoveContact(string id)
        {
            IMongoQuery query = Query.EQ("_id", id);
            SafeModeResult result = _contacts.Remove(query);
            return result.DocumentsAffected == 1;
        }

        public bool UpdateContact(string id, Contact item)
        {
            IMongoQuery query = Query.EQ("_id", id);
            item.LastModified = DateTime.UtcNow;
            IMongoUpdate update = Update
                .Set("Email", item.Email)
                 .Set("LastModified", item.LastModified)
                 .Set("Name", item.Name)
                  .Set("Phone", item.Phone);
            SafeModeResult result = _contacts.Update(query, update);
            return result.UpdatedExisting;

        }






    }
}