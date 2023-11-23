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

module.exports = Comfort;