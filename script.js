console.log("ahoj som pripojeny k indexu, ha ha");
class moja_trieda 
{
    vek = 5;
    constructor(num)
    {
        this.vek = num;
    }
}

var trieda = new moja_trieda("5");
let moja2_trieda = new moja_trieda("100")
console.log(trieda.vek);
console.log(moja2_trieda.vek);
