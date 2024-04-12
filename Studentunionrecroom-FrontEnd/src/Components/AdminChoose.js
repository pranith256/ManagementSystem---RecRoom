import React, {Component} from 'react';
import PropTypes from 'prop-types';
import "../Styles/main.css";
import "../Styles/toggleReg.css"
import {Card, Container, Image, Button} from 'semantic-ui-react';
import axios from 'axios';
import AdminHandle from './AdminHandle';
import {MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody} from 'mdb-react-ui-kit';
import Billiards from '../pictures/Billiards.png';
import Bowling from '../pictures/Bowling.png';
import BB from '../pictures/BB.png';

class AdminChoose extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: '', characters: {}, imageURL: BB};

        var public_key = '2d3152cc489d1fa0dc72a0c040e78ebb';
        var private_key = '950f1f8af699f18529e5b8025a734a262218bda2';
        var timestamp = Date.now();
        var msg = `${timestamp}${private_key}${public_key}`;
        var md5 = require('md5');
        var hash = md5(msg);
        this.baseUrl = `https://illinirecroom.herokuapp.com/get-queue`;
    }

    onchange = e => {
        this.setState({value: e.target.value});
        if (e.target.value === "Billiards")
            this.setState({imageURL: Billiards}, this.handleClick);
        else
            this.setState({imageURL: Bowling}, this.handleClick);

    }

    componentDidMount() {
        let url = "https://illinirecroom.herokuapp.com/get-queue"
        axios.get(url).then((response) => {
            console.log(response)
            this.setState({
                characters: response.data
            });
        }).catch((error) => {
            console.log(error)
            this.setState({
                characters: {}
            });
        });

    }

    toggleReg() {
        alert("Registration button toggled");
        axios.get(`https://illinirecroom.herokuapp.com/switch-website`)
            .then((res)=>{
               console.log("toggle successful")
            });
    }


    handleClick() {
        let url = ""
        if (this.state.value === "Bowling") {
            url = `${this.baseUrl}?game=bowling`;//url for bowling
        } else {
            url = `${this.baseUrl}?game=billiards`;//url for billiards
        }
        console.log(url)
        axios.get(url).then((response) => {
            console.log(response.data)
            this.setState({
                characters: response.data
            });
        }).catch((error) => {
            console.log(error)
            this.setState({
                characters: {}
            });
        });
    }

    render() {
        const {value} = this.state;
        let {imageURL} = this.state;
        console.log(imageURL);

        return (

            <React.Fragment>
                <Container>
                    <div className='radio'>
                        <img src={imageURL}/>
                        <button class='button' role="button" onClick={this.toggleReg}>Toggle Registration</button>
                       
                      
                            <form class='grid-row'>
                         
                                <label class='flex-item'><input
                                    type="radio"
                                    value="Billiards"
                                    name="radio"
                                    className="forminput"
                                    //checked={this.state.selectFilter === "Billiards"}
                                    // onChange={this.handleFilter}
                                    onChange={this.onchange}
                                />
                                    Billiards
                                </label>
                                <label class='flex-item'>
                                    <input
                                        type="radio"
                                        value="Bowling"
                                        name="radio"
                                        className="forminput"
                                        //checked={this.state.selectFilter === "Bowling"}
                                        // onChange={this.handleFilter}

                                        onChange={this.onchange}
                                    />
                                    Bowling
                                </label>
                            </form>
                        </div>
                        <div>

                        </div>

                    <div>
                        <AdminHandle characters={this.state.characters}/>
                    </div>
                </Container>
            </React.Fragment>
        );
    }
}

AdminChoose.propTypes = {
    count: PropTypes.number,
    limit: PropTypes.number,
    offset: PropTypes.number,
    results: PropTypes.arrayOf(PropTypes.shape({
        // id:PropTypes.number,
        // name:PropTypes.string,
        // modified:PropTypes.string,
        // thumbnail:PropTypes.shape({
        //   path:PropTypes.string,
        //   extension: PropTypes.string
        // })
        token_id: PropTypes.number,
        dateCreated: PropTypes.date,
        name: PropTypes.string,
        mobile: PropTypes.string,
        game: PropTypes.string
    })),
    total: PropTypes.number,
}
export default AdminChoose
