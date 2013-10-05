window.onload = function(){
	$("#tag-selector").on('click', 'li', function() {
		toggleTagState($(this));
		siftShows($(this).text(), $(this).hasClass('active-search'));
	});

}

function populateTags(tagsList, category) {
	console.log("Pre-unique: " +  tagsList.length)
	tagsList = unique(tagsList);
	console.log("Post-unique: " +  tagsList.length)

	$.each(tagsList, function() {
		console.log(this.toString());
		$( "<li>" + this.toString() + "</li>" ).appendTo( category );
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

/*This function controls the state of the search tags.*/
function toggleTagState(tag) {
	tag.toggleClass("active-search");
}

function siftShows(tag, tagIsActive) {
	if (tagIsActive) /*Check visible, hide everything that doesn't match tag*/ {
		$(".show:not(.inactive)").not(":has(li:contains('" + tag + "'))").toggleClass('inactive');
	} else { /*Check hidden, reveal everything that matches selected*/
		var inactive = $('ul.inactive');
		$("li.active-search").each( function() {
			inactive = inactive.filter(":has(li:contains('" + $(this).text() + "'))");
		});
		inactive.each( function () {
			$(this).toggleClass('inactive');
		});

		};
}


