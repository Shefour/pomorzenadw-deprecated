using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PomorzeNadw_vJan.Models
{
    public class Place
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Column(TypeName = "VARCHAR(99)")]
        public string? Name { get; set; } = string.Empty;

        [Column(TypeName = "VARCHAR(99)")]
        public string? Type { get; set; } = string.Empty;

        [Column(TypeName = "VARCHAR(99)")]
        public string? Subtype { get; set; } = string.Empty;

        [Column(TypeName = "ntext")]
        public string? Weblink { get; set; } = string.Empty;

        [Column(TypeName = "VARCHAR(99)")]
        public string? Phonenum { get; set; } = string.Empty;

        [Column(TypeName = "VARCHAR(99)")]
        public string? Voivodeship { get; set; } = string.Empty;

        [Column(TypeName = "VARCHAR(99)")]
        public string? City { get; set; } = string.Empty;

        [Column(TypeName = "ntext")]
        public string? Description { get; set; } = string.Empty;

        [Column(TypeName = "VARCHAR(99)")]
        public string? Duration { get; set; } = string.Empty;

        public int imageCount { get; set; }

    }
}
