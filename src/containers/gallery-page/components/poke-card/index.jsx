import React from 'react'
import { Card, ListGroup, Col } from 'react-bootstrap'
import { useHistory } from "react-router-dom";

import './poke-card.scss'

const PokemonCard = ({ details }) => {
    let history = useHistory();

    const capitalizeFirstLetter = string => string.charAt(0).toUpperCase() + string.slice(1)

    return (
        <Col xs sm={6} md={4} lg={3}>
            <div className='card-page'>
                <Card>
                    <Card.Img variant="top" src={details?.img} onClick={() => history.push(`/details/${details.id}`)} />
                    <Card.Body>
                        <Card.Title> {capitalizeFirstLetter(details?.name)}</Card.Title>
                        <Card.Text>
                            Height: {details?.height}
                        </Card.Text>
                        <Card.Text>
                            Weight: {details?.weight}
                        </Card.Text>
                    </Card.Body>
                    <Card.Body className="text-muted">
                        <Card.Title>Abilities</Card.Title>
                        <div>
                            {
                                details?.abilities.map(
                                    ({ ability }, index) => (
                                        <span className='chips' key={`${ability?.name}-${index}`}>
                                            {capitalizeFirstLetter(ability?.name)}
                                        </span>
                                    ))
                            }
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </Col>
    )
}

export default PokemonCard
