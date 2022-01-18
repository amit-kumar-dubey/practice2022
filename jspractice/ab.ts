export {}
class DS{
    x: any;
    constructor(x:any){
        this.x = x;
    }
    static addDSTest(f,b){
    return f.x + b.x +b.y;
    }
}
 
class Test extends DS {
    y: any;
    constructor(x,y){   
        super(x);
        this.y=y;
    }
}
let f = new DS(5);
let b = new Test(5,5);
console.log(Test.addDSTest(f,b));