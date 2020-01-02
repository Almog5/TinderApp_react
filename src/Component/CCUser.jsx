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
        this.apiUrl = `http://proj.ruppin.ac.il/igroup20/Mobile/server/api/User`;
    }
    next = () => {
        if (this.state.count < this.state.users.length - 1) {
            this.setState((prev) => ({
                count: prev.count + 1
            }), () => { console.log(this.state.count + 1); console.log(this.state.users.length) })
        }
        else alert("no more matches for you")
    }
    back = () => {
        if (this.state.count > 0) {
            this.setState((prev) => ({
                count: prev.count - 1
            }), () => { console.log(this.state.count); console.log(this.state.users.length) })
        }
        else alert("no more backward")
    }

    like = () => {
        console.log(this.state.users[this.state.count].Id);
        //pay attention case sensitive!!!! should be exactly as the prop in C#!
        /*const data = {
            Id: this.state.users[this.state.count].Id
        }; console.log(data.Id)*/
        fetch(this.apiUrl + '?id=' + this.state.users[this.state.count].Id, {
            method: 'POST',
            //body: JSON.stringify(data),
            headers: new Headers({
                'Content-type': 'application/json; charset=UTF-8' //very important to add the 'charset=UTF-8'!!!!
            })
        })
            .then(res => {
                console.log('res=', res);
                return res.json()
            })
            .then(
                (result) => {
                    console.log("fetch POST= ", result, "-id of favorit user ");
                    console.log(result.Avg);
                },
                (error) => {
                    console.log("err post=", error);
                });
                this.next();
    }


    render() {


        //console.log(u)
        //console.log(this.state.users)
        if (this.state.users[this.state.count].Premium === true)
            return (
                <div><CCPremium user={this.state.users[this.state.count]} like={this.like} next={this.next} back={this.back} /></div>
            )
        else return (
            <div><CCProfile user={this.state.users[this.state.count]} like={this.like} next={this.next} back={this.back} /></div>
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