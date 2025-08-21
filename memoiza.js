function ush(n){
    let take={}
    return function(a){
        if(take[a] !== undefined){

            console.log("fetching from cache");
            return take[a];
            
        }
        console.log("calculating");
        let result =n(a);
        take[a]=result
        return result
        
    }
}

const sqrt=ush(function(a){
    return a*a
})

console.log(sqrt(5)); 
console.log(sqrt(5)); 
console.log(sqrt(6)); 
console.log(sqrt(6)); 