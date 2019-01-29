// Instructions:
// Find the median of two sorted arrays.

// My Answer:

function medianOfTwoArrays(arr1, arr2) {

    if (arr1.length % 2 !== 0 && arr1.length % 2 !== 0) {
        let median1 = Math.round(arr1.length / 2)
        let median2 = Math.round(arr2.length / 2)

        console.log("ODD", (arr1[median1 - 1] + arr2[median2 - 1]) / 2)
    }

    if (arr1.length % 2 === 0 && arr1.length % 2 === 0) {
        let median1 = Math.round(arr1.length / 2)
        let median2 = Math.round(arr2.length / 2)

        console.log("EVEN", (arr1[median1] + arr1[median1 - 1] + arr2[median2] + arr2[median2 - 1]) / 4)
    }

}

let arr1 = [2, 4, 6, 8];
let arr2 = [1, 3, 5, 7];
medianOfTwoArrays(arr1, arr2)