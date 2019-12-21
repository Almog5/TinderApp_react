import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";

class CCWelcom extends Component {
    constructor (props){
        super(props)
    
    this.state = {
        gender: "",
        FromAge: 0,
        ToAge: 0
    }
}

    radiocheck = (e) => {
        this.setState({
            gender: e.currentTarget.value
        })
        console.log(this.state.gender)
    }

    fromage = (e) => {
        this.setState({
            FromAge: parseInt(e.target.value)
        })
        console.log(this.state.FromAge)
    }

    toage = (e) => {
        this.setState({
            ToAge: parseInt(e.target.value)
        })
        console.log(this.state.ToAge)
    }

    render() {
        return (
            <div>
                <h1>Filter your search</h1>
                Male
                <input type="radio" name="gender" value="male" onChange={this.radiocheck} /><br />
                Female
                <input type="radio" name="gender" value="female" onChange={this.radiocheck} /><br />
                From age
                <input type="text" onChange={this.fromage} />
                To age
                <input type="text" onChange={this.toage} /><br />
                <Link to={'/main/'+this.state.FromAge+'/'+this.state.ToAge+'/'+this.state.gender}>
                    <Button variant='primary'>go</Button>
                </Link>

            </div >
        );
    }
}

export default withRouter(CCWelcom);