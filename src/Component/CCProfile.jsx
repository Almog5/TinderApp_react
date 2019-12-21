import React, { Component } from 'react';
import UsersAr from '../Users';

class CCProfile extends Component {

    render() {
        return (
            <div className="container-fluid">
            <div className="row">
              <div className="col-12" id="start"><h1> click like if you like!</h1></div>
              <div className="col-12"> <h1> {this.props.user.name} </h1></div>
              <div className="col-12"> <img src={this.props.user.image} alt="wait"/> </div>
              <div className="col-12"><h1>Age: {this.props.user.age}</h1></div>
              <div className="col-12"><h1>Height: {this.props.user.height}</h1></div>
              <div className="col-12"><h1>Location: {this.props.user.location} </h1></div></div>
              <input type="button" value="Like"/><input type="button" onClick={this.props.next} value="next"/>
              </div>
        );
    }
}



export default CCProfile;