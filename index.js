class Polygon{
    constructor(sides){
        this.sides = sides
    }
    get countSides (){
        return this.sides.length;
    }
    get perimeter(){
        return this.sides.reduce((a,b) => a + b)
    }
}
class Triangle extends Polygon{

    get isValid(){
       let [a,b,c] = this.sides

            if( a+b>c && a+c>b && b+c>a){
                return true
            }
            else{return false}       
    }
}
class Square extends Polygon{
    get isValid(){
        let [a,b,c,d] = this.sides;

       return a==b && b==c && c==d ? true:false
    }
    get area(){
        let [a,b,c,d] = this.sides
        return a*b
    }
    
}



let square = new Square ([10,10,10,10])

console.log(square.isValid)