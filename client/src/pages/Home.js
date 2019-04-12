import React, { Component } from "react";
// import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Cartograph from "../components/Cartograph";
import BasicExample from "../components/Cartograph";
import Form from "../components/Form";
import Book from "../components/Book";
import Footer from "../components/Footer";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";
// import {DATA} from "cvsjsontest.json";
function filterBooks(list, component){
  var searched = component.state.q;
  

  for (var i = 0; i < list.length; i++){
    if (list[i].NAME === searched){
      var searchedPopulation = list[i].POPULATION;
      let top = searchedPopulation*1.15;
      let bottom = searchedPopulation*.95; 
      let results = [];  
      console.log(top)                                     
      for (var i = 0; i < list.length; i++){
        if (list[i].POPULATION <=  
            top && list[i].POPULATION >= bottom){
          results.push(list[i]);               
        }                
      }
      for (var i = 0; i < results.length; i++){
        if (list[i].NAME === ""){
          // results.NAME_0.push(results.NAME)
          results.pop(results[i]);
        }
      }
      component.setState({
        books: results    
      })
    }
  }
}
class Home extends Component {
  // constructor(props){
  //   super(props)
  //   this.getBooks = this.getBooks.bind(this)
  // }
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
  };
  getBooks = () => {
    // var list;
    API.getBooks(this.state.q, this.state.bottomValue, this.state.TopValue)
      .then(res => {
          filterBooks(res.data, this)
        }
      )
      .catch(() =>
        this.setState({
          books: [],
          message: "No New Location Found, Try a Different Query"
        })
      );

        

  };

  // this.setState({
  //   books: results,
  // }); 
  handleFormSubmit = event => {
    event.preventDefault();
    this.getBooks();
  };



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
          <Cartograph title="Map" icon="far">
            <div id="container">map div</div>
            <BasicExample />
            <div id="app"></div>
              {/* <Form
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                q={this.state.q}
              /> */}
              
          </Cartograph>
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
                  {console.log(this.state.books)}
                  {this.state.books.map(book => (
                    <Book

                      key={book.FID}
                      NAME={book.NAME}
                      NAME_0={book.NAME_0}
                      NAME_1={book.NAME_1}
                      NAME_2={book.NAME_2}
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
