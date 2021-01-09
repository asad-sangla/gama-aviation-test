using System;
using System.ComponentModel.DataAnnotations;
using MediatR;

namespace GamaAviationApi.Products.Commands.SaveProductDateIntoTextFile
{
    public class SaveProductDateIntoTextFileCommand : IRequest<ProductDto>
    {
        [Required]
        [Range(1, int.MaxValue, ErrorMessage = "Product Id must be between 1 to 2147483847")]
        public int ProductId { get; set; }

        [Required]
        [StringLength(255, ErrorMessage = "Product Name length can't be more than 255 characters.")]
        public string ProductName { get; set; }

        [Required]
        [StringLength(255, ErrorMessage = "Product Description length can't be more than 255 characters.")]
        public string ProductDescription { get; set; }

        [Required]
        [DataType(DataType.Date, ErrorMessage = "Date Create must be in date format 'YYYY-MMD-DD'")]
        public DateTime DateCreated { get; set; }
    }
}
