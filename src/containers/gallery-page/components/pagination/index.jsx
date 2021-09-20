import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Button } from 'react-bootstrap'

import './pagination.scss'
import { getPokeList } from './../../../../actions'

const Pagination = ({ next, previous }) => {
    const dispatch = useDispatch()
    // const pokemon = useSelector(state => state.poke_list[id])

    return (
        <Row>
            <Col>
                <div className='page-pagination'>
                    {
                        previous && (
                            <Button variant="primary" onClick={() => dispatch(getPokeList(previous))}>Previous</Button>
                        )
                    }
                    {
                        next && (
                            <Button variant="primary" onClick={() => dispatch(getPokeList(next))}>Next</Button>
                        )
                    }
                </div>
            </Col>
        </Row>
    )
}

export default Pagination
