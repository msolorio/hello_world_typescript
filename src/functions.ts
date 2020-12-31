function add(x: number, y: number): number {
  return x + y;
}

const sum: number = add(4, 2);
console.log(sum);

// - We can also specify the type of the function on creation
// - We can name the parameters anything we want in the type definition
// as long as the types line up
const myAdd: (baseValue: number, increment: number) => number = function (
  x: number,
  y: number
): number {
  return x + y;
}

///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
function buildName(firstName: string, lastName: string): string {
  return `${firstName} ${lastName}`;
}

// TS gives an error because we only pass 1 of 2 parameters
// buildName('Victor');

// TS gives an error because we pass 3 parameters instead of 2
// buildName('Victor', 'Franko', 'Simon');

// We can set one parameter to be optional
// optional parameters must come after required ones
function buildGreeting(salutation: string, name?: string): string {
  return `${salutation} ${name || ''}`;
}

const greeting = buildGreeting('Greetings', 'Alice');
console.log(greeting);

const simpleGreeting = buildGreeting('Hello');
console.log(simpleGreeting);

const buildOrder = function (name: string, order='pancakes'): string {
  return `
Name: ${name}
Order: ${order}
  `
}

const order = buildOrder('Benidict');

// - TS gives an error because setting a default parameter also sets to type
// to string here
// const order2 = buildOrder('Joyce', 2);

console.log(order);

////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
// Rest Params
function buildLongName(firstName: string, ...restOfName: string[]): string {
  console.log(restOfName);

  return `${firstName} ${restOfName.join(' ')}`
}

buildLongName('John', 'Jacob', 'Jingle', 'Hymer', 'Smith');

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
let deck = {
  suits: ['hearts', 'spades', 'clubs', 'diamonds'],
  cards: Array(52),
  createCardPicker: function () {
    console.log('this in createCardPicker', this);

    return () => {
      let pickedCard = Math.floor(Math.random() * 52);
      let pickedSuit = Math.floor(pickedCard / 13);

      console.log('this in arrow func', this);

      return {
        suit: this.suits[pickedSuit],
        card: pickedCard % 13
      }
    }
  }
}

const cardPicker = deck.createCardPicker();
const pickedCard = cardPicker();

console.log(pickedCard);