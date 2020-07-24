import React from 'react';
import Button from '@material-ui/core/Button';
import '../css/form.css';

class Otp extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    
    handleSubmit(e){
        e.preventDefault();
        let path='/';
        // if(this.props.validateUser(this.props.user.number))
        path='/home';
        // else
        //     path='/register';
        this.props.history.push(path);
    }
    
    render(){
        return(
            <React.Fragment>
                <h2>Welcome to EdRAHI</h2>
                <h4>An OTP has been sent to your mobile number.</h4>
                <form onSubmit={this.handleSubmit}>
                    <div className='form-row'>
                        {/* <label>Enter the OTP received on your Mobile: </label> */}
                        <input type="tel" id="otp" pattern="[0-9]{4}" placeholder="Enter the OTP..."></input>
                    </div>
                    <Button variant='contained' color='primary' onClick={this.handleSubmit}>Submit</Button>
                </form>
            </React.Fragment>
        )
    }
}

export default Otp;