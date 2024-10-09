// COMPLEX DATA STRUCTURE 
// Note that an array can have just one element, which contains several objects with several properties.  
const nums = [7, 8, 2, 4];
// complex data structure
//[object, ]
const movies = [
  { id: 1, title: "Die Hard", director: "Bruce Willis", rating: 3.4 },
  { id: 2, title: "Mission Impossible", director: "Tom Cruise", rating: 4.5 },
  { id: 3, title: "Little miss forest", director: "John Doe", rating: 4.1 },
  { id: 4, title: "Mission Impossible", director: "Tom Cruise", rating: 4.4 },
];

//
movies.map((movie) => {
  console.log(movie.title.toUpperCase(), movie.rating);
});
//4.0 and above
const topRatedMovies = movies.filter((movie) => {
  return movie.rating >= 4;
});

console.log(topRatedMovies);

// // miss
// const searchedMovies = movies.filter((movie) => movie.title.includes("miss"));
// console.log(searchedMovies);
// //MISS -> miss '      MISS     '
// const searchMovies = (searchTerm) => {
//   const converted = searchTerm.trim().toLowerCase();
//   console.log(converted);
// };
// searchMovies("miss"); 
// miss
const searchedMovies = movies.filter((movie) => movie.title.includes('miss'))
console.log(searchedMovies);
// Miss -> miss
const searchMovies = (searchTerm) => {
    const converted = searchTerm.trim().toLowerCase();
    const moviesSearched = movies.filter((movie) =>
    movie.title.toLowerCase().includes(converted));
    return moviesSearched;
};

console.log(searchMovies('die'));

const moviesDirectedByTomCruise = movies.filter ((movie) => movie.director.includes('Tom Cruise')); 
console.log(moviesDirectedByTomCruise); 

const movieId = movies.find((movie) => movie.id === 3);
console.log(movieId);

const moviesRatedLessThan4 = movies.filter((movie) => movie.rating < 4);
console.log(moviesRatedLessThan4);

const events = [
  {
    id: 1,
    title: "Movie In the Park",
    category: "Party",
    date: "Aug 6th, 2024",
    price: 0,
    location: "Lagos",
  },
  {
    id: 2,
    title: "Burna Live In Concert",
    category: "Party",
    date: "Dec 23rd, 2024",
    price: 25000,
    location: "Lagos",
  },
  {
    id: 3,
    title: "Read With Kuku",
    category: "Education",
    date: "Sept 6th, 2024",
    price: 5000,
    location: "Online",
  },
  {
    id: 4,
    title: "Japa on a Budget",
    category: "Education",
    date: "Nov 6th, 2024",
    price: 10000,
    location: "Abuja",
  },
  {
    id: 5,
    title: "Mainland Block Party",
    category: "Party",
    date: "Dec 6th, 2024",
    price: 12000,
    location: "Lagos",
  },
]; 

console.log(events.length);
const eventsInLagos = events.filter((event) => event.location.includes('Lagos'));
console.log(eventsInLagos); 
const eventsLessThan15k = events.filter((event)=> event.price <= 15000);
console.log(eventsLessThan15k); 
const parties = events.filter((event) => event.category.includes ('Party'))
console.log(parties); 
const alpheticalArrangement = events.sort((a, b) => a.title.localeCompare(b.title ));
console.log(alpheticalArrangement);

const numOfEvents = events.length;
const randomEvents = Math.floor(Math.random() * numOfEvents);
console.log(randomEvents);
console.log(events[randomEvents]);


// const randomEvent = Math.floor(Math.random() randomEvent);
// console.log(events[randomEvent]);











