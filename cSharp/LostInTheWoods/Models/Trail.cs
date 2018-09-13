using System;
using System.ComponentModel.DataAnnotations;

namespace LostInTheWoods
{
    public class Trail
    {
        [Key]
        public long Trails_Id {get;set;}

        [Required]
        public string Name {get; set;}

        [Required]
        [MinLength(10)]
        public string Description {get; set;}

        [RegularExpression(@"^[0-9]([.,]*[0-9]{1,3})?$", ErrorMessage="Length must be a number!")]
        public double? Length {get; set;}

        [RegularExpression(@"^[0-9]([.,]*[0-9]{1,3})?$", ErrorMessage="Elevation must be a number!")]
        public double? Elevation {get; set;}

        [RegularExpression(@"[-+]?(180(.0+)?|((1[0-7]\d)|([1-9]?\d))(.\d+)?)$", ErrorMessage="Enter a valid longitude")]
        public double? Longitude {get; set;}

        [RegularExpression(@"^[-+]?([1-8]?\d(.\d+)?|90(.0+)?)$", ErrorMessage="Enter a valid latitude")]
        public double? Latitude {get; set;}

        public DateTime Created_At {get; set;}

        public DateTime Updated_At {get; set;}

        public Trail()
        {
            Created_At = DateTime.Now;
            Updated_At = DateTime.Now;
        }
    }
}