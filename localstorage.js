// LOCAL STORAGE API
// // setting sometheing the local storage 
// localStorage.setItem('token', 'hello');

// // getting or retriving something from the local storage 
// localStorage.getItem("token");

// // removing values from the local storage 
// localStorage.removeItem("token"); 

// // clearing the local storage
// localStorage.clear(); 
// clearing removes everything that is contained in the local storage. 
// PS: local storage can only take in strings. In order to put other data types in the local storage: 
const user = {
    id: 1,
    theme: "dark",
};
// The method to change into a string is: JSON.stringify. JSON means: Javascrip Object Notation. in JSON, the key and value texts must be in double quotes "". Also, you cannot have trailing commas. 
localStorage.setItem("user", JSON.stringify(user));
// JSON.parse simply means- return to me what I gave to you.
localStorage.getItem("user");
JSON.parse(localStorage.getItem("user"));
