let mark =[{"a":1,"b":2},{"c":3,"d":4},{"e":5,"f":6}]



let [abc,...rest]=mark

console.log(abc);
console.log(rest);

let [,{c,d}]=mark

console.log({c});
console.log({d});


 

