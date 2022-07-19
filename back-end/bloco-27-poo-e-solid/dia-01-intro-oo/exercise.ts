class Student {
    private _name: string;
    private _enrollment: number;
    private _testScores: [number, number, number, number];
    private _projectScores: [number, number];

    constructor(name: string, enrollment: number, testScores: [number, number, number, number], projectScores: [number, number] ) {
        this._name = name;
        this._enrollment = enrollment;
        this._testScores = testScores;
        this._projectScores = projectScores;
    }

    sumScores() {
        const scores = [...this._testScores, ...this._projectScores];
        const sum = scores.reduce((prevScore, currScore) => prevScore + currScore, 0);
        return sum;
    }

    avgScore() {
        const sum = this.sumScores();
        const qtt = this._testScores.length + this._projectScores.length;
        const avg = sum /  qtt;
        return avg;
    }
}

const student1 = new Student('Lucas', 1234, [8, 9, 8, 10], [7, 10]);
console.log(student1.sumScores());
console.log(student1.avgScore());
