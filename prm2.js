function step1(){
    
    return new Promise((resolve,reject)=>{
        console.log("step1 started")
        setTimeout(()=>{
            console.log("step1 completed")
            resolve()
        },4000)
    })
}
function step2(){
    return  new Promise((resolve, reject) => {
        console.log("step2 strated");
        setTimeout(()=>{
            console.log("step2 completed");
            resolve() 
        },3000)
        
    })
}
function step3(){
    return new Promise((resolve, reject) => {
        console.log("step3 strated");
        setTimeout(()=>{
            console.log("step3 completed");
            resolve() 
        },2000)
        
    })
}
function step4(){
    return new Promise((resolve, reject) => {
        console.log("step4 strated");
        setTimeout(()=>{
            console.log("step4 completed");
            resolve() 
        },1500)
        
    })
}

step1()
.then(step2)
.then(step3)
.then(step4)
.then(()=> console.log("promise successeful"))
.catch(()=> console.log("promise failed"));