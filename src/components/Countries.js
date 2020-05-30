import React from 'react';

class Countries extends React.Component{
    componentDidMount() {
        document.title="Countries"
    }
    render(){
        return(<div><header>Welcome to Countries Screen</header></div>);
    }
}

export default Countries;