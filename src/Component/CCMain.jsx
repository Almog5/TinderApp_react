import React, { Component } from 'react';
import CCUser from './CCUser';
//import UsersAr from '../Users';
import {
    BrowserRouter as Router,
    withRouter
} from "react-router-dom";
import { parse } from 'querystring'

class CCMain extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userslist: [],
            fromage: 10
        }
        console.log(props)
        console.log(this.props.match.params.fromage)
        console.log(this.props.match.params.toage)
        console.log(this.props.match.params.gender)
        this.apiUrl = `http://localhost:61990/api/User`;
    }

    componentDidMount() {
        console.log("hello")
        fetch(this.apiUrl, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json; charset=UTF-8',
            })
        })
            .then(res => {
                console.log('res=', res);
                console.log('res.status', res.status);
                console.log('res.ok', res.ok);
                return res.json()
            })
            .then(
                (result) => {
                    console.log("fetch get Users= ", result);
                    result.map(st => console.log(st.Name));
                    console.log('result[0].FullName=', result[0].Name);
                    /////////////////////////////////////////////
                    //let newlist = UsersAr.filter((user) =>
                    let newlist = result.filter((user) =>
                        user.Age >= this.props.match.params.fromage && user.Age < this.props.match.params.toage && user.Gender === this.props.match.params.gender)
                    console.log('new list :', newlist)
                    this.setState({
                        userslist: newlist,
                        fromage: 2
                    }, () => {
                        console.log(this.state.userslist)
                        console.log(this.state.fromage)
                    })
                    //console.log(this.state.userslist)
                    //console.log(this.state.fromage)
                    /////////////////////////////////////////
                },
                (error) => {
                    console.log("err post=", error);
                });


    }

    render() {
        //console.log(UsersAr)
        //return     

        if (this.state.userslist.length > 0) {
            return (<div>
                <CCUser  userslist={this.state.userslist} />
            </div>
            );
        }
        else return (<div></div>)
    }
}

export default withRouter(CCMain);