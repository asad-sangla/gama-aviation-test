using System.IO;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.AspNetCore.Hosting;
using Newtonsoft.Json;

namespace GamaAviationApi.Products.Commands.SaveProductDateIntoTextFile
{
    public class SaveProductDateIntoTextFileHandler : IRequestHandler<SaveProductDateIntoTextFileCommand, ProductDto>
    {
        private readonly IWebHostEnvironment _env;

        public SaveProductDateIntoTextFileHandler(IWebHostEnvironment env)
        {
            _env = env;
        }

        public async Task<ProductDto> Handle(SaveProductDateIntoTextFileCommand request, CancellationToken cancellationToken)
        {
            var filePath = Path.Combine(_env.ContentRootPath, "File.txt");
            var productJson = JsonConvert.SerializeObject(request);

            await File.AppendAllTextAsync(filePath, $"{productJson}\n", cancellationToken);

            return new ProductDto
            {
                ProductId = request.ProductId,
                ProductName = request.ProductName,
                ProductDescription = request.ProductDescription,
                DateCreated = request.DateCreated
            };
        }
    }
}