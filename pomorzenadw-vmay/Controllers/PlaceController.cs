using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PomorzeNadw_vJan.Data;
using PomorzeNadw_vJan.Models;
using System;
using System.Linq;

namespace pomorzenadw_vmay.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PlaceController : ControllerBase
    {
        private readonly DataContext _context;

        public PlaceController(DataContext context)
        {
            _context = context;
        }

        // GET: api/Place
        [HttpGet]
        public IActionResult Get()
        {
            var places = _context.Places.ToList();
            return Ok(places);
        }

        // GET: api/Place/5
        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var place = _context.Places.FirstOrDefault(p => p.Id == id);
            if (place == null)
            {
                return NotFound();
            }
            return Ok(place);
        }

        // POST: api/Place
        [HttpPost]
        public IActionResult Create([FromBody] Place place)
        {
            if (place == null)
            {
                return BadRequest();
            }

            _context.Places.Add(place);
            _context.SaveChanges();

            return CreatedAtAction(nameof(GetById), new { id = place.Id }, place);
        }

        // PUT: api/Place/5
        [HttpPut("{id}")]
        public IActionResult Update(int id, [FromBody] Place place)
        {
            if (place == null || place.Id != id)
            {
                return BadRequest();
            }

            var existingPlace = _context.Places.FirstOrDefault(p => p.Id == id);
            if (existingPlace == null)
            {
                return NotFound();
            }

            existingPlace.Name = place.Name;
            existingPlace.Description = place.Description;
            // Update other properties as needed

            _context.SaveChanges();

            return NoContent();
        }

        // DELETE: api/Place/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var place = _context.Places.FirstOrDefault(p => p.Id == id);
            if (place == null)
            {
                return NotFound();
            }

            _context.Places.Remove(place);
            _context.SaveChanges();

            return NoContent();
        }
    }
}
