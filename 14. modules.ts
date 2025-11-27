import {Employee} from './13. classEmployee';

const oEmployeeBobJones = new Employee(2, 'Bob', 'Jones', 'Developer', 80000, 28);

console.log(oEmployeeBobJones.greet());                 //Hi, I'm Bob Jones (2), Homo sapiens. I work as a Developer.

console.log('New salary:', oEmployeeBobJones.salary);   //New salary: 80000

oEmployeeBobJones.giveRaise(10);
console.log('New salary:', oEmployeeBobJones.salary);   //New salary: 88000