// rest and spread operators 
// optional chaining
// nullish coalescence 
// leftEpression (null || undefined) ?? defaultValue
const username = null;
console.log(username ?? "unknown user");

// optional chaining. Used to question objects so that your code will not break. 
const user = {
    name: "John Doe",
    gender: "male",
    previousJobs: {
        one: "Jumia",
        two: "Paystack", 
        three: "Meta",
    },
}; 
console.log(user.name);
console.log(user?.car);
console.log(user?.previousJobs?.three);

if(user.profilePic){
    // display picture
    // <img drc ={}
};
// However, an easier alternative is: img src = {user?.profilePic};

// rest and spread opertaors look similkar and are denoted by three dots: ... Rest operator must come last. 
// REST OPERATOR 
const countries = ['Cuba', 'Algeria', 'Mexico', 'Bangladesh'];
const [one, two, ...others] = countries;

console.log(one);
console.log(two);
console.log(others);

const country = {
  name: "Nigeria",
  yearOfIndependence: 1960,
  officialLanguage: "English",
  isIsland: false,
};

const { name, isIsland, ...remainder } = country;
console.log(name, isIsland);
console.log(remainder);

// SPREAD OPERATOR 
const africanCountries = ['Mali', 'Togo', 'Kenya', 'Uganda'];
const asianCountries = ['China', 'Japan', 'Bangladesh', 'Vietnam']; 
const allCountries = [...africanCountries, ...asianCountries];
console.log(allCountries); 



