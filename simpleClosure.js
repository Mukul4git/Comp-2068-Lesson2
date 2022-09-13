//Create s nest js function so we can examine var scope
function parent(){
    let message = 'Hello World'

    function child(){
        console.log(message)
    }

    child()
}

parent()
