import React from 'react'
import { Card, ListGroup, Col } from 'react-bootstrap'
import { useHistory } from "react-router-dom";

const PokemonCard = ({ details }) => {
    let history = useHistory();
    return (
        <Col xs={6} md={4}>
            <div className='card-page'>
                <Card>
                    <Card.Img variant="top" src={details?.img} onClick={() => history.push(`/details/${details.id}`)}/>
                    <Card.Body>
                        <Card.Title> NAME: {details?.name}</Card.Title>
                        <Card.Text>
                            HEIGHT: {details?.height}
                        </Card.Text>
                        <Card.Text>
                            WEIGHT: {details?.weight}
                        </Card.Text>
                        <Card.Title> ABILITIES: </Card.Title>
                        <ListGroup variant="flush">
                            {details?.abilities.map(({ ability }, index) => (<ListGroup.Item key={`${ability?.name}-${index}`}>
                                {ability?.name}</ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Card.Body>
                </Card>
            </div>
        </Col>
    )
}

export default PokemonCard
