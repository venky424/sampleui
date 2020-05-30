import React from 'react';

class Currencies extends React.Component{
    componentDidMount() {
        document.title="Currencies"
    }
    render(){
        return(<div><header>Welcome to Currencies Screen</header></div>);
    }
}

export default Currencies;