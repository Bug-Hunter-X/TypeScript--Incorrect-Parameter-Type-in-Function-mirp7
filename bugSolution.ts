function greeter(person: string): string;
function greeter(person: string[]): string;
function greeter(person: string | string[]): string {
    if (typeof person === 'string') {
        return "Hello, " + person;
    } else {
        return "Hello, " + person.join(' ');
    }
}

let user = ["Jane", "Doe"];
let user2 = "Jane Doe";
console.log(greeter(user)); // Works correctly with the array
console.log(greeter(user2)); // Works correctly with the string