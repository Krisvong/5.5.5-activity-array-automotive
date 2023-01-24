
const VehicleModule = require("./vehicle").Vehicle;

class Car extends VehicleModule {
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

    scheduleService (miles){
        if (this.mileage > 30000) {
            this.scheduleService = true
            return this.scheduleService;
        }
    }
}

//this shows how to call from this module...
let myVehicle = new Car("Mecury", "Sedan", "1965", "color", 40000);
console.log(myVehicle.make);
console.log(myVehicle);


