
//Coding Exercise (Arrays):Write a function called mergeArrays that takes two arrays as input and merges them into a single array, alternating elements from each array. For example, if arr1 = [1, 3, 5] and arr2 = [2, 4, 6], the output should be [1, 2, 3, 4, 5, 6].
function mergeArrays (arr1, arr2)  {
        const mergedArray = [];
        const maxLength = Math.max (arr1.length, arr2.length);

        for (let i=0; i < maxLength; i++) {

                if (i < arr1.length)  {
                        mergedArray.push(arr1[i]);
                }
        

        if (i < arr2.length) {
                mergedArray.push(arr2[i]);
        }
}

return mergedArray;

}

const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];

console.log(mergeArrays(arr1, arr2)); 


//Coding Exercise (Objects):Create a function called countProperties that takes an object as input and returns the number of properties in that object.

function countProperties(obj) {
        let count = 0;

        for (let prop in obj) {
                if (obj.hasOwnProperty(prop)) {
                        count++;
                }
        }
        return count;
}

const person = {
        firstName: 'Omphile',
        lastName: 'Morwane',
        age: 30,
        email: 'omphilemorwane@gmail.com'
};

console.log(countProperties(person));
