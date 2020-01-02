import React, { Component } from 'react';
//import UsersAr from '../Users';
import { Button } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";

class CCProfile extends Component {

    render() {
        return (
            <div className="container-fluid">
            <div className="row">
              <div className="col-12" id="start"><h1> click like if you like!</h1>
              <Link to={'/'}>
                    <Button variant='secondary'>go back to search</Button>
                </Link>
              </div>
              <div className="col-12"> <h1> {this.props.user.Name} </h1></div>
              <div className="col-12"> <img src={this.props.user.Img} alt="wait"/> </div>
              <div className="col-12"><h1>Age: {this.props.user.Age}</h1></div>
              <div className="col-12"><h1>Height: {this.props.user.Height}</h1></div>
              <div className="col-12"><h1>Location: {this.props.user.City} </h1></div></div>
              <div style={buttonStyle}><Button variant="secondary" onClick={this.props.like} >Like</Button>
              <Button variant="primary"  onClick={this.props.back} >back</Button>
              <Button variant="primary"  onClick={this.props.next} >Next</Button>  
              <Link to={'/favorite'}>
                    <Button variant='secondary'>favorite</Button>
                </Link></div>
              </div>
        );
    }
}

const buttonStyle={
    padding:"10px"
};

export default CCProfile;