const array = [2,3,50,51,64,89];

function linearSearch(n){
    let leftInex = 0;
    let rightIndex = array.length -1;
    while(leftInex<=rightIndex){
        let mid = Math.floor((leftInex+rightIndex) /2)
        if(n===array[mid]){
            return mid
        }
        if(n>array[mid]){
            leftInex = mid + 1
        }
        else{
            rightIndex = mid -1
        }
    }
 
  return -1
}
console.log(linearSearch(51));


