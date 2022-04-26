function receivesAFunction(spy){
    return spy()
}

function returnsANamedFunction(){
   return receivesAFunction
}

function returnsAnAnonymousFunction(){
    return () => {
    }
}