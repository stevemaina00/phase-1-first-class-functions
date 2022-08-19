function receivesAFunction(name){
    name();
}
function returnsANamedFunction(){
    return function fn(){
        
    }
}
returnsANamedFunction("Hello")
function returnsAnAnonymousFunction(){
    return function (){

    }
}
returnsAnAnonymousFunction("Hello there")