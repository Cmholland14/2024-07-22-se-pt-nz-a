let animals = ['Kitten', 'Puppy', 'Pony', 'Duckling', 'Piglet'];
console.log(animals[0]); // 'Kitten'
console.log(animals[1]); // 'Puppy'
console.log(animals[2]); // 'Pony'
console.log(animals[3]); // 'Duckling'
console.log(animals[4]); // 'Piglet'
animals[1] = 'Goat'
animals[4] = 'Cow'
console.log(animals); // [ 'Kitten', 'Goat', 'Pony', 'Duckling', 'Cow']
animals.unshift('Rabbit')
console.log(animals); // [ 'Rabbit', 'Kitten', 'Goat', 'Pony', 'Duckling', 'Cow' ]
animals.push('Cow');
let LastAnimal = animals.pop();
console.log(LastAnimal); // Cow
console.log(animals); // ['Rabbit', 'Kitten', 'Goat', 'Pony', 'Duckling']e