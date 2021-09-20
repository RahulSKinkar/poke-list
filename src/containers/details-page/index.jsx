import  React from 'react'
import { useSelector } from 'react-redux' 
import {
    useParams, useHistory
  } from "react-router-dom";
  import { Card, ListGroup, Button } from 'react-bootstrap'

const DetailsPage = () => {
    const { id } = useParams()
    const pokemonList = useSelector(state => state.poke_list.details)
    const history = useHistory()
    const pokemon = pokemonList.find((pokemon) => pokemon.id === Number(id))
    
    return (
        <div className='details-page'>
            <Button variant="outline-info" onClick={() => history.goBack()}>go back</Button>
            <Card.Img variant="top" src={pokemon.img} />
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
                            {pokemon?.abilities?.map(({ ability }, index) => 
                            <ListGroup.Item key={`${ability?.name}-${index}`}>{ability?.name}</ListGroup.Item>)}
                        </ListGroup>
                    </Card.Body>
        </div>
    )
}

export default DetailsPage