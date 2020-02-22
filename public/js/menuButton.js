
//pop up modal: home
document.getElementById('button').addEventListener('click', function() {
  document.querySelector('.bg-modal').style.display = 'flex';
});

document.querySelector('.close').addEventListener('click', function() {
  document.querySelector('.bg-modal').style.display = 'none';
});


//pop up modal: list of spending
/*document.getElementById('LOFbutton').addEventListener('click', function() {
  document.querySelector('.bg-modal').style.display = 'flex';
});
*/



//remove expense item (not working)

//'use strict';

/*
$(document).ready(function() {
	console.log("Testing");
	$('.btn').click(testing);
})

function testing() {
	console.log("Successful");
}

/*

$(document).ready(function() {
	$('.purchases.btn').on('click', function(e) {
		console.log("REMOVE");
		e.preventDefault();
		$(this).closest('tr').remove();	
	});
})
*/

$('#table1').on("click", "td", function(){
	//alert('clicked');
	$(this).closest('tr').remove();
	console.log('clicked');
});

//nav bar animation underline
$('.nav-link').on('click', function(e) {
	//e.preventDefault();
  $('.active-link').removeClass('active-link');
  $(this).addClass('active-link');
  console.log("REMOVE");
});



/*var index, table = document.getElementById('table1');
for (var i = 1; i < table.rows.length; i++){
	table.rows[i].cells[5].onclick = function(){
		var c = confirm("Delete Purchase?");
		if(c == true){
			index = this.parentElement.rowIndex;
			table.deleteRow(index);
		}
	};
}*/




