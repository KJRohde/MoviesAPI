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
        public IEnumerable<Movie> Get()
        {
            var movies = db.Movies.ToList();

            return movies;
        }

        // GET api/values/5
        public Movie Get(int id)
        {
            Movie movie = db.Movies.FirstOrDefault(m => m.MovieId == id);
            return movie;
        }

        // POST api/values
        public void Post([FromBody]Movie value)
        {
            db.Movies.Add(value);
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]Movie value)
        {
            Movie movieToEdit = db.Movies.FirstOrDefault(m => m.MovieId == id);
            movieToEdit.Title = value.Title;
            movieToEdit.Director = value.Director;
            movieToEdit.Genre = value.Genre;

        }

        // DELETE api/values/5 
        public void Delete(int id)
        {
            Movie movie = db.Movies.Where(m => m.MovieId == id).Single();
            db.Movies.Remove(movie);
        }
    }

}