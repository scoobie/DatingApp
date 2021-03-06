using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class Toto : Controller
    {
        // GET
        public IActionResult Index()
        {
            return View();
        }
    }
}