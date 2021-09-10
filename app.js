const fs = require('fs');

const genders = ['M', "F"];
const maleNames = ['Szczepan', 'Maciej', 'Wojtciech', 'Patryk', 'Krzysztof', 'Zdzisław'];
const femaleNames = [ 'Aneta', 'Barbara', 'Ewa', 'Marelna', 'Martyna', 'Paula', 'Katarzyna'];
const lastNames= ['Dyga', 'Kepa', 'Nowak', 'Bednarek', 'Patacz', 'Kucia', 'Mroczkowska'];

const randChoice = (arr) => {
    const rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
}

const people = [];

for (let i=0; i<20; i++) {
    const person = {}
    person.gender = randChoice(genders);

    if (person.gender === 'M'){
        person.name = randChoice(maleNames);
    } else {
        person.name = randChoice(femaleNames);
    }

    person.lastName = randChoice(lastNames);
    person.age = Math.floor(Math.random()*60 + 18 );

    people.push(person);

}

const convertedArr = JSON.stringify(people);

fs.writeFile('people.json', convertedArr, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });

