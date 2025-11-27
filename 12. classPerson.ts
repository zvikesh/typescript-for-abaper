// Basic class with access modifiers and readonly field
export class Person {
    private _firstName: string;
    private _lastName: string;
    protected _age: number;
    public readonly id: number;

    static species = 'Homo sapiens';

    constructor(id: number, firstName: string, lastName: string, age = 0) {
        this.id = id;
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
    }

    get fullName(): string {
        return `${this._firstName} ${this._lastName}`;
    }

    set lastName(newLast: string) {
        if (!newLast) throw new Error('lastName cannot be empty');
        this._lastName = newLast;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        if (value < 0) throw new Error('Age cannot be negative');
        this._age = value;
    }

    public greet(): string {
        return `Hi, I'm ${this.fullName} (${this.id}), ${Person.species}.`;
    }

    static isAdult(age: number): boolean {
        return age >= 18;
    }
}