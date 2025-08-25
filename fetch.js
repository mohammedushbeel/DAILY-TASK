
async function abc(){
try{
    let data= await fetch('https://jsonplaceholder.typicode.com/posts')
     if (!data.ok){
        throw new Error('network is not ok')
     }

     let test= await data.json()
     console.log(test.slice(0,5));
    }catch(error){
        console.error('fetche error');
        
    }
     

}

abc()