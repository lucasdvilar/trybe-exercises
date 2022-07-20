class Person {
    private _name: string;
    private _birthDate: Date;

    constructor(name: string, birthDate: Date) {
        this.validateName(name);
        this.validateBirthDate(birthDate);
        this._name = name;
        this._birthDate = birthDate;
    }

    get name(): string {
        return this._name;
    }

    get birthDate(): Date {
        return this._birthDate;
    }

    set name(name: string) {
        this.validateName(name);
        this._name = name; 
    }

    set birthDate(birthDate: Date) {
        this.validateBirthDate(birthDate);
        this._birthDate = birthDate;
    }

    private validateName(name: string): void {
        if (name.length < 3) throw new Error('O nome deve ter no mínimo três caracteres');
    }

    private validateBirthDate(birthDate: Date): void {
        if (birthDate.getTime() > new Date().getTime()) throw new Error('A data de nascimento não pode ser uma data no futuro');
        if (new Date().getFullYear() - birthDate.getFullYear() > 120) throw new Error('A pessoa não pode possuir mais de 120 anos');
    }
}

// const lucas = new Person('Lucas', new Date('2002/03/05'));
// const error1 = new Person('A', new Date('2002/03/05'));
// const error2 = new Person('Lucas', new Date('1200/01/01'));

// console.log(lucas);

class Student extends Person {
    private _enrollment: string;
    private _examsGrades: number[];
    private _worksGrades: number[];

    constructor(name: string, birthDate: Date) {
        super(name, birthDate);
        this._enrollment = this.generateEnrollment();
    }

    get enrollment(): string {
        return this._enrollment;
    }

    get examsGrades(): number[] {
        return this._examsGrades;
    }

    get worksGrades(): number[] {
        return this._worksGrades;
    }

    get sumGrades(): number {
        const grades = [...this._examsGrades, ...this._worksGrades];
        const sum = grades.reduce((prevGrade, currGrade) => prevGrade + currGrade, 0);
        return sum;
    }

    get avgScore(): number {
        const sum = this.sumGrades;
        const qtt = this._examsGrades.length + this._worksGrades.length;
        const avg = sum /  qtt;
        return avg;
    }

    set examsGrades(grades: number[]) {
        if (grades.length > 4) throw new Error('A pessoa estudante deve possuir no máximo 4 notas de provas');
        this._examsGrades = grades;
    }
    
    set workGrades(grades: number[]) {
        if (grades.length > 2) throw new Error('A pessoa estudante deve possuir no máximo 2 notas de trabalhos');
        this._worksGrades = grades;
    }

    private generateEnrollment(): string {
        return `${Math.floor(Math.random() * 10 + 1)}`
    }
}

/* const student1 = new Student('Lucas', new Date('2002/03/05'));
student1.examsGrades = [8, 3, 10, 10];
student1.workGrades = [8, 9];
console.log(student1.enrollment);
console.log(student1.examsGrades);
console.log(student1.avgScore); */

interface Employee {
    registration: string;
    salary: number;
    admissionDate: Date;
    generateRegistration(): string;
}

class Subject {
    private _name: string;

    constructor(name: string) {
        this.validateName(name);
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(name: string) {
        this.validateName(name);
        this._name = name;
    }

    private validateName(name): void {
        if (name.length < 3) throw new Error('O nome tem que possuir no mínimo 3 caracteres');
    }
}

/* const mat = new Subject('MAT');
console.log(mat.name);
const error = new Subject('a'); */
