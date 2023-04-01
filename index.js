// 1
function a(arr){
    let sum=0;
      for(let i =0; i<=arr.length;i++){
        if(arr[i]%2 ===0){
             sum+=arr[i]
        }
      }
    return sum
    }
    
// 2
    function findLargestNumber(arr) {
        let largestNum = arr[0];
        for (let i = 1; i < arr.length; i++) {
          if (arr[i] > larNumber) {
            largestNum = arr[i];
          }
        }
        return larNumber;
    }


// 3
// function isSubstring(string1, string2) {
//     return string1.includes(string2);
// }


    // 5
    // function filterUpperCaseStrings(arr) {
    //     return arr.filter((str) => str.toUpperCase() === str);
    // }
    // console.log(filterUpperCaseStrings(['aziz', 'UMIDA', 'Hello']));