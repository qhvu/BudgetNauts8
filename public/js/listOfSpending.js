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
	$('#remove').click(function(e){
		$.get("/data",removeRow);
	});
}

function removeRow(result){
	console.log(result);
	var purchases = result['purchase'];
	console.log(purchases);
	purchases[purchases]
	purchases.splice()
}
