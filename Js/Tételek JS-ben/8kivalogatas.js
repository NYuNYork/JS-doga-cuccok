var x=new Array(-15,21,49,32,52,1,84,11);
var y=new Array();
var tulajdonsag=49;
var szamol=0;

function kivalogatas(x, tulajdonsag, y) {

	for(let i=0;i<=x.length;i++) {
		if(x[i]==tulajdonsag) {
			y[szamol]=x[i];
			szamol+=1;
		}
	}

	console.log("A tömb elemei: ");

	for(let i=0;i<y.length;i++) {
		console.log("Y elem: "+y[i]);
	}
}

kivalogatas(x, tulajdonsag, y);