var x=new Array(-15,-73,49,94,52,44,84,11);
var max=0;

function maximum_kivalasztas(x, max) {
	max=x[0];
	index=null;
	
	for(let i=1;i<x.length;i++) {
		if(x[i]>max) {
			max=x[i];
			index=i;
		}
	}

	console.log("A legnagyobb szám: "+max+", ami a tömb "+index+". eleme.");
}

maximum_kivalasztas(x, max);