function parent(){
    let message = 'Hello World'

    function child(){
        console.log(message)
    }

    return child //omit brackets so this doesnt execute yet.

}

//Instantiate
let childFunction = parent()

//run
childFunction()