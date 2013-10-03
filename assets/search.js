window.onload = function(){
	$("#tag-selector").on('click', 'li', function() {
  toggleResults($(this).text());
});

}
	/*$("#tag-selector li").on("click",function() {
		toggleResults(this.innerText);
  }); */

		

/*This function scans the show tags on the DOM*/ 		
function populateTags(tagsList) {
	/*var tagsList = [];
	$(".genre").each( function() {
		tagsList.push(this.innerText)
	});*/
	console.log("Pre-unique: " +  tagsList.length)
	tagsList = unique(tagsList);
	console.log("Post-unique: " +  tagsList.length)

	$.each(tagsList, function() {
		console.log(this.toString());
		$( "<li>" + this.toString() + "</li>" ).appendTo( "#tag-selector .tags" );
	});
}


/*Helper function to create a unique list of tags.*/
function unique(arr) {
    var hash = {}, result = [];
    for ( var i = 0, l = arr.length; i < l; ++i ) {
        if ( !hash.hasOwnProperty(arr[i]) ) { //it works with objects! in FF, at least
            hash[ arr[i] ] = true;
            result.push(arr[i]);
        }
    }
    return result;
}

/*This function controls the visibility of search results.*/
function toggleResults(tag) {
	alert('clicked: ' + tag);
$('.show').find("li:contains('" + tag + "')").parent().toggleClass('inactive');

}

