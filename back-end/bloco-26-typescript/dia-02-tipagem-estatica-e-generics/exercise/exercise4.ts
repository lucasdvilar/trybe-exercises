import Pizza from "./exercise3";

interface RegularPizza extends Pizza {
    flavor: 'Calabresa' | 'Frango' | 'Pepperoni'; // inline type unions
    slices: 4 | 6 | 8;
}

interface VegetarianPizza extends Pizza {
    flavor: 'Marguerita' | 'Palmito' | 'Cogumelo';
    slices: 4 | 6 | 8;
}

interface SweetPizza extends Pizza {
    flavor: 'Nutella' | 'Goiabada com Queijo' | 'Marshmallow';
    slices: 4;
}

const frango: RegularPizza = {
    flavor: 'Frango',
    slices: 6
}
console.log(frango);

const palmito: VegetarianPizza = {
    flavor: 'Palmito',
    slices: 4,
}
console.log(palmito);

const nutella: SweetPizza = {
    flavor: 'Nutella',
    slices: 4,
}
console.log(nutella);
