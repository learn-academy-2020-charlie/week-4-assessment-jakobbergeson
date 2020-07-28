// ASSESSMENT 4: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in an array. Each time the function is run, remove the first item from the array and shuffle the remaining content. If the array is empty, return "The array is empty."

var collections = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example1 (can be a different order): ["yellow", "blue", "pink", "green"]
// Expected output example2 (can be a different order): ["blue", "green", "pink"]
// Expected output example3 (can be a different order): ["pink", "green"]

let shuffleArray = (array) => {
// shift to remove first item of array
        array.shift()
// loop through the rest of the array
   for(let index = array.length; index > 0 ; index--) {
    index --
// randomly generate whole number between 0 and length of array
       let randomize = Math.floor(Math.random() * index)
// temporarily hold current value
       let tempNum = array[index]
// reassign current element to the randomly generated index 
       array[index] = array[randomize]
        array[randomize] = tempNum
    
    return array
   }
// when index is empty retirn "The array is empty"
   if (array.length == 0) {
    return "The array is empty."
}
}
console.log(shuffleArray(collections))
console.log(shuffleArray(collections))
console.log(shuffleArray(collections))
console.log(shuffleArray(collections))
console.log(shuffleArray(collections))




// --------------------2) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

var cubeAndSum1 = [2, 3, 4]
// Expected output: 99
var cubeAndSum2 = [0, 5, 10]
// Expected output: 1125
 const cubenum = (array) => { 
     let newArray = []
     for (let i = 0; i < array.length; i++) {
          newArray.push(Math.pow(array[i],3))
        }
        let addedNum = newArray.reduce(function(a, b){ return a + b })
        return addedNum
    }

console.log(cubenum(cubeAndSum1))

console.log(cubenum(cubeAndSum2))




// --------------------3) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

var nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
var nums2 = [109, 5, 9, -59, 8, 24]
// Expected output: [-59, 109]
const smallBig = (array) => {
    let finalArray = []
    let small = Math.min.apply(Math,array)
    let big = Math.max.apply(Math,array)
    finalArray.push(small,big)
    return finalArray
    //console.log(finalArray.push(small,big))
}
console.log(smallBig(nums1))
console.log(smallBig(nums2))






// --------------------4) Create a function that takes in a string and returns a string with every other letter capitalized.

var testString1 = "albatross"
// Expected output: "aLbAtRoSs"
var testString2 = "jabberwocky"
// Expected output: "jAbBeRwOcKy"
const capitolize = (string) => {
// In the case we were given a string of multiple words we would first put each word in its own array
    let splitStr = string.split(" ")
  let newArr = []
// Then create an array fro word
    for (var i = 0; i < splitStr.length; i++) {
    var letters = splitStr[i].split("")
// Find the value of each positive index
    for (var i = 0; i < letters.length; i++) {
      if (i % 2 == 0) {
// Capitolise the value
        letters[i] = letters[i].toUpperCase()
// Else lower case the values of odd indexes
      } else {
        letters[i] = letters[i].toLowerCase()
      }
    }
    newArr.push(letters.join(""))
  }
  return newArr.join(" ")
}
console.log(capitolize(testString1))
console.log(capitolize(testString2))





// --------------------5) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator.

var arr1 = [3, 7, 10, 5, 4, 3, 3]
var arr2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]

//The ... syntax allows the function to take in multiple arguments and combine them into a single array called arrays
const mergeArrays = (...arrays) => {
    let jointArray = []
//The forEach loop takes the nested arrays in arrays and combines them into one array called jointArray
    arrays.forEach(array => {
        jointArray = [...jointArray, ...array]
    })
//uniqueArray uses filter to check if index of the current value matches the index of the current iteration
    let uniqueArray = jointArray.filter((value,index) => jointArray.indexOf(value) === index)
    return uniqueArray
}
console.log(mergeArrays(arr1, arr2))