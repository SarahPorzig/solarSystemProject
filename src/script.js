var $ = require('jquery');

$('#search').keyup(function() {
	var searchField = $('#search').val();
	var myExp = new RegExp(searchField, "i");
	$.getJSON('data.json', function(data) {
		var output = '<ul class="searchresults">';
		$.each(data, function(index, val) {
			if (val.name.search(myExp) != -1){
				output += '<li>';
				output += '<h2>' + val.name + '</h2>';
				output += '<h4>' + val.position + '</h4>';
				output += '<img src="images/' + val.name + '.jpg" alt="' + val.name + '" />';
				output += '<p>' + val.bio + '</p>';
				output += '</li>';
			}
		});
		output += '</ul>';
		$('#update').html(output);
	}); //getJSON
})


$('#searchDetailed').keyup(function() {
	var searchField = $('#searchDetailed').val();
	var myExp = new RegExp(searchField, "i");
	$.getJSON('data.json', function(data) {
		var output = '<ul class="searchresults">';
		$.each(data, function(index, val) {
			if ((val.name.search(myExp) != -1) || (val.bio.search(myExp) != -1) || (val.position.search(myExp) != -1)){
				output += '<li>';
				output += '<h2>' + val.name + '</h2>';
				output += '<h4>' + val.position + '</h4>';
				output += '<img src="images/' + val.name + '.jpg" alt="' + val.name + '" />';
				output += '<p>' + val.bio + '</p>';
				output += '</li>';
			}
		});
		output += '</ul>';
		$('#update').html(output);
	}); //getJSON
})
