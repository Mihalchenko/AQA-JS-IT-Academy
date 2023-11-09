class Car {
    constructor() {
        this.brand = '';
        this.model = '';
        this.consumption = 0;
        this.price = 0;
    }
}

class CarBuilder {
    constructor(brand, model) {
        this.car = new Car;
        this.car.brand = brand;
        this.car.model = model;
    }

    setConsumption(value) {
        this.car.consumption = value;
        return this;
    }

    setPrice(price) {
        this.car.price = price;
        return this;
    }

    build() {
        return this.car;
    }
}

class Taxi {
    constructor() {
        this.cars = [];
    }

    addCar(car, type) {
        car.type = type;
        this.cars.push(car);
    }

    getCars() {
        return this.cars;
    }
}

class Comfort {
    constructor(car, carMediator) {
        this.carMediator = carMediator;
        this.car = car;
    }

    addCar() {
        this.carMediator.addCar(this.car, 'comfort');
    }
}

class Econom {
    constructor(car, carMediator) {
        this.carMediator = carMediator;
        this.car = car;
    }

    addCar() {
        this.carMediator.addCar(this.car, 'econom');
    }
}

let taxi = new Taxi();

let VWPolo = new CarBuilder('VW', "Polo").setConsumption(8.2).setPrice(7000).build();
let VWPassat = new CarBuilder('VW', "Passat").setConsumption(7.6).setPrice(12000).build();
let BMW3 = new CarBuilder('BMW', "3").setConsumption(5.6).setPrice(8000).build(); 

new Comfort(VWPolo, taxi).addCar();
new Econom(VWPassat, taxi).addCar();
new Comfort(BMW3, taxi).addCar();

console.log(taxi.getCars());