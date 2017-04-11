
var counter = 0;




$("td").click(function(){
	var cases = $(this).html();
	if (cases)// si case est rempli 
	{	
		return;
	}
	else{
		
		counter++;		
	
		if (counter % 2 === 0){
		$(this).html('<img src="https://cdn4.iconfinder.com/data/icons/geomicons/32/672366-x-128.png">');
		}
		else{
		$(this).html('<img src="http:cs3.tutsps.com/images/tutoboutton/10.png">');
		}
	}
	

	
});

	


