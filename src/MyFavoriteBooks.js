import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
<<<<<<< HEAD:src/BestBooks.js
import FavBook from './Component/FavBook';

class MyFavoriteBooks extends React.Component {
  render() {
    return (
      <>
        <Jumbotron>
          <h1>My Favorite Books</h1>
          <p>This is a collection of my favorite books</p>
        </Jumbotron>
        <FavBook />
      </>
    );
=======
import BestBooks from './Component/BestBooks'

class MyFavoriteBooks extends React.Component {
  render() {
    return(
      <>
      <Jumbotron>
        <h1>My Favorite Books</h1>
        <p>
          This is a collection of my favorite books
        </p>
      </Jumbotron>
      <BestBooks/>
      </>
    )
>>>>>>> 454e01d6e4e0d8d7160e3eb6d2bd3718ec5af27a:src/MyFavoriteBooks.js
  }
}

export default MyFavoriteBooks;
