$('.grab-button').click(function (e) {
	e.preventDefault();
var flickerURL = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
var userInput = $('.main-input').val();
var flickerReturn = {
	tags: userInput,
	format: "json"
};
$('.main-input').prop('disabled', true);
$('.grab-button').attr('disabled', true).text("Grabbing...");
function resultsDisplay (data) {
	$.each(data.items, function(i, photo) {
		$('.result-list').append('<li><a href="'+ photo.link + '" class="result-link" target="_blank">' + '<img src="' + photo.media.m +'"/>' + '</a></li>');
		console.log(photo);
	});//end each loop
	$('.main-input').prop('disabled', false);
	$('.grab-button').attr('disabled', false).text("Grab");
}//end resultsDisplay
if(userInput === "") {
	alert("Please, enter a search to view most recent tagged photos");
	return false;
}/*end alert*/
$(".main-input").val("");
$(".result-list").empty();
$(".instructions").hide();
$(".instructions-2").show();
$.getJSON(flickerURL, flickerReturn, resultsDisplay);
});//end submit event

$('.reset-button').click(function (e) {
	e.preventDefault();
	$(".result-list").empty();
	$(".instructions").show();
	$(".instructions-2").hide();
});