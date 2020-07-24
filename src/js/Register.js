import React from 'react';
import '../css/form.css';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
// import {Link} from 'react-router-dom';

class Register extends React.Component{
    constructor(props){
        super(props);
        this.state={
            number: '',
            name: ''
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        // console.log(this.state);
        this.props.addUser(this.state);
        // e.target.reset();
        this.props.history.push('/otp');
    }

    handleChange(e){
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render(){
        return(
            <React.Fragment>
                <h2>Registration Form</h2>
                <Container>
                    <form className="registration-form" onSubmit={this.handleSubmit}>
                        <div className="form-row">
                            <label>Name: </label><input type='text' id='name' placeholder="Enter your name..." onChange={this.handleChange}></input><br/>
                        </div>
                        <div className="form-row">
                            <label>Mobile Number: </label><input type='tel' id='number' pattern="[0-9]{10}" placeholder="Enter your mobile number..." onChange={this.handleChange}></input><br/>
                        </div>
                        <Button type="submit" variant='contained' color='primary' onClick={this.handleSubmit}>Register</Button>
                    </form>
                </Container>
            </React.Fragment>
        )
    }
}

export default Register;