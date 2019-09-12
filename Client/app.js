document.ready(makeTable())

(function($){
    function processForm( e ){
        var dict = {
            Title : this["Title"].value,
            Director: this["Director"].value,
            Genre: this["Genre"].value
        };

        $.ajax({
            url: 'https://localhost:44352/api/Movie',
            async: false,
            dataType: 'json',
            type: 'post',
            contentType: 'application/json',
            data: JSON.stringify(dict),
            success: function( data, textStatus, jQxhr ){
                $('#response pre').html( data );
            },
            error: function( jqXhr, textStatus, errorThrown ){
                console.log( errorThrown );
            }
        });

        e.preventDefault();
    }

    $('#my-form').submit( processForm );
})(jQuery);


function makeTable(){
$.ajax({
    url: 'https://localhost:44352/api/Movie',
    dataType: 'json',
    type: 'get',
    data: JSON,
    success: function (data, textStatus, jQxhr){
        $.each(data, function (index, movie) {
            console.log(movie);
        $("#movies_table").append(
            "<tr><td>" + movie.Title
            + "</td><td>" + movie.Genre
            + "</td><td>" + movie.Director
            + "</td><td>" + "<button onclick=getDetails("+ movie.MovieId +")>" + "Edit" + "</button>"
            + "</td></tr>")
    });
    },
    error: function (request, message, error) {
      handleException(request, message, error);
    }
    });
}

function movieDetails(id){
$.ajax({
    url: 'https://localhost:44352/api/Movie/' + id + '',
    dataType: 'json',
    type: 'get',
    data: JSON,
    success: function (data, textStatus, jQxhr){
        alert("Movie: " + data.Title + "\n Genre: " + data.Genre + "\n Director: " + data.Director + "");
        console.log(data);
    },
    error: function (request, message, error) {
      handleException(request, message, error);
    }
})
}

function getDetails( id ){
    $.ajax({
    url: 'https://localhost:44352/api/Movie/' + id + '',
    dataType: 'json',
    type: 'get',
    data: JSON,
    success: function (data, textStatus, jQxhr){
        alert("Movie: " + data.Title + "\n Genre: " + data.Genre + "\n Director: " + data.Director + "");
        editDetails(id, data);
    },
    error: function (request, message, error) {
      handleException(request, message, error);
    }
})
}
function editDetails(id, movie){
        var newTitle = prompt("Change the movie title if it is incorrect.", ""+ movie.Title +"");
        var newGenre = prompt("Change the genre of this movie if it is incorrect", ""+ movie.Genre +"");
        var newDirector = prompt("Change the director of this movie if their name is incorrect", ""+ movie.Director +"");
        var dict = {
            Title : newTitle,
            Director: newDirector,
            Genre: newGenre
        };
        $.ajax({
            url: 'https://localhost:44352/api/Movie/' + id + '',
            async: false,
            dataType: 'json',
            type: 'put',
            contentType: 'application/json',
            data: JSON.stringify(dict),
            success: function( data, textStatus, jQxhr ){
            },
            error: function( jqXhr, textStatus, errorThrown ){
                console.log( errorThrown );
            }
        });
    }(jQuery);