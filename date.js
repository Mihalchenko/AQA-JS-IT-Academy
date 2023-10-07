let today = new Date();
let startYear = 2000;
let fridays = 0;

for (i = startYear; i <= today.getFullYear(); i++) {
    for (j = 1; j <= 12; j++) {
        if ((new Date(`${i}, ${j}, 13`)).getDay() === 5 && new Date(`${i}, ${j}, 13`) <= today) {
            fridays += 1;
        }
    }
}

console.log(`There are ${fridays} fridays science 1st of January, ${startYear}.`);