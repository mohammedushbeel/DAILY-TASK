const products=[
    { name:"A", price:200},{name:"B", price:100},
    {name:"C",price:150},{name:"D",price:200}
];

// let orderd=products.sort((a,b)=>a.price-b.price)
// console.log(orderd);


let total=products.reduce((acc,products)=> acc+products.price,0)
console.log(total);


// console.log(total);

// const item=[2,5,7,8,9,0,3]
 
// function find(){
// for(i=0;i<item.length;i++){
   
// }

// }