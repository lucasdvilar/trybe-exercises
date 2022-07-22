interface Character {
    name: string;
    specialMove: string;
}
  
interface DbCharacter extends Character {
    id: number;
}
  
const db: DbCharacter[] = [];

interface IModel {
    create(character: Character): DbCharacter;
    getAll(): DbCharacter[];
    getById(id: number): DbCharacter;
    update(id: number, character: Character): DbCharacter;
    delete(id: number): void;
}

class LocalDbModel implements IModel {
    create(character: Character): DbCharacter {
        const lastId = db.length > 0 ? db.length - 1 : 0;
        const newChar = { id: lastId, ...character };
        db.push(newChar);
        return newChar;
    }

    getAll(): DbCharacter[] {
        return db;
    }

    getById(id: number): DbCharacter {
        const char = db.find((c) => c.id === id);
        if (!char) throw new Error('Char not found!')
        return char;
    }

    update(id: number, character: Character): DbCharacter {
        const i = db.findIndex((c) => c.id === id);
        if (!i) throw new Error('Char not found!');
        db[i] = { ...db[i], ...character}
        return db[i];
    }

    delete(id: number): void {
        const i = db.findIndex((c) => c.id === id);
        if (!i) throw new Error('Char not found!');
        db.splice(i, 1);
    }
}

/* const test = new LocalDbModel;
test.create({ name: 'Lucas', specialMove: 'Kick' });
console.log(test.getAll()); */

class CharacterService<T> {
    constructor(readonly CharacterModel: T) {}

    /* create(character: Character): DbCharacter {
        return this.CharacterModel.create(character);
    }

    getAll(): DbCharacter[] {
        return this.CharacterModel.getAll();
    } */
}

/* const test2 = new CharacterService(new LocalDbModel);
test2.create({ name: 'Lucas', specialMove: 'Kick' });
console.log(test2.getAll()); */

class MockedDbModel implements IModel {
    create(character: Character): DbCharacter {
        return { id: 1, ...character };
    }

    getAll(): DbCharacter[] {
        return [{ id: 1, name: 'a', specialMove: 'a' }, { id: 2, name: 'b', specialMove: 'b' }];
    }

    getById(id: number): DbCharacter {
        return { id, name: 'c', specialMove: 'c' }
    }

    update(id: number, character: Character): DbCharacter {
        return { id, ...character };
    }

    delete(id: number): void {
        console.log(id, 'deleted');
    }
}

/* const test3 = new CharacterService(new MockedDbModel);
console.log(test3.getAll()); */
const test4: CharacterService<MockedDbModel> = new CharacterService(new MockedDbModel);
console.log(test4.CharacterModel.create({ name: 'Lucas', specialMove: 'Kick' }));
console.log(test4.CharacterModel.getAll());
