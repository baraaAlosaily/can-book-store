import React from 'react';

import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';

export class FavBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      NumberBook: 0,
      DataOfBook: '',
    };
  }
  componentDidMount = () => {
    axios
      .get(`http://localhost:8032/books?email=seelbaraa@gmail.com`)
      .then((bookData) => {
        console.log(bookData);
        this.setState({
          NumberBook: bookData.data[0].books.length,
          DataOfBook: bookData.data[0].books,
        });
      });
  };

  render() {
    return (
      <div>
        {this.state.NumberBook > 0 &&
          this.state.DataOfBook.map((value) => (
            <>
              <Carousel>
                <Carousel.Item>
                  <p>{value.name}</p>
                </Carousel.Item>
                <Carousel.Item>
                  <p>{value.description}</p>
                </Carousel.Item>
                <Carousel.Item>
                  <p>{value.status}</p>
                </Carousel.Item>
              </Carousel>
            </>
          ))}
      </div>
    );
  }
}

export default FavBook;
