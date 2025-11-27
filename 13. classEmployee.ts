import {Person} from './12. classPerson';

// Inheritance and constructor shorthand for property declaration
export class Employee extends Person {
    constructor(
        id: number,
        firstName: string,
        lastName: string,
        protected role: string,
        public salary: number,
        age = 0
    ) {
        super(id, firstName, lastName, age);
    }

    // Override greet
    public greet(): string {
        return `${super.greet()} I work as a ${this.role}.`;
    }

    public giveRaise(percent: number) {
        if (percent <= 0) throw new Error('Raise percent must be positive');
        this.salary *= 1 + percent / 100;
    }
}