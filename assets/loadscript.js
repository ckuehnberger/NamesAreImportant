var tagsList = [];
var networkList = [];
var timeList = [];

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
            timeList.push(airTime);


            var airDay = $show.find('airDay').text();
            var network = $show.find('network').text();
<<<<<<< Updated upstream
               var description = $show.find('description').text();
            var video = $show.find('video').text();
            //var genres = $show.find('genres').childNodes();
=======
            networkList.push(network);

>>>>>>> Stashed changes
            var genres = $show.find('genres');
            var html = '<ul class="show"> <ul class="flipper"> <ul class="front">';
            html += '<li class="poster">' + poster + '</li>';
            html += '<li class="title">' + title + '</li>';
            html += '<li class="date"> ' + month + " " + day + ", " + year + '</li>';
            html += '<li class="airDateTime">' + airTime + ", " + airDay + '</li>';
            html += '<button id="descBtn">' + 'description' + '</button>';

            var genreString = createGenresString(genres);
            console.log(genreString);
            html += genreString;

            html += '<li class="network">' + network + '</li>' + '</ul>';
            html += '<ul class="back">' + '<li class="description">' + description + '</li>';
            html += '</ul> </ul>';


            $('#shows').append($(html));
            

        });

populateTags(tagsList, "#tag-selector #genres");
populateTags(networkList, "#tag-selector #networks");
populateTags(timeList, "#tag-selector #times");
    });
});

function createGenresString(genres) {
    var string = "";

    $(genres).children().each(function () {
        tagsList.push($(this).text());
        string += "<li class='genres'>" + $(this).text() + '</li>';
    });

    return string;
}