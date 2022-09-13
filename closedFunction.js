function closedFunction(){

    let counter = 0;

    let increment = () => {
        counter++
        console.log(counter)
    }

    return increment
}

//set up ("Instantiate") function
let myCountFunction = closedFunction()

//run it twice
myCountFunction()
myCountFunction()