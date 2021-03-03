import React from 'react';
import API from "../utils/API";
import SearchForm from "../components/Search/Search";
import SavedForm from "../components/Saved/Saved"

class Search extends React.Component {
    state = {
        books: [],
        query: "",
        savedBooks: {}
    };

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
            this.setState({books:res.data.items})
        }).catch(err => {console.log(err)})
    };


    //this function should save the books to the db but its not working properly. The id does save but it doesnt push to the db
    saveBook = (e)=>{
        const clickedid = e.target.value
        console.log(clickedid)

        const foundBook = this.state.books.find(book => book.id === clickedid)
        console.log(foundBook)

        this.setState({savedBooks: 
            {title:foundBook.volumeInfo.title,
                author:foundBook.volumeInfo.author,
                description:foundBook.volumeInfo.description,
                image:foundBook.volumeInfo.image,
                link:foundBook.volumeInfo.link
            }} , () => {
                API.saveUserBook({
                    title:this.state.savedBooks.title,
                author:this.state.savedBooks.author,
                description:this.state.savedBooks.description,
                image:this.state.savedBooks.image,
                link:this.state.savedBooks.link
                }).then(() => {
                    this.setState({savedBooks: {}})
                })
            })
    } 

    

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
                    {this.state.books.map(book => 
                    <div className="card" key={book.id}>
                        <div className="cardBody">
                       <p>{book.volumeInfo.title}</p>
                       <p>{book.volumeInfo.author}</p>
                       <p>{book.volumeInfo.description}</p>
                       <img src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "No Image"}></img>
                       {/* <p>{book.volumeInfo.previewLink}</p> */}
                        </div>
                        <button className="btn btn-primary" 
                        onClick={(() => {window.location.href = book.volumeInfo.previewLink})}> View</button>
                        <button className="btn btn-warning"
                        onClick={this.saveBook} value={book.id}> Save </button>
                    </div>

                    )}

                </div>
            </div>
        )
    }

}

export default Search;