import React, { Component } from 'react';
import API from "../../utils/API"


class SavedForm extends Component {
    state = {
        savedBooks: [],
    };

    componentDidMount() {
        API.savedBooks()
            .then(savedBooks => this.setState({ savedBooks: savedBooks }))
            .catch(err => console.error(err));
    }

    handleSave = book => {

        if (this.state.savedBooks.map(book => book._id).includes(book._id)) {
            API.deleteBook(book._id)
                .then(deletedBook => this.setState({ savedBooks: this.state.savedBooks.filter(book => book._id !== deletedBook._id) }))
                .catch(err => console.error(err));
        } else {
            API.saveBook(book)
                .then(savedBook => this.setState({ savedBooks: this.state.savedBooks.concat([savedBook]) }))
                .catch(err => console.error(err));
        }
    }

   // I am going to psuedocode here 
   // essentially what should happen on this page is that the db should return the saved books and display it on the page
   // however I cant seem to render it because my books in page/search.js wont save to the POST request


}

export default SavedForm;
