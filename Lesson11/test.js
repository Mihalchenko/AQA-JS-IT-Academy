class Car {
    constructor() {
        this.brand = '';
        this.model = '';
        this.consumption = 0;
        this.price = 0;
    };
};

class CarBuilder {
    constructor(brand, model) {
        this.car = new Car;
        this.car.brand = brand;
        this.car.model = model;
    };

    setConsumption(value) {
        this.car.consumption = value;
        return this;
    };

    setPrice(price) {
        this.car.price = price;
        return this;
    };

    build() {
        return this.car;
    };
};

class Taxi {
    constructor() {
        this.cars = {};
    };

    addCar(car, type) {
        if (!this.cars[type]) {
            this.cars[type] = [];
        };
        this.cars[type].push(car);
    };

    getCars() {
        return this.cars;
    };

    createCarsArray() {
        let carsArray = [];
        for (let key in this.cars) {
            this.cars[key].map((item) => carsArray.push(item));
        };
        return carsArray;
    };

    sortByConsumption(sortBy = "min") {
        let carsArray = this.createCarsArray();
        if (sortBy == "max") {
            carsArray.sort((a,b) => b.consumption - a.consumption);
        } else if (sortBy == "min") {
            carsArray.sort((a,b) => a.consumption - b.consumption);
        };

        return carsArray;
    };
};

class Comfort {
    constructor(car, carMediator) {
        this.carMediator = carMediator;
        this.car = car;
        this.car.kmPrice = "3.6";
    };

    addCar() {
        this.carMediator.addCar(this.car, 'comfort');
    };
};

class Econom {
    constructor(car, carMediator) {
        this.carMediator = carMediator;
        this.car = car;
        this.car.kmPrice = "2.1";
    };

    addCar() {
        this.carMediator.addCar(this.car, 'econom');
    };
};

let taxi = new Taxi();

let VWPolo = new CarBuilder('VW', "Polo").setConsumption(8.2).setPrice(7000).build();
let VWPassat = new CarBuilder('VW', "Passat").setConsumption(7.6).setPrice(12000).build();
let BMW3 = new CarBuilder('BMW', "3").setConsumption(5.6).setPrice(8000).build();
let AudiA6 = new CarBuilder('Audi', "A6").setConsumption(11.3).setPrice(15000).build();
let LadaVesta = new CarBuilder('Lada', "Vesta").setConsumption(9.7).setPrice(6500).build();

new Comfort(VWPolo, taxi).addCar();
new Econom(VWPassat, taxi).addCar();
new Comfort(BMW3, taxi).addCar();
new Comfort(AudiA6, taxi).addCar();
new Econom(LadaVesta, taxi).addCar();

console.log(taxi.getCars());
console.log(taxi.sortByConsumption('max'));