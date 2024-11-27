const receivesAFunction = (callback) => {
    callback();
};

function returnsANamedFunction() {
    return function named() {
        console.log ("I am the named function.")
    }
}


function returnsAnAnonymousFunction () {
    return function () {
        console.log("I am the anonymous function.")
    }
}