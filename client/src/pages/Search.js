import React, {Component} from 'react';
import API from "../utils/API";
import SearchForm from "../components/Search/Search";
import SavedForm from "../components/Saved/Saved"

class Search extends Component {
    state = {
        books: [],
        value: ""
    };

    componentDidMount(){
        this.bookSearch();
    };

    createBook = book => {
        return{
            _id: book.id,
            title: book.volumeInfo.title,
            authors: book.volumeInfo.authors,
            description: book.volumeInfo.description,
            image: book.volumeInfo.imageLinks.thumbnail,
            link: book.volumeInfo.previewLink
        }
    };

    bookSearch = query => {
        API.getBooks(query).then(res=>this.setState({
            books: res.data.items.map(book => this.createBook(book))
        })).catch(err => console.error(err));
    };

    handleInputChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.bookSearch(this.state.search);
    };

    render(){
        return(
            <div>
                <SearchForm
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                search={this.state.search}
                />
                <div className="container" id="savedContainer">
                    <h2>Your Results</h2>
                    <SavedForm books={this.state.books} />

                </div>
            </div>
        )
    }

}

export default Search;