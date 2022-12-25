const printName = function(town){ 
    console.log(printName.arguments)
    console.log(printName.caller)
    console.log(this.name+" "+" from "+town);
}

const namedUser={
    name:"Ankush Ojha"
}

console.log(printName.caller)
console.log(printName.length)
console.log(printName.name)

printName.call(namedUser,"Jawad");