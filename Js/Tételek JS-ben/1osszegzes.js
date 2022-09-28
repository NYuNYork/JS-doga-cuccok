var x=new Array(-15,-73,49,94,52,44,84,11);
var osszeg=0;

function osszegzes(x, osszeg) {
	for(let i=0;i<x.length;i++) osszeg+=x[i];

	console.log("A számok összege: "+osszeg);
}

osszegzes(x, osszeg);