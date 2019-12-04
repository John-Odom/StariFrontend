
const booksAPI = 'http://localhost:3000/books';
const unitsAPI = 'http://localhost:3000/units';

export const fetchBooks = () => {
    return fetch(booksAPI)
       .then(res => res.json())
} 

export const fetchUnits = () => {
   return fetch(unitsAPI)
      .then(res => res.json())
} 
