
interface LabeledValue {
  label: string;
}

function printLabel(labelObj: LabeledValue): string {
  return labelObj.label;
}

let myObj = {
  size: 10,
  label: 'size 10 object'
};

console.log(printLabel(myObj));
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): {
  color: string; area: number
} {
  return {
    color: config.color || 'yellow',
    area: config.width ? config.width * config.width : 100
  };
}

let mySquare1 = createSquare({color: 'black'});

// TS gives an error - the argument does not follow the SquareConfig interface
// let mySquare2 = createSquare({personality: 'relaxed'})

console.log(mySquare1);
// console.log(mySquare2);

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
interface User {
  readonly username: string;
  readonly password: string;
}

let newUser: User = {
  username: 'codeguru789',
  password: '1234'
};

// TS gives an error username is readonly
// newUser.username = 'newguru789';

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
// Creating a read only array
// let readOnlyList: ReadonlyArray<string> = ['lions', 'tigers', 'bears'];
let readOnlyList: readonly string[] = ['lions', 'tigers', 'bears'];

// TS gives an array when trying to reassign or use .push()
// readOnlyList[0] = 'puma';
// readOnlyList.push('leopard');

///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
// Creating a readonly array of objects, hardcoding the objects on definition

// let recipes: readonly object[] = [
//   {
//     name: 'grilled cheese sandwich',
//     ingredients: ['cheese', 'bread', 'butter', 'tomato'],
//     preparationTime: 15
//   },
//   {
//     name: 'meatball soup',
//     ingredients: ['tomatos', 'tomato sauce', 'beef broth', 'garlic', 'onions', 'mint'],
//     preparationTime: 360
//   },
// ];

// console.log(readOnlyList);
// console.log(recipes);
// recipes[0].preparationTime = 20; // TS gives an error - preparationTime
// does not exist on type object
// console.log(recipes);

///////////////////////////////////////////////////
///////////////////////////////////////////////////
// Create an iterface declaring readonly properties in our object
// *** This is very useful in setting up immutibility in objects and
// avoiding time consuming bugs ***
interface Recipe {
  name: string;
  // readonly name: string;
  readonly ingredients: string[];
  readonly preparationTime: number;
}

let recipes: readonly Recipe[] = [
  {
    name: 'grilled cheese sandwich',
    ingredients: ['cheese', 'bread', 'butter', 'tomato'],
    preparationTime: 15
  },
  {
    name: 'meatball soup',
    ingredients: ['tomatos', 'tomato sauce', 'beef broth', 'garlic', 'onions', 'mint'],
    preparationTime: 360,
    // chef: 'me' // TS prevents us from adding properties not specified in
    // Recipe interface
  },
];

// TS gives an error - preparationTime is a
// readonly property
// recipes[0].preparationTime = 20;

// name is not a readonly property so we can reassign it
recipes[0].name = 'grilled cheese supreme';
console.log(recipes[0]);

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
interface Dog {
  name: string,
  playsFetch: boolean,
  likesSwimming: boolean,
  pottyTrained: boolean
}

// - When declaring an object literal following an interface
// all properties must be found in the interface
// - TS gives an error for hairType
// let newDog: Dog = {
//   name: 'Fido',
//   playsFetch: true,
//   likesSwimming: true,
//   pottyTrained: false,
//   hairType: 'long hair'
// }

// - *** However, we can can set a function parameter to match an interface
// and pass an object literal that includes extra properties
// - TS does not give an error for hairType here.
let newDog = {
  name: 'Fido',
  playsFetch: true,
  likesSwimming: true,
  pottyTrained: false,
  hairType: 'long hair'
}

function printDog(dog: Dog) {
  return dog.name;
}

// TS does not error here
console.log(printDog(newDog));

// TS gives an error here that hairType is not in the dog interface
// printDog({
//   name: 'Fido',
//   playsFetch: true,
//   likesSwimming: true,
//   pottyTrained: false,
//   hairType: 'long hair'
// })

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
// Interfaces can be used for functions
// interface SearchFunc {
//   (sourceStr: string, subStr: string): boolean;
// }

// let mySearch: SearchFunc;

// mySearch = function(sourceStr, subStr) {
//   return sourceStr.search(subStr) > -1;
// }

// Could also be written without an interface
// function mySearch(sourceStr: string, subStr: string): boolean {
//   return sourceStr.search(subStr) > -1;
// }

// OR
const mySearch = function(source: string, subStr: string): boolean {
  return source.search(subStr) > -1;
}

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
// interface StringArray {
//   [index: number]: string;
// }

// let myArray: StringArray;
let myArray: {
  [index: number]: string;
}

myArray = ['Frida', 'Ptolomy', 'Greg'];

let myStr: string = myArray[0];

console.log(myStr);

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
// Extending iterfaces
interface Shape {
  color: string;
}

interface Square extends Shape {
  sideLength: number;
}

let newSquare: Square = {
  color: 'green',
  sideLength: 20
}

interface BorderedLargeSquare extends Square {
  borderColor: string;
  borderThickness: number;
  borderStyle: string;
}

let borderedSquare: BorderedLargeSquare = {
  color: 'green',
  sideLength: 20,
  borderColor: 'black',
  borderThickness: 2,
  borderStyle: 'solid'
}
