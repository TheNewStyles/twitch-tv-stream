$(document).ready(function(){

//nav
$(".button-collapse").sideNav();

//twitch channels api
var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "comster404", "MedryBW"];
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
		   //console.log(data);
		 },
		 statusCode:{
		 	404: function(){		 		
		 		createChannelDiv(channel, channel, "Page Not Found", "https://www.sonyliv.com/images/6050d5f6.404_icon.png", "No Url");
		 	}
		 }
	});
}); //end channels.forEach()

//twitch streams api
var streamURL = "https://api.twitch.tv/kraken/streams/";
var streams = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "MedryBW"];

streams.forEach(function(streams) {
	$.ajax({
		 type: 'GET',
		 url: streamURL + streams,
		 headers: {
		   'Client-ID': 'd23sftl55foi7mgw5v9oq1pk8d7bro6'
		 },
		 success: function(data) {		  
		   // console.log(data.stream);
		   addOnlineStatus(data.stream, streams);
		 }		
	});
}); //end streams.forEach()

// create cards
function createChannelDiv(channel, name, status, img, url){

	if(status == "null" || status == null || status == " "){ 
		status = "No status available";
	}

    var $div = '<div id="' ;
    $div += channel ;
    $div += '" class="col s12 "><div class="card horizontal"><div class="card-image"><img src=';     
    $div += img ;
    $div += '></div><div class="card-stacked"><h5 class="header">' 
    $div += name;  
    $div += '</h5><div class="card-content"><p>';
    $div += status; 
    $div += '</p></div><div class="card-action"><a href="'; 
    $div += url; 
    $div += '" target="_blank">Go To Channel</a></div></div></div></div>';
    

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

function addOnlineStatus(stream, streamID){
	if(stream == null){		
		$('#' + streamID).addClass('isOffline');
	}else{
		$('#' + streamID).addClass('isOnline');
	}
}

//click on Online filter to view only online channels
$(".onlineFilter").click(function(){	
	$('.isOnline').show();
	$('#comster404').addClass('isOffline');
	$(".isOffline").toggle();
});

//click on Offline filter to view only offline channels
$(".offlineFilter").click(function(){	
	$('.isOffline').show();
	$('#comster404').addClass('isOffline');
	$(".isOnline").toggle();
});

//click on All to see all channels
$(".allFilter").click(function(){	
	$('.isOffline').show();
	$('#comster404').show();
	$(".isOnline").show();
});

}); //end $(document).ready()






