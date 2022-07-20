class SuperClass {
    isSuper: boolean;

    constructor() {
        this.isSuper = true;
    }
    
    public sayHello() {
        console.log('Olá mundo!');
    }
}

class Subclass extends SuperClass {
    constructor() {
        super();
        this.isSuper = false;
    }
}

const superClassObj = new SuperClass();
const subClassObj = new Subclass();

const myFunc = (object: SuperClass) => {
    object.sayHello();
    console.log(object.isSuper ? 'Super!' : 'Sub!');
};

myFunc(superClassObj);
myFunc(subClassObj);
