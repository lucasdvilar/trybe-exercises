export function greeter(name: string) { // type inference
    return `Olá, ${name}`;
}

export function personAge(name: string, age: number) {
    return `${name} tem ${age} anos!`;
}

export function add(x: number, y: number) {
    return x + y;
}

export function sumArray(numbers: number[]) {
    return numbers.reduce(add, 0);
}

export function triangle(base: number, height: number) {
    return (base * height) / 2;
}

export function square(side: number) {
    return side ** 2;
}

export function rectangle(base: number, height:number) {
    return base * height;
}

export function circle(radius: number) {
    const PI = 3.14;
    return PI * radius ** 2;
}