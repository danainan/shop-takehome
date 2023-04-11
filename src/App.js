import React, { Component } from 'react';
import { Card, Carousel, Container, Navbar, NavbarBrand, NavLink, Row, Button, Col, Table} from 'react-bootstrap';
import './App.css';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      qty_aventador: 0,
      qty_i8: 0,
      qty_fer488: 0,
      qty_aventador2:0,
    };
   
  }
 
  IncrementAventador2=()=>{
    this.setState({qty_aventador2: this.state.qty_aventador2 + 1});
  }
  DecrementAventador2=()=>{
    if(this.state.qty_aventador2 > 0){
      this.setState({qty_aventador2: this.state.qty_aventador2 - 1});
    }
  }

  
  incrementAventador= () => {
    this.setState({qty_aventador: this.state.qty_aventador + 1});
  }
  decrementAventador= () => { 
    if (this.state.qty_aventador > 0){
      this.setState({qty_aventador: this.state.qty_aventador - 1 });
    }
    else {
      this.setState({qty_aventador: 0 });
    } 
  }

  incrementi8= () => {
    this.setState({qty_i8: this.state.qty_i8 + 1});
  }
  decrementi8= () => { 
    if (this.state.qty_i8 > 0){
      this.setState({qty_i8: this.state.qty_i8 - 1 });
    }
    else {
      this.setState({qty_i8: 0 });
    } 
  }

  incrementfer488= () => {
    this.setState({qty_fer488: this.state.qty_fer488 + 1});
  }
  decrementfer488= () => { 
    if (this.state.qty_fer488 > 0){
      this.setState({qty_fer488: this.state.qty_fer488 - 1 });
    }
    else {
      this.setState({qty_fer488: 0 });
    } 
  }
  
  

















 

  render() {
    console.log(this.state);
    return (
      <div>
      <label>Aventador2</label>
      <br/>
      <button onClick={this.IncrementAventador2}>+</button>
      <button onClick={this.DecrementAventador2}>-</button>
      <br/>
      <label>x{this.state.qty_aventador2}</label>
      <br/>
      <label>Total :{this.state.qty_aventador2 * 3000}</label>

        
        <Navbar fixed="top" bg="dark" variant="dark">
          <Container>
            <NavbarBrand href="#home">MotoShop</NavbarBrand>
            <Navbar className="me-auto">
              <NavLink style={{color:'gray'}} href="#home">Home</NavLink>
              <NavLink style={{color:'gray'}} href="#hyper">Hypercar</NavLink>
              <NavLink style={{color:'gray'}} href="#super">Supercar</NavLink>
              <NavLink style={{color:'gray'}} href="#sport">Sport</NavLink>
            </Navbar>
          </Container>
        </Navbar>
        
        <Carousel id="home">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="aventador.jpg"
            />
           
          </Carousel.Item>
          <Carousel.Item>

            <img 
              
              className="d-block w-100"
              src="i8.jpg"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="fer488.jpg"
            />
        </Carousel.Item>
        </Carousel>
        
        
        
          <Container>
            <Row>
              <Col>
                <div class="pt-5" id="hyper">
                  <h1 id="spa">Hypercar</h1>
                </div>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="aventador.jpg" />
                <Card.Body>
                <Card.Title>Lamborghini Aventador</Card.Title>
                <Card.Text>
                  $300
                </Card.Text>
                <Button variant="primary" onClick={this.decrementAventador}>-</Button>
                <Button variant='secondary' disabled >Quantity :  <label id="qty_aventador" >{this.state.qty_aventador}</label></Button>
                <Button variant="primary" onClick={this.incrementAventador}>+</Button>
                </Card.Body>
                </Card>
              </Col>
              <Col>
              <div class="pt-5" id="super">
                  <h1 id="spa">Supercar</h1>
              </div>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="i8.jpg" />
                <Card.Body>
                <Card.Title>BMW i8</Card.Title>
                <Card.Text>
                  $200
                </Card.Text>
                <Button  variant="primary" onClick={this.decrementi8}>-</Button>
                <Button name="qty_i8" variant='secondary' disabled>Quantity :  <label id="qty_i8">{this.state.qty_i8}</label> </Button>
                <Button  variant="primary" onClick={this.incrementi8}>+</Button>
                </Card.Body>
                </Card>
              </Col>
              <Col>
              <div class="pt-5" id="sport">
                  <h1 id="spa">Sport</h1>
              </div>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="fer488.jpg" />
                <Card.Body>
                <Card.Title>Ferrari 488 GTB</Card.Title>
                <Card.Text>
                  $100
                </Card.Text>
                <Button variant="primary" onClick={this.decrementfer488}>-</Button>
                <Button name="qty_fer488" variant='secondary' disabled>Quantity :  <label id="qty_fer488">{this.state.qty_fer488}</label></Button>
                <Button variant="primary" onClick={this.incrementfer488}>+</Button>
                </Card.Body>
                </Card>
              </Col>
              <Col>
                <div class="pt-5">
                  <Table striped bordered hover size="sm" >
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Lamborghini Aventador</td>
                        <td>{this.state.qty_aventador}</td>
                        <td>{this.state.qty_aventador*300}</td>
                      </tr>
                      <tr>
                        <td>BMW i8</td>
                        <td>{this.state.qty_i8}</td>
                        <td>{this.state.qty_i8*200}</td>
                      </tr>
                      <tr>
                        <td>Ferrari 488 GTB</td>
                        <td>{this.state.qty_fer488}</td>
                        <td>{this.state.qty_fer488*100}</td>
                      </tr>
                      
                    </tbody>
                    <thead>
                      <tr>
                        <th>Total</th>
                        <th>{this.state.qty_aventador + this.state.qty_i8 + this.state.qty_fer488 }</th>
                        <th>{(this.state.qty_aventador*300) + (this.state.qty_i8*200) + (this.state.qty_fer488*100)}</th>
                      </tr>
                    </thead>
                  </Table>
                  <label>&copy;63103600 นาย ดนัยนันท์ ชำนาญไพสณฑ์</label>
                  <label>&copy;63103766 นาย ไตรทัพ มณีเจริญ</label>
                </div>
              </Col>
              
            </Row>
          </Container>
        





      </div>
    ); 
  }

}

export default App;
