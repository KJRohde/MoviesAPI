(function($){
    function processForm( e ){
        var dict = {
        	Title : this["title"].value,
        	Director: this["director"].value
            Genre: this["genre"].value
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


$("tr:has(td)").remove();

$.each(Movie, function (index, Movie) {

    var td_title = $("<td/>");

    // 2.3 get each category of this article
    $.each(Movie.Title, function (i, Title) {
        var span = $("<span/>");
        span.text(title);
        td_title.append(span);
    });

    var td_genre = $("<td/>");

    // 2.3 get each category of this article
    $.each(Movie.Genre, function (i, Genre) {
        var span = $("<span/>");
        span.text(Genre);
        td_genre.append(span);
    });    var td_genre = $("<td/>");

    var td_director = $("<td/>");

    // 2.3 get each category of this article
    $.each(Movie.Director, function (i, Director) {
        var span = $("<span/>");
        span.text(Director);
        td_director.append(span);
    });

    // 2.6 Create a new row and append 3 columns (title+url, categories, tags)
    $("#movies").append($('<tr/>')
            .append(td_title)
            .append(td_director)
            .append(td_tags)
    ); 
}); 