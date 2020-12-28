let owner: string = 'Charles';
let numOfDogs: number = 6;
let dogHasEaten: boolean = false;
let dogs: string[] = ['Milo', 'Spot', 'Brenda'];
let data: [string, number, boolean];
data = ['kibble', 4, true];
let mysteryVar: unknown;
mysteryVar = 5;
mysteryVar = 'secret';
// Ambient context - doesn't actually define maybe
declare const maybe: unknown;

function coolFunc(name: string | null): boolean {
  if (name === 'Milo') {
    return true;
  }
  return false;
}

declare function create(o: object | null): void;

console.log(owner);
console.log(numOfDogs);
console.log(dogHasEaten);
console.log(dogs);
console.log(data);
console.log(mysteryVar);
// console.log(maybe);
console.log(coolFunc('Luke'));
// console.log(coolFunc(undefined)); // Gives ts error w/strict null checks
// create({prop: 0});
// create(42);
// create('string');
// create(false);
// create(undefined);

let username: string | null = null;
console.log(username);
username = 'codeguru789';
console.log(username);
username = null;
console.log(username);
// username = true; // unable to assign a boolean
// console.log(username);

let someVal: unknown = 'strings are so stringy';
// someVal.length; // Gives ts error because trying to access length prop on type unknown

// Using a type asseertion you cal specify the type of a value
console.log((someVal as string).length);
console.log((<string>someVal).length);
