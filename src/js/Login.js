import React from 'react';
import '../css/form.css';
import Button from '@material-ui/core/Button';
// import {Link} from 'react-router-dom';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            number: null
        }
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }

    handleChange(e){
        this.setState({
            number: e.target.value
        })
    }
    
    handleSubmit(e){
        e.preventDefault();
        let path='/';
        if(this.props.validateUser(this.state.number)){
            path= '/otp'
        }
        else{
            path= '/register'
        }
        // console.log(this.state);
        // console.log(path);
        // e.target.reset();
        this.setState({
            number: ""
        })
        this.props.history.push(path);
    }

    render(){
        

        return(
            <div className='login-form'>
                <h2>Welcome to EdRAHI</h2>
                <form className="login-form" onSubmit={this.handleSubmit}>
                    <div className="form-row">
                        <label>Mobile Number: </label>
                        <input type="tel" id="number" pattern="[0-9]{10}" placeholder="Enter your mobile number..." onChange={this.handleChange}></input><br></br>
                    </div>
                    <Button variant='contained' color='primary' onClick={this.handleSubmit}>Submit</Button>
                    {/* <button>Sign In</button> */}
                </form>
            </div>
        )
    }
}

export default Login;