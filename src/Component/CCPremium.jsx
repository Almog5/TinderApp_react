import React, { Component } from 'react';


class CCPremium extends Component {
    render() {
        return (
            <div className="container-fluid">
            <div className="row">
              <div className="col-12" id="start"><h1> click like if you like!</h1></div>
              <div className="col-12"> <h1> {this.props.user.Name} </h1></div>
              <div className="col-12"> <img src={this.props.user.Img} alt="wait"/> </div>
              <div className="col-12"><h1>Age: {this.props.user.Age}</h1></div>
              <div className="col-12"><h1>Height: {this.props.user.Height}</h1></div>
              <div className="col-12"><h1>Location: {this.props.user.City} </h1></div>
              <div className="col-12"><h1>Hobies: {this.props.user.Hobbies} </h1></div></div>
              <input type="button" value="Like" onClick={this.props.like}/><input type="button" onClick={this.props.next} value="next"/>
              </div>
        );
    }
}



export default CCPremium;