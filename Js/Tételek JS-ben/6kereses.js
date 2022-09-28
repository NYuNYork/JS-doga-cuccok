var x=new Array(-15,-73,49,94,52,44,84,11);
var tulajdonsag=49;
var sorszam=null;

function kereses(x, tulajdonsag, sorszam) {
	let i=0;

	while(i<=x.length && x[i]!=tulajdonsag) {
		i+=1;
	}

	if(i<=x.length) sorszam=i;
	else sorszam=-1;

	console.log("A keresett elem a "+x[sorszam]+" mely a tömb "+sorszam+". eleme");
}

kereses(x, tulajdonsag, sorszam);