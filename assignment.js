// Write an algorithm that performs binary search on a given array.
// the function will also track, and print out the number of steps required to reach the target
// the index of the item 

let testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 15, 16, 19, 24, 26, 27, 29]


const binarySearch = function(arr, target, index) {
    let middleIndex = 0;
    // let index = 0;
    let newArr = arr;


    middleIndex = Math.floor((newArr.length) / 2);

    // if(middleIndex === 0){
    //     return 0;
    // }

    if (target > newArr[middleIndex]) {
        // let firstIndex = middleIndex;
        newArr = newArr.slice(middleIndex);
        index += middleIndex;
    } else if (target < newArr[middleIndex]) {
        newArr = newArr.slice(0, middleIndex);
        // let lastIndex = middleIndex

    } else {
        index += middleIndex;
        return index;
        // return middleIndex;
    } 
    return binarySearch(newArr, target, index);
};


console.log(binarySearch(testArray, 19, 0));
console.log(binarySearch(testArray, 12, 0));
console.log(binarySearch(testArray, 26, 0));