
// var ourRequest = $.ajax("/api/ ", {
// 	type: "POST",
// }).then(function(){
// 	console.log("you got somethings back")
// 	if (ourRequest.status >= 200 && ourRequest.status <400){
// 		var data = JSON.parse(ourRequest.responseText);
// 		createHTML(data);
// 	}else{
// 		console.log("We connected to the server, but it returned an error.");
// 	}
// })

// ourRequest.send();
var hbsContainer = document.getElementById("handleBarsHTML");

$.ajax("/api/ ", {
	type: "POST",
	dataType: 'json',
	success: function (result) {
		return result;
	},
	error: function (result) {
		console.log("We connected to the server, but it returned an error.");
		return result;
	}
}).then(
	function () {
		var ourData = JSON.parse(result);
		renderHTML(ourData);
	}
);

function renderHTML(data) {
	var rawTemplate = document.getElementById("handleBarsHTML").innerHTML;
	var compiledTemplate = Handlebars.compile(rawTemplate);
	var ourGeneratedHTML = compiledTemplate(data)

	var dataContainer = document.getElementById("data-container");
	dataContainer.innerHTML = ourGeneratedHTML;
}