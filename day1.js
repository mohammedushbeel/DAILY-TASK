function calc(a,call){
    let result=[]
    for(let i=0;i<a.length;i++){
    result.push(call(a[i]))
}
    return result
}
function dob(as){
    return as*as
}
let out=calc([1,2,3,4],dob)

console.log(out)