var x=new Array(-15,-73,49,94,52,44,84,11);
var tulajdonsag=52;
var van=false;

function eldontes(x, tulajdonsag, van) {
	let i=0;
	
	while(i<=x.length && x[i]!=tulajdonsag) i+=1;

	if(i<=x.length) van=true;

	console.log("Van ilyen tulajdonságú elem: "+van);
}

eldontes(x, tulajdonsag, van);