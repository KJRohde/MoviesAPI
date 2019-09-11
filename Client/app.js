(function($){
    function processForm( e ){
        var dict = {
            Title : this["Title"].value,
            Director: this["Director"].value,
            Genre: this["Genre"].value
        };

        $.ajax({
            url: 'https://localhost:44352/api/Movie',
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


$(document).ready(function makeTable(){
$.ajax({
    url: 'https://localhost:44352/api/Movie',
    dataType: 'json',
    type: 'get',
    data: JSON,
    async: true,
    success: function (data, textStatus, jQxhr){
        $.each(data, function (index, movie) {
            console.log(movie);
        $("#movies_table").append(
            "<tr><td>"
            + movie.Title
            + "</td>" +"<td>" + movie.Genre
            + "</td>" + "<td>" + movie.Director
            + "</td></tr>")
    });
    },
    error: function (request, message, error) {
      handleException(request, message, error);
    }
    });
});