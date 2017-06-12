import React from 'react';

const BookList = React.createClass({

  getInitialState() {
    return ({
        books: [],
        selectedBooks: [],
        error: false
      }
    );
  },

  _handleCheck(event) {
    console.log('check : value = ', event.target.value);
    let {selectedBooks} = this.state;
    const index = selectedBooks.indexOf(event.target.value);
    let error = false;
    if (event.target.checked) {
      if (index === -1) {
        selectedBooks.push(event.target.value);
      }
    } else {
      if (index > -1) {
        selectedBooks.splice(index, 1);
      }
    }
    if (selectedBooks.length === 0) {
      error = 'Attention Ponpon, vous devez sélectionner un ouvrage.';
    }
    this.setState({
      selectedBooks: selectedBooks,
      error: error
    });

  },

  _renderError() {
    return(
      <div className='alert alert-danger'>{this.state.error}</div>
    )
  },

  _handleSubmit(event) {
    event.preventDefault();
    let {selectedBooks} = this.state;
    if (selectedBooks.length === 0) {
      console.log('aucune livre de sélectionner');
      this.setState({error: 'Merci PonPon de sélectionner au moins un ouvrage.'});
    } else {
      this.setState({error: false});
      this.props.updateFormData({
        selectedBooks: selectedBooks
      });
    }
  },

  _renderCheckBox(book) {
    return (
      <div className="checkbox">
        <label>
          <input type="checkbox" value={book.id} onChange={this._handleCheck} />
          <span>{book.name} -- {book.author}</span>
        </label>
      </div>
    );
  },

  _renderBooks() {
    const{books} = this.state;
    if (books) {
      return books.map((book) => this._renderCheckBox(book));
    }
  },

  componentDidMount() {
    const books = [
      { id: 1, name: 'Zero to One', author: 'Peter Thiel' },
      { id: 2, name: 'Monk who sold his Fearrary', author: 'Robin Sharma' },
      { id: 3, name: 'Wings of Fire', author: 'A.P.J. Abdul Kalam' }
    ];
    this.setState({books: books});
  },

  render() {
    const {error} = this.state;
    return(
      <div>
        <h3>Choose from wide variety of books available in our stores.</h3>
        {error && this._renderError()}
        <form className="form-book" onSubmit={this._handleSubmit}>
          {this._renderBooks()}
          <input type="submit" className="btn btn-success" />
        </form>
      </div>
    )
  }

});

module.exports = BookList;
