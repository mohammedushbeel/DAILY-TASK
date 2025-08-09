

console.log(Math.floor(Math.random()*(1+100)));

// ----------max--------
let nums=[23,45,67,12,89,3]

console.log(Math.max(...nums))

// ----min-------
console.log(Math.min(...nums));



// --------squre---------
function num(a){
 return console.log( Math.sqrt(a));
 
}
num(16)




// ---------add and remove-------

function ass(nu){
k=345

let a=k.toString().split("").map(Number)
let b=nu.slice(0,2)


console.log(b.concat(a));
}
ass([4,5,6,7,8])