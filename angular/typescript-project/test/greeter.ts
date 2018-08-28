/**
 * Created by grouault on 26/08/2018.
 */

interface Person{
    firstName: string;
    lastName: string;
}

class Student{

    fullName: string;

    constructor(
        public firstName: string,
        public lastName: string,
        public middleInitial: string
    ){
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    };

}


function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName + "!";
}

/*
let user: Person = {
    firstName: 'Jane',
    lastName: 'User'
};
*/

let user = new Student('Jane', 'M.', 'User');

document.body.innerHTML = greeter(user);