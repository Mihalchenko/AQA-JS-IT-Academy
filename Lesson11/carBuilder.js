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

module.exports = CarBuilder;