//notsure how to get it to use this script,.
$(document).ready(function()
      {
        $.get('showdata.xml', function(d){

        $(d).find('show').each(function(){
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
            var genre1 = $show.find('genre1').text();
            var genre2 = $show.find('genre2').text();
            var genre3 = $show.find('genre3').text();
          
            var html = '<ul class="show">';
            
            html += '<li class="poster">' + poster + '</li>'
            html += '<li class="title">' + title + '</li>'
            html += '<li class="date"> ' + month + " " + day + ", " + year + '</li>' ;
            html += '<li class="airDateTime">' + airTime + ", " +  airDay + '</li>'
            
            //genre ul and list items elements, append in single line??
            html += '<ul class>'
            html += '<li class="genres">' + genre1 + '</li>'
            html += '<li class="genres">' + genre2 + '</li>'
            html += '<li class="genres">' + genre3 + '</li></ul>'


            html += '<li class="network">' + network + '</li>'
            
 
            html += '</ul>';

            //appending the html variable stuff to the show section
            $('#showsection').append($(html)); 
    
            
        });
    });
});