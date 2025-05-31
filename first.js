class ToyotaCar {
    constructor (brand, milege, speed) {
        console.log("criate new object");
        this.brand = brand;
        this.milege = milege;
        this.speed = speed;
    }
    start() {
        console.log("start");
    }

     stop() {
        console.log("stop");
    }
}

//class to object
let Fortuner = new ToyotaCar("fortuner", 10 ,50);
console.log(Fortuner);
let swift = new ToyotaCar("swift", 12, 55);
console.log(swift);