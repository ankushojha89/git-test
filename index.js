const printName = function(town){  console.log(this.firstName+" "+this.lastName+" from "+town);}
const namedUser={
    firstName:"Ankush",
    lastName:"Ojha"
}
printName(); //undefined undefined from undefined
printName.call(namedUser,"Jawad");//Ankush Ojha from Jawad
printName.apply(namedUser,["Jawad"]);//Ankush Ojha from Jawad

const newPrintName = printName.bind(namedUser);//Copy

newPrintName("Jawad"); //Ankush Ojha from Jawad
newPrintName("Indore");//Ankush Ojha from Indore

console.log(printName.toString());
    //function(town){ console.log(this.firstName+" "+this.lastName+" from "+town);}
console.log(newPrintName.toString()); //function () { [native code] }

/* 
The call() method calls the function with a given this value and arguments provided individually.

call(thisArg)
call(thisArg, arg1)
call(thisArg, arg1,..., argN)

Parameters
    thisArg
        The value to use as this when calling func. If the function is not in strict mode,
        null and undefined will be replaced with the global object, and primitive values 
        will be converted to objects.

    arg1, …, argN Optional
        Arguments for the function.

Return value
    The result of calling the function with the specified this value and arguments.

call() is almost equivalent to a normal function call, except that this is passed as 
a normal parameter instead of as the value that the function was accessed on.
 */

/* 
The apply() method calls the specified function with a given this value, and arguments
provided as an array (or an array-like object).

Syntax
    apply(thisArg)
    apply(thisArg, argsArray)

    This function is almost identical to call(), except that call() accepts an argument list,
    while apply() accepts a single array of arguments — 
    for example, func.apply(this, ['eat', 'bananas']) vs. func.call(this, 'eat', 'bananas').
 */

/* 
    The bind() method creates a new function that, when called, 
    has its this keyword set to the provided value, with a given 
    sequence of arguments preceding any provided when the new function is called.

    bind(thisArg)
    bind(thisArg, arg1)
    bind(thisArg, arg1, arg2)
    bind(thisArg, arg1, arg2,  …,  argN)

    Return value
        A copy of the given function with the specified this value, and initial arguments (if provided).
*/

/* 
    
    The toString() method returns a string representing the source code of the specified Function.

*/