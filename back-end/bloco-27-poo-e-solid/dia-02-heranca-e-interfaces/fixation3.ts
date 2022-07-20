interface Logger {
    log(param: string): void;
}

class ConsoleLogger implements Logger {
    log(param: string): void {
        console.log('logger1', param);
    }
}

class ConsoleLogger2 implements Logger {
    log(param: string): void {
        console.log('logger2', param);
    }
}

interface Database {
    logger: Logger;
    save(key: string, value: string): void;
}

class ExampleDatabase implements Database {
    constructor(public logger: Logger = new ConsoleLogger()) {}

    save(key: string, value: string) {
        this.logger.log(`Save ${value} on ${key}`)
    }
}

const logger1 = new ConsoleLogger();
const logger2 = new ConsoleLogger2();

const exampleDb1 = new ExampleDatabase(logger1);
const exampleDb2 = new ExampleDatabase(logger2);
const exampleDb3 = new ExampleDatabase();

exampleDb1.save('key 1', 'value 1');
exampleDb2.save('key 2', 'value 2');
exampleDb3.save('key 3', 'value 3');
