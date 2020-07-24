import React from 'react';
import Login from './Login';
import Home from './Home';
import Register from './Register';
import Otp from './Otp';
import '../css/section.css';
import Container from '@material-ui/core/Container';
import {BrowserRouter, Route} from 'react-router-dom';
import logo from '../images/logo.jpg';

class Section extends React.Component{
    constructor(props){
        super(props);
        const users=[];
        for(let i=0;i<localStorage.length;i++){
            const key = localStorage.key(i);
            users.push(JSON.parse(localStorage.getItem(key)));
        }
        this.state={
            path: '/',
            currUser: {
                id: null,
                number: '',
                name: ''
            },
            users : users
        }
        this.validateUser=this.validateUser.bind(this);
        this.addUser=this.addUser.bind(this);
    }

    validateUser(number){
        return (this.state.users.some((u)=>{
            this.setState({
                currUser: u
            })
            return u.number===number;
        }));

    }

    addUser(user){
        user.id=Math.random();
        localStorage.setItem(user.id,JSON.stringify(user));
        let users = [...this.state.users,user];
        this.setState({
            currUser: user,
            users: users
        })
        // console.log(this.state);
    }

    render(){
        
        return(
            <BrowserRouter>
                <Container className="main-section">
                    <img src={logo} alt='logo' className="logo"></img>
                    <Route exact path='/' render={(props)=><Login {...props} validateUser={this.validateUser}/>} />
                    <Route path='/otp' render={(props)=><Otp {...props}  validateUser={this.validateUser} user={this.state.currUser}/>} />
                    <Route path='/register' render={(props)=><Register {...props} addUser={this.addUser}/>} />
                    <Route path='/home' render={(props)=><Home {...props} user={this.state.currUser}/>} />
                </Container>
            </BrowserRouter>
        )
    }
}

export default Section;