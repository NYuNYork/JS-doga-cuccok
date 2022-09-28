var x=new Array(-15,-73,49,94,52,44,84,11);
var min=0;

function minimum_kivalasztas(x, min) {
	min=x[0];
	index=null;
	
	for(let i=1;i<x.length;i++) {
		if(x[i]<min) {
			min=x[i];
			index=i;
		}
	}

	console.log("A legkisebb szám: "+min+", ami a tömb "+index+". eleme.");
}

minimum_kivalasztas(x, min);