let prm= new Promise(
    function pageBio(resolve,reject){
        console.log("start processing")
        setTimeout(()=>{
            console.log("processing completed")
            resolve()
        },3000)
    }
)

prm
.then(()=>{
    console.log("verifyed")
})
.catch(()=>{
    console.log("verify faild");
    
})

setTimeout(()=>{
    console.log("successful");
    
},3000)