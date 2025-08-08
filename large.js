function findLargest(arr){
    let max=arr[0]
    for(i=1;i<arr.length;i++){
        if(arr[i]>max){
           max=arr[i]
        }
    }return max
}
console.log(findLargest([10,50,25,90,7,45,95,]));