import { readFile, updateFile } from "./fileUtils.js";

/*-GETBOOK

// function sendResponse(code, body = null) {
//     const response = {
//       code,
//       body,
//     };
  
//     switch (code) {
//       case 200:
//         response.msg = "Ok";
//         break;
//       case 400:
//         response.msg = "Endpoint not valid";
//         break;
//       case 404:
//         response.msg = "Not found";
//         break;
//       case 500:
//         response.msg = "Internal Server Error";
//         break;
//       default:
//         response.msg = "Unknown status code";
//     }
  
//     return response;
//   }
  
//   function getBook (bookName,ISBN,year,genre,author,stock,publisher)  {
//     const books = readFile("books-test.json");
//     try {
//       if (!bookName) {
//         return sendResponse(400);
//       }
  
//       const book = books.find((book) => book.title === bookName);
  
//       if (book) {
//         return sendResponse(200, book.title);
//       }
  
//       return sendResponse(404);
//     } catch (error) {
//       return sendResponse(500, error);
//     }
//   };
  
          
//           console.log(getBook("Thinking, Fast and Slow"));
  





-FILTERBYGENRE

// function sendResponse(code, body = null) {
//   const response = {
//       code,
//       body,
//   };

//   switch (code) {
//       case 200:
//           response.msg = "Ok";
//           break;
//       case 400:
//           response.msg = "Endpoint not valid";
//           break;
//       case 404:
//           response.msg = "Not Found";
//           break;
//       case 500:
//           response.msg = "Internal Server Error";
//           break;
//       default:
//           response.msg = "Unknown status code";
//   }

//   return response;
// }

// function filterBy(property, value) {
// const books = readFile("books-test.json");
// const filteredBooks = books.filter(book => book[property] === value);
// return sendResponse(200, filteredBooks);
// }

// function getBooksByYear(year) {
// const filteredBooks = books.filter(book => book.year === year);
// return sendResponse(200, filteredBooks);
// }

// console.log(filterBy("genre", "Psychology"));

-LISTOFBOOKS
// function sendResponse(code, body = null) {
//   const response = {
//     code,
//     body,
//   };

//   switch (code) {
//     case 200:
//       response.msg = "Ok";
//       break;
//     case 400:
//       response.msg = "Endpoint not valid";
//       break;
//     case 404:
//       response.msg = "Not Found";
//       break;
//     case 500:
//       response.msg = "Internal Server Error";
//       break;
//     default:
//       response.msg = "Unknown status code";
//   }

//   return response;
// }

// function listBooks() {
//   const books = readFile("books-test.json");
//   const result = sendResponse(200, books.map((book) => {
//       return `${book.title} - ${book.author} - ${book.year}`;
//   }));

//   return result;
// }

// const booksList = listBooks();
// console.log(booksList);


-COUNTBYGENRE
// function sendResponse(code, body = null) {
//   const response = {
//       code,
//       body,
//   };

//   switch (code) {
//       case 200:
//           response.msg = "Ok";
//           break;
//       case 400:
//           response.msg = "Endpoint not valid";
//           break;
//       case 404:
//           response.msg = "Not Found";
//           break;
//       case 500:
//           response.msg = "Internal Server Error";
//           break;
//       default:
//           response.msg = "Unknown status code";
//   }

//   return response;
// }
//   function Availability(genre) { 
//     const books = readFile("books-test.json");
//     try {
//         const booksByGenre = books.filter(book => book.genre === genre);
//         const allAvailable = booksByGenre.some(book => book.stock > 0);
//         return sendResponse(200, allAvailable);
//     } catch (error) {
//         return sendResponse(404);
//     }
//     }
//     console.log(Availability("Business"));
    

-BOOKBYYEAR
// function sendResponse(code, body = null) {
//   const response = {
//       code,
//       body,
//   };

//   switch (code) {
//       case 200:
//           response.msg = "Ok";
//           break;
//       case 400:
//           response.msg = "Endpoint not valid";
//           break;
//       case 404:
//           response.msg = "Not Found";
//           break;
//       case 500:
//           response.msg = "Internal Server Error";
//           break;
//       default:
//           response.msg = "Unknown status code";
//   }

//   return response;
// }

// function getBooksByYear(year) {
//   const books = readFile("books-test.json");
//   try {
//       const booksOfYear = books.filter((book) => book.year === year);
//       return sendResponse(200, booksOfYear);
//   } catch (error) {
//       return sendResponse(500, error);
//   }
// }

// console.log(getBooksByYear(1988));


-COUNTBYYEAR

// function sendResponse(code, body = null) {
//   const response = {
//       code,
//       body,
//   };

//   switch (code) {
//       case 200:
//           response.msg = "Ok";
//           break;
//       case 400:
//           response.msg = "Endpoint not valid";
//           break;
//       case 404:
//           response.msg = "Not Found";
//           break;
//       case 500:
//           response.msg = "Internal Server Error";
//           break;
//       default:
//           response.msg = "Unknown status code";
//   }

//   return response;
// }

// function countby(property) {
//   const books = readFile("books-test.json");
//   const count = {};
//   for (const book of books) {
//       if (count[book[property]]) {
//           count[book[property]]++;
//       } else {
//           count[book[property]] = 1;
//       }
//   }
//   return sendResponse(200, count);
// }


// console.log(countby("genre"));

-AVAILABLEBOOKS
// function sendResponse(code, body = null) {
//   const response = {
//       code,
//       body,
//   };

//   switch (code) {
//       case 200:
//           response.msg = "Ok";
//           break;
//       case 400:
//           response.msg = "Endpoint not valid";
//           break;
//       case 404:
//           response.msg = "Not Found";
//           break;
//       case 500:
//           response.msg = "Internal Server Error";
//           break;
//       default:
//           response.msg = "Unknown status code";
//   }

//   return response;
// }

// function Availability(genre) { 
//   const books = readFile("books-test.json");
// try {
//   const booksByGenre = books.filter(book => book.genre === genre);
//   const allAvailable = booksByGenre.every(book => book.stock > 0);
//   return sendResponse(200, allAvailable);
// } catch (error) {
//   return sendResponse(404);
// }
// }
// console.log(Availability("Business"));*/


//ADDBOOK
// function sendResponse(code, body = null) {
//     const response = {
//         code,
//         body,
//     };

//     switch (code) {
//         case 200:
//             response.msg = "Ok";
//             break;
//         case 400:
//             response.msg = "Endpoint not valid";
//             break;
//         case 404:
//             response.msg = "Not Found";
//             break;
//         case 500:
//             response.msg = "Internal Server Error";
//             break;
//         default:
//             response.msg = "Unknown status code";
//     }

//     return response;
// }

// function addBook  (title, ISBN, year, genre, author, stock, publisher )  {
//     const newBook = {
//             title,
//             ISBN,
//             year,
//             genre,
//             author,
//             stock,
//             publisher
//     };

//     const books = readFile("books-test.json");
//     try {
//         if (!newBook) {
//             return sendResponse(400);
//         }
            

//         books.push(newBook);
//         return sendResponse(200, books);
//     } catch (error) {
//         return sendResponse(500, error);
//     }
// };

// console.log(addBook("The future of the tomorrow", "9780307881352", 2009, "suspense", "Neil Gaiman", 5, "Crown Business"));
// console.log({addBook});



//REMOVETITLEORISBN*/
// const books = readFile("books-test.json"); 

// function sendResponse(code, body = null) {
//     const response = {
//         code,
//         body,
//     };
  
//     switch (code) {
//         case 200:
//             response.msg = "Ok";
//             break;
//         case 400:
//             response.msg = "Endpoint not valid";
//             break;
//         case 404:
//             response.msg = "Not Found";
//             break;
//         case 500:
//             response.msg = "Internal Server Error";
//             break;
//         default:
//             response.msg = "Unknown status code";
//     }
  
//     return response;
// }

// function removeTitleOrISBN(titleOrISBN) {
//     try {
//         const index = books.findIndex(book => book.title === titleOrISBN || book.ISBN === titleOrISBN);

//         if (index === -1) {
//             return sendResponse(404, { msg: 'Book not found' });
//         }

//         const removedBook = books.splice(index, 1)[0];
//         return sendResponse(200, { removedBook });
//     } catch (error) {
//         return sendResponse(500, error);
//     }
// }

// const allBooks = () => {
//     return sendResponse(200, books);
// };

// console.log(allBooks());
// console.log(removeTitleOrISBN("9780307744432"));


//genreFullAvailability
// const books = readFile("books-test.json"); 

// function sendResponse(code, body = null) {
//     const response = {
//         code,
//         body,
//     };

//     switch (code) {
//         case 200:
//             response.msg = "Ok";
//             break;
//         case 400:
//             response.msg = "Endpoint not valid";
//             break;
//         case 404:
//             response.msg = "Not Found";
//             break;
//         case 500:
//             response.msg = "Internal Server Error";
//             break;
//         default:
//             response.msg = "Unknown status code";
//     }

//     return response;
// }

// function fullAvailability(genre) {
//     try {
//         const books = readFile("books-test.json");
//         const booksByGenre = books.filter(book => book.genre === genre);

//         if (booksByGenre.length === 0) {
//             return sendResponse(404, { msg: 'Genre not found or no books in the genre' });
//         }

//         const allAvailable = booksByGenre.every(book => book.stock > 0);
//         return sendResponse(200, allAvailable);
//     } catch (error) {
//         return sendResponse(500);
//     }
// }

// console.log(fullAvailability("psychology"));


