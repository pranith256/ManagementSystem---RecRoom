import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Card, Image} from 'semantic-ui-react'
import {Link} from 'react-router-dom';
import {MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody} from 'mdb-react-ui-kit';
import "../Styles/main.css";
import axios from "axios";

const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
};

class AdminHandle extends Component {
    constructor() {
        super();
        this.state = {
        }
    }

    handleDelete(tokenID) {
        const config = {
            headers: {Authorization:`Bearer ${localStorage.getItem('jwt')}`}
        };
        const URL = "https://illinirecroom.herokuapp.com/remove-queue/" + tokenID;
        axios.delete(URL, config)
            .then(function (response) {
                console.log(response);
                this.setState({})
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        const noCharacter = Object.entries(this.props.characters).length === 0
            && this.props.characters.constructor === Object;
        if (noCharacter) {
            return (
                <Card className="resload">
                    <h3>Select a game </h3>
                </Card>
            )
        } else {
            const characters_view = this.props.characters.data.map((character_data, char_id) => {
                var token_id = String(character_data.token_id);
                var name = character_data.name;
                var turn = character_data.turn;
                var game = character_data.game;

                return (
                    <tr>
                        <td scope='col'>
                            {token_id}
                        </td>


                        <td scope='col'>
                            {name}
                        </td>
                        <td scope='col'>
                            {turn}

                        </td>
                        <td scope='col'>  {game}
                        </td>
                        <td>
                            <button className='delete' type='button' onClick={() => this.handleDelete(token_id)}>Delete
                            </button>
                        </td>
                    </tr>

                )
            });
            return (
                <table id='reservations'>
                    <tr>

                        <th>Token ID</th>
                        <th>Name</th>
                        <th>Turn in Queue</th>
                        <th>Game</th>
                        <th>Delete</th>
                    </tr>

                    {characters_view}

                </table>
            )
        }
    }
}

AdminHandle.propTypes = {
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
        game: PropTypes.string,
    })),
    total: PropTypes.number,
}
export default AdminHandle
