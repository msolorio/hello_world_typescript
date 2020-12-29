
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

console.log(readOnlyList);

// TS gives an array when trying to reassign or use .push()
// readOnlyList[0] = 'puma';
// readOnlyList.push('leopard');