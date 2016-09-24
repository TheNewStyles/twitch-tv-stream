var xhr = new XMLHttpRequest();

//twitch channels
var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
var URL = "https://api.twitch.tv/kraken/channels/";


for(var i=0; i<channels.length; i++){

	xhr.open('GET', URL + channels[i] , true);
	xhr.setRequestHeader('Client-ID', 'd23sftl55foi7mgw5v9oq1pk8d7bro6');

	// xhr.onload = function() {
	//   if (this.status >= 200 && this.status < 400) {
	    // Success!
	    var data = JSON.stringify(xhr.response);

	    var newDiv = document.createElement('div');
	    var newContent = document.createTextNode("Channel = " + channels[i]); 
	    newDiv.appendChild(newContent);
	    document.body.appendChild(newDiv);

	    console.log(data);

	//   } else {
	//     // We reached our target server, but it returned an error

	//   }
	// };

	// xhr.onerror = function() {
	//   // There was a connection error of some sort
	// };

}


xhr.send();
