import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';


class Form extends Component {

    render() {
        return (
            <form method="post">
                Name:<br/>
                <input type="text" name="name" placeholder="Chris" required/><br/>
                Details:<br/>
                <input type="text" name="details"/><br/>
                Range:<br/>
                <input type="text" name="range" required/><br/>
                <hr/>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}

class Window extends Component {

    render() {

        let color1 = {backgroundColor: '#ffeecc'};
        let color2 = {backgroundColor: '#cfff81'};
        return (
            <Grid className="container-fluid">
                <Row className="show-grid">
                    <Col id="div-form" sm={6} style={color1}>
                        <div id="div-note">
                            <p className="bg-warning">Add Your Info</p>
                        </div>
                        <Form/>
                    </Col>
                    <Col id="div-form" sm={6} style={color2}>
                        <div id="div-note">
                            <p className="bg-warning">Info List</p>
                        </div>
                    </Col>
                </Row>
            </Grid>
        );
    }

}

export default Window;