// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("test");
	$('a').click(function(e) {
		console.log("hi");
	});
 $.get('/data', amountLeft);
 $("#progress-bar").css("width", "50%");
 $("#progress-bar").attr("aria-valuenow", "50%");

 }

function amountLeft(result){
	console.log(result);
	var sum = 0;
	var price =result['purchase'];
	var i;
	for(i = 0; i < price.length; i++){
		sum += parseInt(price[i].price);
	}
	var budget = result['budget'];
	var percentage = result["savings"]/100;

	var amountLeft = budget - (sum*percentage) - sum;
	console.log(sum);
	console.log(budget);
	console.log(percentage);
	console.log(amountLeft);
	if(amountLeft < 0){
		$('#borderLeftover').css('color', 'red');
	}
	$('#borderLeftover').html('$'+ amountLeft.toFixed(2));
	}

	// $('#colorBtn').click(randomizeColors);
