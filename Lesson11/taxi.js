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

    countTotalPrice() {
        let carsArray = this.createCarsArray();
        let totalPrice = carsArray.reduce((sum,item) => sum + item.price, 0);
        return totalPrice;
    };
};

module.exports = Taxi;