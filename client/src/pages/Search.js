import React from 'react';
import API from "../utils/API";
import SearchForm from "../components/Search/Search";
import SavedForm from "../components/Saved/Saved"

class Search extends React.Component {
    state = {
        books: [],
        query: ""
    };

    // componentDidMount(){
    //     this.bookSearch();
    // };

    createBook = bookData => {
        return{
            _id: bookData.id,
            title: bookData.volumeInfo.title,
            authors: bookData.volumeInfo.authors,
            description: bookData.volumeInfo.description,
            image: bookData.volumeInfo.imageLinks.thumbnail,
            link: bookData.volumeInfo.previewLink
        }
    };

    // bookSearch = e => {
    //     API.getBooks(this.state.query).then(res => {
    //         console.log(res.data)
    //         this.setState({books:res.data})
    //     })
        
    // };

    handleInputChange = e => {
        const value = e.target.value;
        this.setState({
            query: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        API.getBooks(this.state.query).then(res => {
            console.log(res.data)
            this.setState({books:res.data})
        }).catch(err => {console.log(err)})
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