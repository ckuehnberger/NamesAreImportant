var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];


window.onload = function(){
		
		
		var almosthuman = new Show("Almost Human", "November", 4, 2013, "Monday", "8:00pm", "FOX");
		almosthuman.insert();
}


function Show(title, month, day, year, airDay, airTime, network, genre) {

	var date = new Date("\"" + month + " " + day + ", " + year + "\"");
	

	var showObject = {
		"title" : title,
		"premiere" : months[date.getMonth()] + " " + date.getDate(),
		"airDay" : airDay,
		"airTime" : airTime,
		"network" : network,
	}

	this.insert = function () {

		var showHTML = "<ul class='showbox'>"

	for (var cupcake in showObject) {
  	if (showObject.hasOwnProperty(cupcake)) {
  		showHTML += "<li>" + showObject[cupcake] + "</li>";
		}
	}
	showHTML +="</ul>";
	alert(showHTML);
	}
}





