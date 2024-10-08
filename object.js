// OBJECTS
// object in js are denoted by {} and they allow you to be more descriptive. Inside of the objects, there are key and value pairs seperated by columns {key : value} and they are called object properties. They are separated by commas: {key : value, key2 : value2}. It can take in any existing data type, be it numbers, strings, boolean values,array etc. 
const person = {
    firstName: "Ade",
    lastName: "Wale",
    age: 64,
    isMarried: true,
    friends: ["John", "Thomas"],
    workHours: {
        mon: "8 hours", 
    }
}; 
console.log(person);
// how to access properties inside of objects
// this can be done i two ways viz the dot notation and the bracket notation
// you have to go with the object name.the property name. That is how to use the dot notation. 
console.log(person.age); 
console.log(person.friends);
console.log(person.workHours.mon);
// the workHours part is what can be referred to as a nested object. 
// bracket notation: objectName ["propertyName"]
console.log(person ['age']);
console.log(person ['friends'][1]);
console.log(person ['workHours'] ['mon']);

//ADDING A NEW PROPERTY TO AN OBJECT
person.car = "Benz";
person.hobbies = ["running", "sleeping"]

console.log(person.car); 

// REMOVING A PROPERTY FROM AN OBJECT
// You can use the delete key, although it is often not used. 
delete person.isMarried;
console.log(person);
// objects do not have special functions, the functions have to be written by the developer to work on the object. 
const book = {
    title: "The Secret Lives of Baba Segi's Wives",
    author: "Lola Shoneyin",
    yearPublished: 2022, 
    genre: "fiction",
    isBestSeller: false,
    rating: 3.5,
    summary: function() {
        console.log(`The Book is Titled ${this.title}, it was written by ${this.author} and it was published in ${this.yearPublished}. It is a ${this.genre}. It has a rating of ${this.rating}.` );
    },
}

book.summary(); 
// the this keyword is used inside of a function declaration in an object to refer to the object itself. 

// OBJECT DESTRUCTURING: It is a modern and faster way of picking properties inside of an object. 
const user = {
    username: 'user001',
    fullName: 'Peter Pan',
    password: '********',
    profilePic: 'avatar',
    followers: ['Wale', 'John', 'Timi'],
    following: ['Elon Musk', 'T pain', 'Ronaldo'],
    dateOfAccount: 2020,
    posts: {
        title: "JS is fun", 
        desc: "I love JS a lot",
    },
};
const {username, password, profilePic, dateOfAccount, followers} = user;
const {posts: {title, desc}} = user;
console.log(title, desc );
// PS: destructuring allows you to rename variables, particularly where there is a clash. This is called "aliasing"
// OBJECT DESTRUCTURING -
//modern and faster way of picking properties in an object
const user = {
  username: "user001",
  fullName: "Peter Pan",
  password: "****",
  profilePic: "avatar",
  followers: ["Wale", "John", "Jane"],
  following: ["Elon Musk", "T pain", "Ronaldo"],
  dateOfAccount: 2020,
  posts: {
    title: "JS is Fun",
    desc: "I love JS a lot",
  },
};

user.profilePic;
user.posts.title;
user.fullName;

const { username, profilePic, dateOfAccount, password, followers } = user;
const {
  posts: { title, desc },
} = user;
console.log(title, desc);

const myMainUser = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
};
const email = "mubarak@google.com";
//aliase
const {
  id,
  email: mainUserEmail,
  address: {
    street,
    geo: { lat: latitude, lng: longitude },
  },
  company: { name, catchPhrase, bs },
} = myMainUser; 

// ARRAY DESTRUCTURING. when destructuring an array, the integrity of that array must be kept. const [ , second]= peoplesNames.
const peoplesNames = ['Susan', 'Joy', 'Mercy', 'Ade'];










