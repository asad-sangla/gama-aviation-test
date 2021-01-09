using System.Threading.Tasks;
using GamaAviationApi.Products.Commands.SaveProductDateIntoTextFile;
using Microsoft.AspNetCore.Mvc;

namespace GamaAviationApi.Controllers
{
    [Route("api/product")]
    [ApiController]
    public class ProductController : ApiController
    {
        public ProductController()
        {
        }

        [Route("SaveProductData")]
        [HttpPost]
        public async Task<IActionResult> SaveProductData([FromBody] SaveProductDateIntoTextFileCommand command)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var result = await Mediator.Send(command);
            return Ok(result);
        }
    }
}
