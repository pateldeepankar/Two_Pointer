let arr = [3, 2, 3, 5, 3, 7, 8, 3]
function rmvAllOccurrence(array,val){
    let left=0;
    let right=array.length-1;
    while(left<right){
        if(array[left]===val){
            if(array[right]===val){
                right--;
            }else{
                let temp = array[right];
                array[right]=array[left];
                array[left]= temp;
                right--;
                left++;
            }
        }else{
            left++;
        }
    }
    return array 
}
console.log(rmvAllOccurrence(arr,3));