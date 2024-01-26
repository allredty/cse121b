let names = ['Nancy','Blessing','Jorge','Svetlana','Bob'];

const namesB = names.filter(name => name.charAt(0) === 'B');

let namesLength = [5, 8, 5, 8, 3];

let nameLengths = names.map((name) => name.length);

names.reduce((total, name) => total + name.length, 0) / names.length;