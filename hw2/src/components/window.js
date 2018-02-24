import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';


class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            key: 0
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleRangeChange = this.handleRangeChange.bind(this);
    }

    handleNameChange(e) {
        this.setState({name: e.target.value});
    }

    handleRangeChange(e) {
        this.setState({range: e.target.value});
    }

    handleSubmit(e){
        e.preventDefault();
        this.setState({key: this.state.key + 1});
        const info = {
            key : this.state.key,
            name: this.state.name,
            range: this.state.range,
        };
        this.props.onAddNewInfo(info);
    }

    render() {
        return (
            <form>
                Name:<br/>
                <input type="text" name="name" placeholder="Chris" onChange={this.handleNameChange} required/><br/>
                Details:<br/>
                <input type="text" name="details"/><br/>
                Range:<br/>
                <input type="text" name="range" onChange={this.handleRangeChange} required/><br/>
                <hr/>
                <input type="submit" value="Submit" onClick={this.handleSubmit}/>
            </form>
        );
    }
}

class InfoList extends Component{

    constructor(props) {
        super(props);
        this.renderList = this.renderList.bind(this);
    }

    renderList() {
        return this.props.infoList.map((info) => {
            return (
                <li key={info.key}>
                    {info.name} {info.range}
                </li>
            );
        });
    }

    render() {
        return (
            <ul>
                {this.renderList()}
            </ul>
        )
    }

}


class Window extends Component {

    constructor(props) {
        super(props);
        this.state = {
            infoList : []
        };
        this.addNewInfo = this.addNewInfo.bind(this);
    }

    addNewInfo(info) {
        this.setState({infoList: this.state.infoList.concat(info)});
        console.log(info)
    }

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
                        <Form onAddNewInfo={this.addNewInfo}/>
                    </Col>
                    <Col id="div-form" sm={6} style={color2}>
                        <div id="div-note">
                            <p className="bg-warning">Info List</p>
                        </div>
                        <InfoList infoList={this.state.infoList}/>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default Window;