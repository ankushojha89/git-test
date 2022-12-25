

const printName = function(town){ 
    console.log(this.firstName+" "+this.lastName+" from "+town);
}


Function.prototype.myBind = function(...args){

    let obj = this;
    let params = args.slice(1);
    return function(...args2){
        obj.apply(args[0],[...params,...args2]);
    }

}


const namedUser={
    firstName:"Ankush",
    lastName:"Ojha"
}

const newPrintName = printName.bind(namedUser,"Jawad");
newPrintName();
const myBindPrintName = printName.myBind(namedUser,"Jawad");
myBindPrintName();
/* 
    const newPrintName = printName.bind(namedUser);
    newPrintName("Jawad");
    const myBindPrintName = printName.myBind(namedUser);
    myBindPrintName("Jawad");
 */
