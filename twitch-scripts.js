// //twitch channels
// var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
// var URL = "https://api.twitch.tv/kraken/channels/";

// for(var i=0; i<channels.length-1; i++){

// 	var xhr = new XMLHttpRequest();
// 	xhr.open('GET', URL + channels[i] , true);
// 	xhr.setRequestHeader('Client-ID', 'd23sftl55foi7mgw5v9oq1pk8d7bro6');
// 	createChannelDiv(channels[i]);

// 	xhr.onload = function() {
// 	  if (this.status >= 200 && this.status < 400) {
// 	    //Success!
// 	    var data = JSON.parse(this.response);
	   
// 	    console.log(data);

// 	  } else {
// 	    // We reached our target server, but it returned an error

// 	  }
// 	};

// 	xhr.onerror = function() {
// 	  // There was a connection error of some sort
// 	};

// 	xhr.send();
// }
$(document).ready(function(){

function createChannelDiv(name, status, img){
    // var $div = $('<div>', {'class': 'col s12 m7'});
    // $div.html("Channel = " + name + " " + status);
    // $div.append('<div>', {'class': 'card horizontal'});
    var $div =  '<div class="col s12 "><div class="card horizontal"><div class="card-image"><img src=' + img + '></div><div class="card-stacked"><h5 class="header">' + name + '</h5><div class="card-content"><p>' + status + '</p></div><div class="card-action"><a href="#">This is a link</a></div></div></div></div>';

    $('#twitch-display').append($div);
}


//twitch channels
var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
var URL = "https://api.twitch.tv/kraken/channels/";

channels.forEach(function(channel) {
	$.ajax({
		 type: 'GET',
		 url: URL + channel,
		 headers: {
		   'Client-ID': 'd23sftl55foi7mgw5v9oq1pk8d7bro6'
		 },
		 success: function(data) {
		   createChannelDiv(data.display_name, data.status, data.logo);		   
		   console.log(data);
		 }
	});
}); //end channels.forEach()


}); //end $(document).ready()






