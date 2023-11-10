class Buisness {
    constructor(car, carMediator) {
        this.carMediator = carMediator;
        this.car = car;
        this.car.kmPrice = "5.2";
    };

    addCar() {
        this.carMediator.addCar(this.car, 'buisness');
    };
};

module.exports = Buisness;