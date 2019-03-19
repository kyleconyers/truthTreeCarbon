import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Form from "../components/Form";
import Book from "../components/Book";
import Footer from "../components/Footer";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";

class Home extends Component {
  state = {
    books: [],
    q: "",
    message: "Search For A Location!"
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    // console.log("handleinputchange", value);
  };

  getBooks = () => {
    API.getBooks(this.state.q)
      .then(res =>
        this.setState({
          books: res.data
          
          
        })
        )
        // console.log(this.data)

     
      .catch(() =>
        this.setState({
          books: [],
          message: "No New Location Found, Try a Different Query"
        })

      );
      console.log(this.state.books);
      console.log("comment",API)
      console.log(this.state.q)
      console.log()
      var obj = this.state.books;
      
      // the code you're looking for
      var needle = this.state.q;
      
      // iterate over each element in the array
      for (var i = 0; i < obj.length; i++){
        // console.log("infor", obj)
        // look for the entry with a matching `code` value
        if (obj[i].NAME == needle){
           // we found it
          // obj[i].name is the matched result
          console.log("inif", obj[i])
          
          this.setState({
            books: obj[i]
          })
        }
      }


  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.getBooks();
  };

  // handleBookSave = id => {
  //   const book = this.state.books.find(book => book.id === id);

  //   API.saveBook({
  //     googleId: book.id,
  //     title: book.volumeInfo.title,
  //     subtitle: book.volumeInfo.subtitle,
  //     link: book.volumeInfo.infoLink,
  //     authors: book.volumeInfo.authors,
  //     description: book.volumeInfo.description,
  //     image: book.volumeInfo.imageLinks.thumbnail
  //   }).then(() => this.getBooks());
  // };

  render() {
    return (
      <Container>
        <Row>
          {/* <Col size="md-12">
            <Jumbotron>
              <h1 className="text-center">
                <strong>Climate Data Comparison</strong>
              </h1>
              <h2 className="text-center">Carbon Emission by Population</h2>
            </Jumbotron>
          </Col> */}
          <Col size="md-12">
            <Card title="Location Search" icon="far">
              <Form
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                q={this.state.q}
              />
              
            </Card>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Card title="Results">
              {this.state.books.length ? (
                <List>
                  {this.state.books.map(book => (
                    <Book
                      key={book.FID}
                      NAME={book.NAME}
                      POPULATION={book.POPULATION}
                      CARON={book.CARBON}


                      // key={book.id}
                      // title={book.volumeInfo.title}
                      // subtitle={book.volumeInfo.subtitle}
                      // link={book.volumeInfo.infoLink}
                      // authors={book.volumeInfo.authors.join(", ")}
                      // description={book.volumeInfo.description}
                      // image={book.volumeInfo.imageLinks.thumbnail}
                      Button={() => (
                        <button
                          onClick={() => this.handleBookSave(book.id)}
                          className="btn btn-primary ml-2"
                        >
                          Save
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                <h2 className="text-center">{this.state.message}</h2>
              )}
            </Card>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

export default Home;
