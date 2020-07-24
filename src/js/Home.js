import React from 'react';

class Home extends React.Component{
    render(){
        return(
            <div className="home">
                <h2>Welcome {this.props.user.name}</h2>
            </div>
        )
    }
}

export default Home;