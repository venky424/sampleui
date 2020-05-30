import React from 'react';

class Home extends React.Component{
    componentDidMount() {
        document.title="Home"
    }

    render(){
        return(<div><header>Welcome to Home Screen</header></div>);
    }
}

export default Home;