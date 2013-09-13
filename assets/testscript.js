function Show(title, month, day, year, airDay, airTime, network, genre1, genre2) {
    this.title = title;
    this.month = month;
    this.day = day;
    this.year = year;
    this.airDay = airDay;
    this.airTime = airTime;
    this.network = network;
    this.insert = function () {

        //variables for the 'showsection' section and the ul
        var getShowSection = document.getElementById("showsection");
        var ulShowBox = document.createElement("ul");

        // variables for the various list elements to be created
        var liTitle = document.createElement("li");
        var liPremiere = document.createElement("li");
        var liAirDay = document.createElement("li");
        var liAirTime = document.createElement("li");
        var liNetwork = document.createElement("li");
        var liGenre = document.createElement("li");

        //assigning classes to the corresponding list elements
        liTitle.className = "title";
        liPremiere.className = "premiere";
        liAirDay.className = "airDay";
        liAirTime.className = "airTime";
        liNetwork.className = "network";
        liGenre.className = "genre";


        // fills list items with corresponding properties

        liTitle.innerHTML = this.title;
        liPremiere.innerHTML = (this.month + " " + this.day + ", " + this.year);
        liAirDay.innerHTML = this.airDay;
        liAirTime.innerHTML = this.airTime;
        liNetwork.innerHTML = this.network;
        liGenre.innerHTML = (this.genre1 + ", " + this.genre2);

        //appends the list items to the list
        getShowSection.appendChild(ulShowBox);
        ulShowBox.appendChild(liTitle);
        ulShowBox.appendChild(liPremiere);
        ulShowBox.appendChild(liAirDay);
        ulShowBox.appendChild(liAirTime);
        ulShowBox.appendChild(liNetwork);
    };
}

//stuff to test if the functions actually works
var almosthuman = new Show("Almost Human", "November", 4, 2013, "Monday", "8:00pm", "FOX");

almosthuman.insert();
almosthuman.insert();
//end of stuff to test if the function actually works