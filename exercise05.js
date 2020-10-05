class Vehicle{
    static totalKm = 0;

    constructor(){
        this.kilometres = 0;
    }
    run(km){
        this.kilometres += km;
        Vehicle.totalKm += km;
    }
    getKm(){
        return this.kilometres;
    }
    static getTotalKm(){
        return Vehicle.totalKm;
    }
}


class Car extends Vehicle {

    burnWheel(){
        console.log("Im burning wheel");
    }

    
}
class Bicycle  extends Vehicle {

    doTheWheelie(){
        console.log("Im doing the wheelie");
    }

}

car1 = new Car();
bicycle1 = new Bicycle();
car1.burnWheel();
bicycle1.doTheWheelie();
car1.run(500);
bicycle1.run(40);
console.log("Car odometer: " + car1.getKm());
console.log("Bicycle odometer: " + bicycle1.getKm());
console.log("Total km: " + Vehicle.getTotalKm());