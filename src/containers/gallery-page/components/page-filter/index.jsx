import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Card, Form, Button } from 'react-bootstrap'

import { getPokeList, sortPokemonDetails } from './../../../../actions'
import './filter.scss'

const PageFilter = () => {
    const dispatch = useDispatch()
    const pokemonDetails = useSelector(state => state.poke_list.details)
    const filterDetails = useSelector(state => state.poke_list.mainDetails)
    const searchInputRef = useRef(null);

    const sortByName = (a, b) => {
        var nameA = a.name.toUpperCase();
        var nameB = b.name.toUpperCase(); 
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    }

    const sortHandler = (e, value = null) => {
        const sortedList = [...pokemonDetails]

        switch (e) {
            case 'weight':
                sortedList.sort((a, b) => a.weight - b.weight)
                return dispatch(sortPokemonDetails(sortedList))

            case 'name':
                sortedList.sort((a, b) => sortByName(a, b))
                return dispatch(sortPokemonDetails(sortedList))

            case 'height':
                sortedList.sort((a, b) => a.height - b.height)
                return dispatch(sortPokemonDetails(sortedList))
            case 'filter':
                let filteredList = filterDetails.filter(item => item?.name?.toUpperCase().includes(value.toUpperCase()))
                return dispatch(sortPokemonDetails(filteredList))

        }
    }


    const cardNumHandler = (evt) => {
        dispatch(getPokeList(null, evt.target.value))
    }

    const sortItemHandler = ({ target: { value } }) => {
        sortHandler(value)
    }

    const searchHandler = () => {
        sortHandler('filter', searchInputRef.current.value)
    }

    return (
        <div className='page-filter'>
            <Card bg='info'>
                <Card.Body>
                    <Row>
                        <Col xs={12} md={6} lg="2">
                            <Form.Select aria-label="Floating label select example" onChange={cardNumHandler} >
                                <option disabled defaultValue>Cards per page</option>
                                <option value="10">10</option>
                                <option value="20">20</option>
                                <option value="50">50</option>
                            </Form.Select>
                        </Col>
                        <Col xs={12} md={6}  lg="2">
                            <Form.Select aria-label="Floating label select example" onChange={sortItemHandler} >
                                <option defaultValue>Sort Items</option>
                                <option value="name">Name</option>
                                <option value="height">Height</option>
                                <option value="weight">weight</option>
                            </Form.Select>
                        </Col>
                        <Col xs={12} md lg>
                            <Form.Control id="searchPokemonFormInput" placeholder="Search Pokemon" ref={searchInputRef}/>
                        </Col>
                        <Col xs={12} md={3}  lg="1">
                            <Button type="submit" onClick={searchHandler} >Search</Button>
                        </Col>
                    </Row>
                </ Card.Body>

            </Card>

        </div>
    )
}

export default PageFilter