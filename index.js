function receivesAFunction (callback) {
    callback("item")
}

function returnsANamedFunction () {
    function sushi() {}
    return (sushi);
    }

function returnsAnAnonymousFunction () {
    (function(){});
    return (function(){});
}
