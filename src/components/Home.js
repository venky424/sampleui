import React from 'react';
import {Jumbotron, Container, Button} from 'react-bootstrap';
import '../css/home.css';

class Home extends React.Component{
    componentDidMount() {
        document.title="Home"
    }

    render(){
        return(
            <div>
            <Jumbotron className="AppHomeCon1" fluid>
               <h1 className="jumbotronheader">Sample UI</h1>
                <p className="jumbotronpara"> An Application to deal with future of the World</p>
                <Button variant="danger" className="jumbotronbutton">Learn More</Button>
            </Jumbotron>
            <Container className="categorycontainer">
              <h1 className="categoryheader">Categories</h1>
                <blockquote className="categorydescr">
                <p>"An option to set up list of items used in day to day basis and track their usage per day, Week, Month and Year. There will default list of items set up on this Category and more can be appended by you on your own. Below are the list set up by default."</p>
                </blockquote>
                <ul>
                    <li>Groceries</li>
                    <li>Electricity</li>
                    <li>Insurance</li>
                    <li>Mortgage</li>
                    <li>Cinema</li>
                </ul>
            </Container>
            <Container className="countriescontainer">
                    <h1 className="countriesheader">Countries</h1>
                    <blockquote className="countriesdescr">
                        <p>"Country-cyclopedia --> where you can get information about All countries in the world. Currently only the below list of info is available. New details for any country can be appended by on your own"</p>
                    </blockquote>
                    <ul>
                        <li>Short Code</li>
                        <li>Phone code</li>
                        <li>Currency</li>
                        <li>President/Prime Minister</li>
                        <li>Airways</li>
                    </ul>
             </Container>
             <Container className="currenciescontainer">
                    <h1 className="currenciesheader">Currencies</h1>
                    <blockquote className="currenciesdescr">
                        <p>"Currency-cyclopedia --> where you can get information about All currencies in the world. Currently only the below list of info is available. New details for any currency can be appended by on your own"</p>
                    </blockquote>
                    <ul>
                        <li>Short Code</li>
                        <li>FX Rate</li>
                        <li>Exchanges</li>
                        <li>Denominations</li>
                    </ul>
             </Container>
            </div>
        );
    }
}

export default Home;