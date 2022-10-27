/*
    Objects

    Everything in js is an object

    A container that holds data as a key-value pair

    syntax for object literal =>
    var objName = {
        key: value,
        key: value,
        property: value
    }
*/

var me = {
    myName: {
        firstName: 'Lauren',
        lastName: 'David',
        nickname: 'Lo'
    },
    age: 29,
    family: {
        father: 'Christopher',
        mother: 'Jennifer',
        siblings: {
            sibling1: 'Ashley',
            sibling2: 'MK'
        }
    },
    occupation: 'Coding Instructor',
    birthPlace: 'Columbus, MS',
    hobbies: ['running', 'hiking', 'painting', 'reading', 'making things'],
    'favoriteTeams': {
        nfl1: 'Saints',
        nfl2: 'Packers',
        mlb: 'Cardinals',
        mls: 'Orlando Pride'
    },
    isAwesome: true, 
    flaws: 'cries when sleepy or hungry',
    greeting: function() {
        console.log('My name is ' + this.myName.firstName);
    }
}

/*
    Accessing the Data

    2 ways of accessing data from an object

    1.) dot notation => obj.property

    2.bracket notation => obj['prop']

    **Objects are not 0 indexed
*/

console.log(me);
console.log(me.age);//29
console.log(me.myName);//the whole myName object
console.log(me.myName.nickname);//lo
console.log(me['age']);//29
console.log(me.favoriteTeams);//object of teams
console.log(me['favoriteTeams']['nfl2']);//packers
console.log(me.hobbies[1]); //hiking

console.log(me.greeting);// My name is Lauren.

var arr = [
    'hello',
    'goodbye',
    'yes',
    'no'
];

console.log(arr)

console.clear();

/*
    Prototypes

    syntax=> 
    class Object {
        constructor() {
            stuff
        }

        method() {
            do stuff
        }

        method() {
            do stuff
        }
    }
*/

class Person {
    constructor() {
        name: this.name
        hairColor: this.hairColor
        eyeColor: this.eyeColor
        age: this.age
    }

    greeting() {
        console.log('My name is ' + this.name);
    }
    sayAge() {
        console.log('I am ' + this.age + ' years old.')
    }
}

me.age = '30';
console.log(me.age);

console.log(Person);
var lo = new Person();
console.log(lo);

lo.name = 'Lauren';
lo.hairColor = 'brown';
lo.eyeColor = 'brown';
lo.age = 29;
console.log(lo);
lo.greeting();

var msGwen = new Person();
msGwen.name = 'Ms. Gwen'
msGwen.hairColor = 'red';
msGwen.eyeColor = 'brown';
msGwen.age = 'golden'
console.log(msGwen);

//Build an animal prototype that features legs, eyes, fur, name, and console the sound it makes. Pass the prototype to three different animals