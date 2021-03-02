import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  //Gets all books
  getBooks: function (query) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
  },

  //Delets books with id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },

  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};



  
  // Gets the book with the given id
  // getBook: function(id) {
    // return axios.get("/api/books/" + id);
  // },
  
  

