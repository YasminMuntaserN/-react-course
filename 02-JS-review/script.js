const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// *************** Destructuring ***************
/*
      const book =getBook(2);

      // const title =book.title;  
      // const author =book.author;  
      // console.log(title,author);

      const {title, author , pages , genres} = book ;
      console.log(title,author,pages , genres);

      // const primaryGenre=genres[0];
      // const secounderyGenre=genres[1];
      // console.log(primaryGenre,secounderyGenre);

      const [primaryGenre , secounderyGenre] = genres ;
      console.log(primaryGenre,secounderyGenre);
*/



 //*************** RestSpread Operator ***************
/*
  const book =getBook(2);
  const {title, author , pages , genres} = book ;
 // const [primaryGenre , secounderyGenre] = genres ;
 // console.log(primaryGenre,secounderyGenre);

  const [primaryGenre , secounderyGenre ,...otherGenres] = genres ;
  console.log(primaryGenre,secounderyGenre ,otherGenres);
 // if we but (...otherGenres) in the end of the destructuring operation.it will give us an error that the rest element must be the last in the Destructuring pattern
 //const [primaryGenre ,...otherGenres, secounderyGenre] = genres ;

 const updatedBook1 = {
  pages: 1210, // it will does not effect
  ...book,
  // Adding a new property
  moviePublicationDate: "2001-12-19",

  // Overwriting an existing property
};
updatedBook1;

  const updatedBook2 = {
  ...book,
  // Adding a new property
  moviePublicationDate: "2001-12-19",

  // Overwriting an existing property
  pages: 1210,
};
updatedBook2;
*/


//*************** Template Literals ***************
/*
const book =getBook(2);
const {title, author , pages , genres} = book ;
const summary = `${title}, a ${pages}-page long book, was written by ${author} `;
summary;
*/


  //********* Ternaries Instead of ifelse Statements ********
/*
  const book =getBook(1);
const {title, author , pages , genres} = book ;

const pagesRange =pages >1000 ?"over a thousend":"less than 1000";
pagesRange;
*/


//*************** Arrow Functions ***************
/*
const book =getBook(1);
const {title, author , pages , genres ,publicationDate} = book ;

const getYear = (str) => str.split("-")[0];

console.log( getYear(publicationDate));
*/


//***** Short-Circuiting And Logical Operators &&, ***********
/*
const book =getBook(1 );
const {title, author , pages , genres ,hasMovieAdaptation} = book ;
console.log(hasMovieAdaptation && "This  book has a movie");

const count = book.reviews.librarything.reviewsCount ||"No Data";
count;
*/


//***** Optional Chaining. ***********
/*
function getTotalReviewCount(book){
return book.reviews.librarything?.reviewsCount ?? 0 + book.reviews.goodreads.reviewsCount;
}

const book =getBook(2);
console.log(getTotalReviewCount(book));
*/


//***** The Array map Method ***********
/*
const books = getBooks();

const titles =books.map(book =>book.title); 
titles;

const essentialData =books.map((book) => ({
  title: book.title,
  author: book.author,
}));
essentialData;
*/


//***** The Array Filter Method ***********
/*
const books = getBooks();

const longBooks = books.filter((book) =>book.pages >500);
longBooks;

const longBooksWithMovie = books.filter((book) =>book.pages >500).filter((book) => book.hasMovieAdaptation );
longBooksWithMovie;

const adventureBooks = books.filter((books) => books.genres.includes("adventure")
);
adventureBooks;

const adventureBookTitles = books.filter((books) => books.genres.includes("adventure")).map((book) => book.title);  
adventureBookTitles;
*/


//***** The reduce Method ***********
/*
const books = getBooks();
books;

const pagesAllBooks =books.reduce((acc , book)=>acc+book.pages ,0);
pagesAllBooks;

const test = books.reduce((acc, book) => {
  if (book.pages > 500) acc++;
  return acc; // Explicitly return the accumulator
}, 0);

test;
*/


//***** The Array sort Method ***********
/*
const sort =[1,7,5,4,9,3];
const asncSorted = sort.sort((a, b) =>a-b); // ASNC way
asncSorted;
sort; // the orginal array changed 

const descSorted = sort.sort((a, b) =>b-a); // ASNC way
descSorted;


const books = getBooks();
books;

const sortedByPages =books.slice().sort((a, b) =>b.pages - a.pages);  
sortedByPages;
*/


//***** Working With Immutable Arrays ***********
/*
const books = getBooks();
books;

// add new book to array 
const newBook ={
  id: 6 ,
  title :"my life ",
  author:"yasmin"
};
const AfterAdd=[...books ,newBook];
AfterAdd;
books;// The orginal one does not change 

// delete  book from array 
const AfterDelete = AfterAdd.filter(book => book.id !==3);
AfterDelete;
AfterAdd;// The orginal one does not change

// update  book from array 
const AfterUpdate = AfterAdd.map(book => book.id ===3 ? {...book , pages:200}: book);
AfterUpdate;
*/


//*****  Asynchronous JavaScript Promises ***********
/*
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((data) => console.log(data));

console.log("jonas");
*/

//*****  Asynchronous JavaScript AsyncAwait ***********
/*
async function getTodos(){
  const res =await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);
  return data;
}

const todos =getTodos();
console.log(todos);
console.log("yasmin");
*/
