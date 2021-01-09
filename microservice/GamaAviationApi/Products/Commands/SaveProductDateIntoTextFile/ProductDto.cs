using System;

namespace GamaAviationApi.Products.Commands.SaveProductDateIntoTextFile
{
    public class ProductDto
    {
        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public string ProductDescription { get; set; }
        public DateTime DateCreated { get; set; }
    }
}