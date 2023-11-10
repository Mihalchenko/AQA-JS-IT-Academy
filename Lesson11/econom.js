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

module.exports = Econom;