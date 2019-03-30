import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Form from "../components/Form";
import Book from "../components/Book";
import Footer from "../components/Footer";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";
// import {DATA} from "cvsjsontest.json";

class Home extends Component {
  state = {
    books: [],
    q: "",
    message: "Search For A Location!"
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    console.log(event.target)
    this.setState({
      [name]: value
    });
  };
  getBooks = () => {
 
    API.getBooks(this.state.q)
      .then(res =>
        this.setState({
          books: res.data    
        })
        )
      .catch(() =>
        this.setState({
          books: [],
          message: "No New Location Found, Try a Different Query"
        })
      );
      
        var list = this.state.books;
        var searched = this.state.q;
        
        for (var i = 0; i < list.length; i++){
              if (list[i].NAME === searched){
                  var searchedPopulation = list[i].POPULATION;
                  let top = searchedPopulation*1.3;
                  let bottom = searchedPopulation*0.9; 
                  let results = [];
                                     

                 
                  console.log(bottom, searchedPopulation, top)
                  for (var i = 0; i < list.length; i++){
                      if (list[i].POPULATION <=  
                        top && list[i].POPULATION >= bottom){
                        results.push(list[i]);
                        
                        this.setState({
                        books: results    
                        })
                        
                        console.log(results);   
                        console.log(this.state.books)   
                                    
                      }
                      // console.log(results);
                      
                      
                  }
                  console.log(results);
                  
                  this.setState({
                    books: results,
                  }); 
                  console.log(this.state.books)
              }
              // this.setState({
              //   books: results,
              // }); 
              console.log(this.state.books)
              // console.log(results)
        }
        console.log(this.state.books)

        // function updateStateResults(results){
        //   this.setState({
        //     books: results,
        //   }); 
        // } 
        // updateStateResults();
        // console.log(this.state.books)
      
      
      //  console.log(results)
  };

  // this.setState({
  //   books: results,
  // }); 
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
                      CARBON={book.CARBON}
                      UNITTYPE={book.UNITTYPE}


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
