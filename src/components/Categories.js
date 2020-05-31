import React from 'react';
import {Card, Container,Table} from 'react-bootstrap';
import "../css/category.css";


class Categories extends React.Component{
    componentDidMount() {
        document.title="Categories"
    }

   render(){
        return(<div>
            <Container fluid className="categorycardcont">
                <Card>
                    <Card.Header className="categorycarddheader">Category Search</Card.Header>
                    <Card.Body>Place to search, create, update and suspend categories</Card.Body>
                </Card>
            </Container>
            <Container fluid className="categorytablecont">
                <Table striped bordered hover variant="dark">
                    <thead>
                    <tr>
                        <th>Category</th>
                        <th>Description</th>
                        <th>Created By</th>
                        <th>Created On</th>
                        <th>Updated By</th>
                        <th>Updated On</th>
                    </tr>
                    </thead>
                </Table>
            </Container>
        </div>);
    }
}

export default Categories;