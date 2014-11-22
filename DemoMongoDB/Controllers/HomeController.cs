using DemoMongoDB.Models;
using DemoMongoDB.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace DemoMongoDB.Controllers
{
    public class HomeController : Controller
    {
        private static readonly IContactRepository _contacts = new ContactRepository();
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

       
        public JsonResult GetAllContacts() 
        {
            return Json(_contacts.GetAllContacts(),JsonRequestBehavior.AllowGet);
        }
         [HttpPost]
        public JsonResult SearchContact(string val)
        {
             if(val!=null)
                 return Json(_contacts.GetContact(val));
             return Json(null);
        }
          [HttpPost]
         public JsonResult AddContact(Contact contact)
         {
              
             return Json(_contacts.AddContact(contact));
         }
          [HttpPost]
         public JsonResult UpdateContact(Contact contact)
         {
             return Json(_contacts.UpdateContact(contact.Id,contact));
         }
         public JsonResult DeleteContact(string id)
         {
             return Json(_contacts.RemoveContact(id),JsonRequestBehavior.AllowGet);
         }
    }
}