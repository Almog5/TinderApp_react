import React, { Component } from 'react';
import { Card } from 'react';
import { Button } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";


class CCFavorite extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Favorite_List: []
        }
        this.apiUrl = `http://proj.ruppin.ac.il/igroup20/Mobile/server/api/User`;
    }

    componentDidMount() {
        fetch(this.apiUrl + '/favorite', {
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
                    this.setState({
                        Favorite_List: result
                    }
                    )
                },
                (error) => {
                    console.log("err post=", error);
                });
    }

    render() {
        if (this.state.Favorite_List.length > 0) {
            return (
                
                <div className="row">
                    <Link to={'/'}>
                    <Button variant='secondary'>go back to search</Button>
                </Link>
                    {
                        this.state.Favorite_List.map((user,index) =>
                            <div className="col-3">
                                <img src={user.Img} key={index} alt="wait" />
                                <h3>{user.Name}</h3>
                                <h3>{user.Age} years old</h3>
                                <h3>lives in {user.City}</h3>
                            </div>
                        )
                    }
                </div>
            );
        }
        else return <div></div>
    }
}



export default CCFavorite;

/*
<div>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={user.Img} />
                                    <Card.Body>
                                        <Card.Title>{user.Name}</Card.Title>
                                        <Card.Text>
                                         age: {user.Age}
                                         height: {user.Height}
                                         City: {user.City}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
*/