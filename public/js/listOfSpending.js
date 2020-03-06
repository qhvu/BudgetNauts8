// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('a').click(function(e) {
    console.log("hi");
	});
//	$('#remove').click(function(e){
	//	$.get("/data",removeRow);
//	});
	$('.btn').click(function(e){
		//alert('clicked');
		e.preventDefault();
		console.log('button working');
		$(this).closest('tr').remove();
		console.log('clicked');
	});
	$('#editBudget').click(function(e){
		e.preventDefault();
		var r= $('<button type = "button" class = "btn" id="remove">Remove</button>');
	$("#removeButton").html(r);
	});
 $('.btn').toggle();
	$('#hideshow').on('click', function(event) {
	   $('.btn').toggle('slow');
	    });

	$.get('/data', sortDate);
}

function removeRow(result){
	console.log(result);
	var purchases = result['purchase'];
	console.log(purchases);
	purchases[purchases]
	purchases.splice()
}

function custom_sort(a,b){
	console.log("works");
	return new Date(a.lastUpdated).getTime() - new Date(b.lastUpdated).getTime();
}

function sortDate(result){
	var purchases = result['purchase'];
	console.log(purchases);
}
