let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function sumEqual(array,target){
    let result = [];
    let left=0;
    let right=array.length-1;
    while(left<=right){
        if(num[left]+num[right]===target){
            let sArray = [num[left],num[right]];
            result.push(sArray);
            left++;
            right--;
        }else if(num[left]+num[right]<target){
            left++;
        }else if(num[left]+num[right]>target){
            right--;
        }
    }
    return result
}
console.log(sumEqual(num,4));