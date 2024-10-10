// ASYNCHRONOUS JS OR CODING 
// It is basically a non-blocking code and it is used where you want to perform a task that will take time, so you do not delay other functions. 
// console.log("a");
// console.log("b");
// console.log("c");

// console.log(1);

// setTimeout(() => {
//   console.log(2);
// }, 5000);

// console.log(3);

// API- Application Programming Interface- it allows two computers to communicate with ecah other. 
const url = "https://jsonplaceholder.typicode.com/users";
// PROMISES: an object for eventual...of asynchronous ...Like a container for a future value. Basic states in promises are: fulfilled, rejected and pending. 
// fetch (url)
// .then((response) => response.json())
// .then ((data) => {console.log(data);
// });
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  }).catch((error) => {
    console.log(error);
  });
// catch: catches error in case there is an error while trying to make that request. 

// JS METHOD OF FETCH: THE ASYNC/AWAIT SYSTEM
const getUsers = async () => {
    try{
        const response = await fetch (url);
        const data = await response.json();
        console.log(data);  
    } catch (error) {
        console.log(error);  
    }
}; 
getUsers();

// REQUEST METHODS: GET, POST, PATCH, DELETE, PUT
// Get requests is like trying to retrieve data. A fetch reqest is a get method. However, you must state it for the others. 
// A post request simply means that you are creatinhg a data. 
// Patch request simply means that you are updating a data...
// Delete is for removing data.
// Put is for updating, however, it is for a total overhaul. 

