import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Card, FloatingLabel, Form, FormControl, Button } from 'react-bootstrap'

import { getPokeList } from './../../../../actions'

import './filter.scss'

const PageFilter = () => {
    const dispatch = useDispatch()

    const cardNumHandler = (evt) => {
        dispatch(getPokeList( null, evt.target.value))
    }

    const sortItemHandler = (evt) => {

    }

    const searchHandler = (evt) => {

    }


    return (
        <div className='page-filter'>
            <Card bg='info'>
                <Card.Body>
                    <Row>
                        <Col xs lg="2">
                            <Form.Select aria-label="Floating label select example" onChange={cardNumHandler} >
                                <option disabled  defaultValue>Cards per page</option>
                                <option value="10">10</option>
                                <option value="20">20</option>
                                <option value="50">50</option>
                            </Form.Select>
                        </Col>
                        <Col xs lg="2">
                            <Form.Select aria-label="Floating label select example" onChange={sortItemHandler} >
                                <option disabled defaultValue>Sort Items</option>
                                <option value="name">Name</option>
                                <option value="height">Height</option>
                                <option value="weight">weight</option>
                            </Form.Select>
                        </Col>
                        <Col xs>
                            <Form.Control id="searchPokemonFormInput" placeholder="Search Pokemon" onChange={searchHandler} />
                        </Col>                       
                        <Col xs lg="1">
                            <Button type="submit">Search</Button>
                        </Col>
                    </Row>
                </ Card.Body>

            </Card>

        </div>
    )
}

export default PageFilter
