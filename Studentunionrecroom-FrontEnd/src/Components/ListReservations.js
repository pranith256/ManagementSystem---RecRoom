import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Card, Image} from 'semantic-ui-react'
import "../Styles/main.css";

const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
};

class ListReservations extends Component {
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
                var num_p = character_data.mobile

                return (
                    <tr>
                        <td scope='col'>
                            {num_p}
                        </td>
                        <td scope='col'>
                            {name}
                        </td>
                        <td scope='col'>
                            {turn}
                        </td>
                        <td scope='col'>  {game}
                        </td>

                    </tr>

                )
            });
            return (
                <table id='reservations'>
                    <tr>

                        <th>Mobile Number</th>
                        <th>Name</th>
                        <th>Turn in Queue</th>
                        <th>Game</th>
                    </tr>

                    {characters_view}

                </table>
            )
        }
    }
}

ListReservations.propTypes = {
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
export default ListReservations
