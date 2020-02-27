// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('#editbutton').click(function(e){
		e.preventDefault();
		$.get("/edit")
	});
// 	$('#projectedSavings').html(function(e){
// 		$.get('/data',findSavings);
// 	})
// };
//
// function findSavings(result){
// 		console.log(result);
// 		var budget = result['budget'];
// 		var percentage = result['savings']/100;
// 		var total = (budget * percentage)
// 		console.log(budget);
// 		console.log(percentage);
// 		console.log(total);
// 		$('#projectedSavings').html(total.toFixed(2));
// };
};
