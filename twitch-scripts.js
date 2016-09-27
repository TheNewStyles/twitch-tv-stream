$(document).ready(function(){

$(".button-collapse").sideNav();

function createChannelDiv(name, status, img, url){

    var $div = '<div class="col s12 "><div class="card horizontal"><div class="card-image"><img src=' + img + '></div><div class="card-stacked"><h5 class="header">' + name + '</h5><div class="card-content"><p>' + status + '</p></div><div class="card-action"><a href="' + url + '" target="_blank">Go To Channel</a></div></div></div></div>';

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
		   createChannelDiv(data.display_name, data.status, data.logo, data.url);		   
		   console.log(data);
		 }
	});
}); //end channels.forEach()


}); //end $(document).ready()






