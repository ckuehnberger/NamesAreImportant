 $(document).ready(function() {
    $.get('assets/showdata.xml', function (d) {

        $(d).find('show').each(function () {
            //finds each element in each <show> in the xml file and assigns the text to the respective variable
            var $show = $(this);
            var title = $show.find('title').text();
            var poster = $show.find('poster').text();
            var month = $show.find('month').text();
            var day = $show.find('day').text();
            var year = $show.find('year').text();
            var airTime = $show.find('airTime').text();
            var airDay = $show.find('airDay').text();
            var network = $show.find('network').text();
            //var genres = $show.find('genres').childNodes();
            var genres = $show.find('genres');
            var html = '<ul class="show">';
            html += '<li class="poster">' + poster + '</li>';
            html += '<li class="title">' + title + '</li>';
            html += '<li class="date"> ' + month + " " + day + ", " + year + '</li>';
            html += '<li class="airDateTime">' + airTime + ", " + airDay + '</li>';

            var genreString = createGenreString(genres);
            console.log(genreString);
            html += genreString;

            html += '<li class="network">' + network + '</li>';
            html += '</ul>';


            $('#showsection').append($(html));

        });
    });
});

function createGenreString(genres) {
    var string = "";

    $(genres).children().each(function () {
        string += '<li class="genre">' + $(this).text() + '</li>';
    });

    return string;
}