let X = [56, 23, 5, 77, 200];

// add meg a páratlan számok összegét
// let SUM = 0;

// for(let i = 0; i < X.length; i++)
// {
// if(X[i%2 != 0])
//     {
//         SUM = SUM+X[i];
//     }
// } 
// console.log("páatlan számok összege",SUM)

// add meg hányadik a legkisebb szám
// let MIN = 0;
// for(i=1; i<X.length; i++)
//     {
//     if(X[i]<X[MIN]){
//         MIN = X[i];
//     }
// }
// console.log("A Minimum: ",MIN);

// add meg melyik a legnagyobb szám


// let MAX = X[0];

// for(i=1; i<X.length; i++){
//     if(X[i]>MAX){
//         MAX = X[i];
//     }
// }
// console.log("A MAXimum: ",MAX);

//van e párosszám
for(let i = 0; i < X.length; i++)
{
    if(X[i%2 == 0])
        {
        console.log("van");
        }
}    