var x=new Array(-15,-73,49,94,52,44,84,11);
var tulajdonsag=84;
var sorszam=null;

function kivalasztas(x, tulajdonsag, sorszam) {
	let i=0;

	while(x[i]!=tulajdonsag) {
		i+=1;
	}

	sorszam=i;

	console.log("A keresett elem a "+x[sorszam]+" mely a tömb "+sorszam+". eleme");
}

kivalasztas(x, tulajdonsag, sorszam);