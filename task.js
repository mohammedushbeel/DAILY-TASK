 const orders=[200, 450, 130, 50, 1000, 20]
//  -----------------orderd---------
const orderd=orders.sort((a,b)=>a-b) 
console.log(orderd);
// ---------use for each--------
orderd.forEach(n=>console.log(n))
// ----------filter---------
const filter=orderd.filter(n=>n>100)
console.log(filter);
// -------dicount-----
const discount=orderd.map(n=>n-10)
console.log(discount);
// ----------reduce---------
const total=discount.reduce((acc,value)=>acc+value)
console.log(total);








