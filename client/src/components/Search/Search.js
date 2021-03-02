import React from 'react'

function SearchForm(props) {
    return (
        <div className="container">
            <form>
                <div className="form-group">
                    <label>
                        <h3>
                            Search for a book and save it too!
                        </h3>
                    </label>
                    <input className="form-control" name="search" type="text" placeholder="Book Title" 
                    onChange={props.handleInputChange} value={props.search} id="search" ></input>
                    <button className="btn btn-danger" onClick={props.handleFormSubmit}>
                        Search
                    </button>

                </div>
            </form>
            
        </div>
    )
}

export default SearchForm;