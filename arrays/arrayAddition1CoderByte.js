/*
Array Addition I
Have the function ArrayAdditionI(arr) take the array of numbers stored in arr and return the string true if any combination of numbers in the array (excluding the largest number) can be added up to equal the largest number in the array, otherwise return the string false. For example: if arr contains [4, 6, 23, 10, 1, 3] the output should return true because 4 + 6 + 10 + 3 = 23. The array will not be empty, will not contain all the same elements, and may contain negative numbers.
Examples
Input: [5,7,16,1,2]
Output: false
Input: [3,5,-1,8,12]
Output: true 
 */

function ArrayAdditionI(arr) { 

    // code goes here 
    const max = arr.reduce((a,b)  => Math.max(a,b), -Infinity);
    let newArray = [];
    let sumArray = 0;
  
  
    for(let start = 0; start<arr.length; start++){
      if(arr[start] !== max){
        newArray.push(arr[start]);
      }
    }
  
    console.log("Maximun is :" + max)
  
    newArray.forEach((el) => sumArray += el); 
    console.log("Sum of the array " + sumArray);
    
    if(sumArray == max){
        return true;
      }else if(sumArray > max){
        return true;
      }
  
    return false; 
  
  }
     
  // keep this function call here 
  console.log(ArrayAdditionI([5,7,16,1,2]));
  console.log(ArrayAdditionI([3,5,-1,8,12]));