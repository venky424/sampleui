import React from 'react';
import AppHeader from './AppHeader.js';
import AppMenuSwitch from "./AppMenuSwitch";

class App extends React.Component{
    render() {
        return (
            <div className="App">
            <AppHeader></AppHeader>
                <AppMenuSwitch></AppMenuSwitch>
            </div>
        );
    }
}

export default App;
