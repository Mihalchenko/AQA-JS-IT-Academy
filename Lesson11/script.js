const Taxi = require('./taxi');
const CarBuilder = require('./carBuilder');
const Econom = require('./econom');
const Comfort = require('./comfort');
const Buisness = require('./buisness');

let taxi = new Taxi();

let VWPolo = new CarBuilder('VW', "Polo").setConsumption(8.2).setPrice(7000).build();
let VWPassat = new CarBuilder('VW', "Passat").setConsumption(7.6).setPrice(12000).build();
let BMW3 = new CarBuilder('BMW', "3").setConsumption(5.6).setPrice(8000).build();
let AudiA6 = new CarBuilder('Audi', "A6").setConsumption(11.3).setPrice(15000).build();
let LadaVesta = new CarBuilder('Lada', "Vesta").setConsumption(9.7).setPrice(6500).build();
let MercedesS600 = new CarBuilder('Mercedes', "S600").setConsumption(13.3).setPrice(21300).build();

new Comfort(VWPolo, taxi).addCar();
new Econom(VWPassat, taxi).addCar();
new Comfort(BMW3, taxi).addCar();
new Comfort(AudiA6, taxi).addCar();
new Econom(LadaVesta, taxi).addCar();
new Buisness(MercedesS600, taxi).addCar();

console.log(taxi.getCars());
console.log(taxi.sortByConsumption('max'));
console.log(taxi.countTotalPrice());
console.log(taxi.filterByConsumption("more", 10));