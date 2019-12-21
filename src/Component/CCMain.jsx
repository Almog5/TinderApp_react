import React, { Component } from 'react';
import CCUser from './CCUser';
import UsersAr from '../Users';
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
    }
  
    componentDidMount() {
        console.log("hello")
        
        let newlist = UsersAr.filter((user) =>
            user.age >= this.props.match.params.fromage && user.age < this.props.match.params.toage && user.gender === this.props.match.params.gender)
        console.log('new list :', newlist)
        this.setState({
            userslist: newlist,
            fromage: 2
        },()=>{ console.log(this.state.userslist)
            console.log(this.state.fromage)})
        //console.log(this.state.userslist)
        //console.log(this.state.fromage)
    }

    /*next = () => {
        if (this.state.count < this.state.users.length - 1) {
            this.setState( (prev)=>({
                count: prev.count + 1
            }),()=>console.log(this.state.count))
        } 
    }*/

    render() {
        //console.log(UsersAr)
        //return     
            
                if (this.state.userslist.length > 0) {
                    return ( <div>
                <CCUser userslist={this.state.userslist}/>
            </div>   
            );
        }
        else return (<div></div>)
       }
   }
   
export default withRouter(CCMain);