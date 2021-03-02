import React, { Component } from 'react';
import API from "../utils/API";
import SavedForm from "../components/Saved/Saved"

class Saved extends Component {

    state = {
        savedBooks: []
    }

    componentDidMount() {
        API.savedBooks().then(savedBooks => this.setState({ savedBooks: savedBooks })).catch(err => console.error(err));
    };

    render(){
        return(
            <div className="container">
                <h2>Saved Books</h2>
                <SavedForm  books={this.state.savedBooks}/>

            </div>
        )
    }
}

export default Saved;