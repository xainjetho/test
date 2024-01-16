

// let firstName = 'Sasha'

// function foo1() {
//     console.log('Hello', firstName)
// }

// foo1()


// let a = 5

// function changeNum() {
//     let a = 6
//     console.log(a);
// }

// changeNum()


function counter() {
    let a = 0;

    return function () {
        return a++
    }
}

const resCounter = counter()
console.log(resCounter());
console.log(resCounter());
console.log(resCounter());