import React, { Component } from 'react';
import CCProfile from './CCProfile';
import CCPremium from './CCPremium';


class CCUser extends Component {
    constructor(props) {
        super(props)
        this.state = {   
            users: this.props.userslist,
            count: 0
        }
    }
    next = () => {
        if (this.state.count < this.state.users.length - 1) {
            this.setState( (prev)=>({
                count: prev.count + 1
            }),()=>{console.log(this.state.count+1); console.log(this.state.users.length)})
        } 
    }

    render() {
        
            
            //console.log(u)
            //console.log(this.state.users)
            if (this.state.users[this.state.count].premium === true)
                return (
                    <div><CCPremium user={this.state.users[this.state.count]} next={this.next} /></div>
                )
            else return (
                <div><CCProfile user={this.state.users[this.state.count]} next={this.next} /></div>
            )
        }
        /*return (
            <div>
                {
                    this.state.users.map((user, index) => user.premium === true ? <CCPremium key={index} user={user}/> : <CCProfile key={index} user={user} next={this.next}/> )
                }
                
            </div>
        );*/
    }




export default CCUser;