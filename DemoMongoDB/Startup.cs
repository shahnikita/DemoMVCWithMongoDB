using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(DemoMongoDB.Startup))]
namespace DemoMongoDB
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
