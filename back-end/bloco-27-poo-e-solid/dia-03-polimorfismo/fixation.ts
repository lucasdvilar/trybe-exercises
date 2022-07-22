abstract class Character {
    constructor(public name: string) {}
    abstract talk(): void;
    abstract specialMove(): void;
}

class MeleeCharacter extends Character {
    talk(): void {
        console.log(`${this.name} talk`);
    }

    specialMove(): void {
        console.log(`${this.name} specialMove`);
    }
}

class LongRangeCharacter extends Character {
    talk(): void {
        console.log(`${this.name} talk`);
    }

    specialMove(): void {
        console.log(`${this.name} specialMove`);
    }
}

const test = (character: Character) => {
    character.talk();
    character.specialMove();
};

test(new MeleeCharacter('melee'));
test(new LongRangeCharacter('longRange'))
