import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card, ListGroup, Col } from 'react-bootstrap'
import { getPokemonDetails } from './../../../../actions'
// import './gallery.scss';

const PokemonCard = ({ api }) => {
    const dispatch = useDispatch()

    const id = api.split('/')[6]
    const pokemon = useSelector(state => state.poke_list.details[id])

    console.log('sdkfjanadsadfsafdasd' , id, pokemon)

    useEffect(() => {
        dispatch(getPokemonDetails(api))
    }, [dispatch])

    console.log(pokemon?.abilities)
    return (
        <Col xs={6} md={4}>
            <div className='card-page'>
                <Card>
                    <Card.Img variant="top" src={pokemon?.sprites?.other["official-artwork"]["front_default"]} />
                    <Card.Body>
                        <Card.Title> NAME: {pokemon?.name}</Card.Title>
                        <Card.Text>
                            HEIGHT: {pokemon?.height}
                        </Card.Text>
                        <Card.Text>
                            WEIGHT: {pokemon?.weight}
                        </Card.Text>
                        <Card.Title> ABILITIES: </Card.Title>
                        <ListGroup variant="flush">
                            {pokemon?.abilities.map(({ ability }, index) => <ListGroup.Item key={`${ability?.name}-${index}`}>{ability?.name}</ListGroup.Item>)}
                        </ListGroup>
                    </Card.Body>
                </Card>
            </div>
        </Col>
    )
}

export default PokemonCard
