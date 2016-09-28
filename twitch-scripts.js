$(document).ready(function(){

//nav
$(".button-collapse").sideNav();

//twitch channels
var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "comster404"];
var URL = "https://api.twitch.tv/kraken/channels/";

channels.forEach(function(channel) {
	$.ajax({
		 type: 'GET',
		 url: URL + channel,
		 headers: {
		   'Client-ID': 'd23sftl55foi7mgw5v9oq1pk8d7bro6'
		 },
		 success: function(data) {
		   createChannelDiv(channel, data.display_name, data.status, data.logo, data.url);		   		   
		   console.log(data);
		 },
		 statusCode:{
		 	404: function(){
		 		console.log('404');
		 		createChannelDiv(channel, channel, "Page Not Found", "https://www.sonyliv.com/images/6050d5f6.404_icon.png", "No Url");
		 	}
		 }
	});
}); //end channels.forEach()

// create cards
function createChannelDiv(channel, name, status, img, url){

    var $div = '<div id="' + channel + '" class="col s12 "><div class="card horizontal"><div class="card-image"><img src=' + img + '></div><div class="card-stacked"><h5 class="header">' + name + '</h5><div class="card-content"><p>' + status + '</p></div><div class="card-action"><a href="' + url + '" target="_blank">Go To Channel</a></div></div></div></div>';

    $('#twitch-display').append($div);
}


// search bar 
var $search = $("#search");

// clear search bar on X click
$("#close").click(function(){
	$search.val("");
	$("#twitch-display").children().show();
});

// search channelID child text
function search(channelID){
	if($("#" +  channelID).children().text().toLowerCase().includes($search.val().toLowerCase()) || $search.val() === " "){
		$("#" +  channelID).show();	
	}else{
		$("#" +  channelID).hide();
	}
}

// on keyup in search bar 
$search.keyup(function(){
	for(var i=0; i<channels.length; i++){

	search(channels[i]);

	}
});


}); //end $(document).ready()






