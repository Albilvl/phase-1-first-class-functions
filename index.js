const cake = () => {
    console.log(`i love cake`)
}

const milk = () => {
    console.log (`I love milk`)
}

const water =() => {
    console.log( `i prefer water`)
}

function receivesAFunction (milk){
    cake()
    milk()
}

function returnsANamedFunction(){
    return receivesAFunction
}

function returnsAnAnonymousFunction() {
    return function(){
        console.log(`ill drink whatever`)
    }
}