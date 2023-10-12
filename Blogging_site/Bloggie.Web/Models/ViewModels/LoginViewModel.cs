using System.ComponentModel.DataAnnotations;

namespace Bloggie.Web.Models.ViewModels
{
    public class LoginViewModel
    {
        
        public string  Email { get; set; }
        
        public string Password { get; set; }
        
        public string ReturnUrl { get; set; }
    }
}
