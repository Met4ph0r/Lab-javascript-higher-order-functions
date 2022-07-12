// Function #1: Array Slice

const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
let modifiedFood = foods.slice(1, 4)

console.log(modifiedFood)






// Function #2: Array Splice

foods.splice(2, 0, "noodles",  "icecream")

console.log(foods)





// Function #3: Filter

const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];

res = []

let isEven = arr => {
    arr.filter(element => {
        if(!(element%2))
            res.push(element)
        }
    )
}

isEven(numberArray)

console.log(res)

// isPrime()

res = []

let isPrime = arr => {
    res = arr.filter(element => {
        flag = true
        for(let i = 2; i <= element/2; i++){
            if(element%i == 0){
                flag = false
                break
            }
        }
        if(flag)
            return element
    }
    )
}

isPrime(numberArray)

console.log(res)





// Function #4: Reject

res = []

let nonPrime = arr => {
    res = arr.filter(element => {
        flag = true
        for(let i = 2; i <= element/2; i++){
            if(element%i == 0){
                flag = false
                break
            }
        }
        if(!flag)
            return element
    }
    )
}

nonPrime(numberArray)

console.log(res)




// Function #5: Lambda

res = []

let isEven1 = arr => {
    arr.filter(element => {
        if(!(element%2))
            res.push(element)
        }
    )
}

isEven1(numberArray)

console.log(res)


// Function #6: Map

const myArray = [11, 34, 20, 5, 53, 16];

res = []
let findSquareOfNumbers = arr => {
    return arr.map(element => (element*element))
}

res = findSquareOfNumbers(myArray)
console.log(res)




// Function #7: Reduce

myArray1 = [2, 3, 5, 10]

let multiply = arr => arr.reduce(
    (mult, element) => mult*element
    )

result = multiply(myArray1)
console.log(result)