import React from 'react'
import { useSelector } from 'react-redux'
import {
    useParams, useHistory
} from "react-router-dom";

import './details.scss'
import { Card, Button, Container, Carousel } from 'react-bootstrap'

const DetailsPage = () => {
    const { id } = useParams()
    const pokemonList = useSelector(state => state.poke_list.details)
    const history = useHistory()
    const pokemon = pokemonList.find((pokemon) => pokemon.id === Number(id))

    const capitalizeFirstLetter = string => string.charAt(0).toUpperCase() + string.slice(1)

    const sprites = Object.values(pokemon.sprites).filter(imgItem => {
        return (typeof imgItem === 'string' || imgItem instanceof String)
    })
    sprites.unshift(pokemon.img)

    return (
        <div className='details-page'>
            <Container>
                <h1>Pokemon Details:</h1>
                <Card>
                    <Carousel>
                        {
                            sprites.map((imgUrl, index) => (
                                <Carousel.Item key={`card-img-${index}`}>
                                    <img
                                        className="d-block w-100"
                                        src={imgUrl}
                                        alt='Pokemon Images'
                                    />
                                </Carousel.Item>
                            ))
                        }
                    </Carousel>

                    <Card.Body>
                        <Card.Title> {capitalizeFirstLetter(pokemon?.name)}</Card.Title>
                        <Card.Text>
                            Height: {pokemon?.height}
                        </Card.Text>
                        <Card.Text>
                            Weight: {pokemon?.weight}
                        </Card.Text>
                        <Card.Text>
                            Species: {capitalizeFirstLetter(pokemon?.species?.name)}
                        </Card.Text>
                        <Card.Text>
                            Base Experience: {pokemon?.base_experience}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body className="text-muted">
                        <Card.Title>Abilities</Card.Title>
                        <div>
                            {
                                pokemon?.abilities.map(
                                    ({ ability }, index) => (
                                        <span className='chips' key={`${ability?.name}-${index}`}>
                                            {capitalizeFirstLetter(ability?.name)}
                                        </span>
                                    ))
                            }
                        </div>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body className="text-muted">
                        <Card.Title>Moves</Card.Title>
                        <div>
                            {
                                pokemon?.moves.map(
                                    ({ move }, index) => (
                                        <span className='chips' key={`${move?.name}-${index}`}>
                                            {capitalizeFirstLetter(move?.name)}
                                        </span>
                                    ))
                            }
                        </div>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="outline-info" onClick={() => history.goBack()}>Go Back</Button>
                    </Card.Footer>
                </Card>
            </Container>
        </div>
    )
}

export default DetailsPage