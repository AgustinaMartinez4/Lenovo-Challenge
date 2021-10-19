//1)

let array = [1,2,3,4,5,6,7,8,9,10];
let pares = [];
let impares = [];
function par(array){
for(let i= 0;i<array.length;i++){
    if((array[i] % 2) !== 0){
        impares.push(array[i]);
    }
    else{
        pares.push(array[i]);
    }
 }
 console.log("Los numeros pares son ",pares);
 return pares;
}

//2)

function palindromo(palabra){
    var reverse = '';
    for(var i = palabra.length -1; i >= 0; i--){
      reverse += palabra[i];
    }
    if(reverse === palabra){
      return true;
   }
   return false;
  }
console.log(palindromo('rever'))

//*3)
    class CarCreate{
        contructor(make, model, turnedOn, engineDisplacement, year) {
        this.make=make;
        this.model=model;
        this.turnedOn= turnedOn;
        this.engineDisplacemnent= engineDisplacement;
        this.year=year;
    }
    isOn(){
    }
    turnOn(){
    }
    toString(){
        return this.year, this.make, this.model, this.engineDisplacemnent
    }
    getMarketingData(){
        return this.make, this.model, this.year
     }
    }
       class BicycleCreate{
        contructor(make, model, year){
         this.make=make;
         this.model=model;
         this.year=year; 
       }
    }
    const auto = new CarCreate('audi','f1', true, 100, 2021)
    const{dates} = auto.getMarketingData()
    console.log(dates.mak)
    const bici = new BicycleCreate(dates.mak, dates.mode, dates.year)
       