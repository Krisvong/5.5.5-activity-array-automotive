
const VehicleModule = require("./vehicleBaseClass");

class Car extends Vehicle {
    constructor(make, model, year, color, mileage){
        super(make, model, year, color, mileage);
        this.maximumPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }

    loadPassenger(num) {
        if (this.passenger < this.maximumPassengers && (num + this.passenger) <= this.maximumPassengers) {
            this.passenger = num;
            return this.passenger;
        } else {
            console.log(`${this.model} ${this.make} is full`);
        }
    }

    start(){
        if (this.fuel > 0){
            console.log("vroom vroom!");
            return this.started =true
        } else {
            console.log("fuel empty");
            return this.started = false;
        }
    } 

    scheduleService (mileage){
        if (this.mileage > 30000) {
            this.scheduleService = true
            return this.scheduleService;
        }
    }
}

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)


