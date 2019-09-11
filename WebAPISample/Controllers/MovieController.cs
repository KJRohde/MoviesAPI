using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebAPISample.Models;

namespace WebAPISample.Controllers
{
    public class MovieController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET api/values
        public IHttpActionResult Get()
        {
            var movies = db.Movies.ToArray();

            return Ok(movies);
        }

        // GET api/values/5
        public IHttpActionResult Get(int id)
        {
            Movie movie = db.Movies.FirstOrDefault(m => m.MovieId == id);
            return Ok(movie);
        }

        // POST api/values
        public void Post([FromBody]Movie value)
        {
            db.Movies.Add(value);
            db.SaveChanges();
        }

        // PUT api/values/5
        public IHttpActionResult Put(int id, [FromBody]Movie value)
        {
            Movie movieToEdit = db.Movies.FirstOrDefault(m => m.MovieId == id);
            movieToEdit.Title = value.Title;
            movieToEdit.Director = value.Director;
            movieToEdit.Genre = value.Genre;
            db.SaveChanges();
            return Ok(movieToEdit);
        }

        // DELETE api/values/5 
        public void Delete(int id)
        {
            Movie movie = db.Movies.Where(m => m.MovieId == id).Single();
            db.Movies.Remove(movie);
        }
    }

}