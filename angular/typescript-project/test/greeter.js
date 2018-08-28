/**
 * Created by grouault on 26/08/2018.
 */
var Student = /** @class */ (function () {
    function Student(firstName, lastName, middleInitial) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.middleInitial = middleInitial;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    ;
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName + "!";
}
/*
let user: Person = {
    firstName: 'Jane',
    lastName: 'User'
};
*/
var user = new Student('Jane', 'M.', 'User');
document.body.innerHTML = greeter(user);
