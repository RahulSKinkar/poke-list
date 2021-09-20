import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Container, Row, Col, Button } from 'react-bootstrap'

import PokemonCardGroup from './components/poke-card'
import Pagination from './components/pagination'
import PageFilter from './components/page-filter'

import { getPokeList } from './../../actions'
import './gallery.scss';

const GalleryPage = () => {
    const dispatch = useDispatch()
    const [items, setItems] = useState([])
    const fetchPokeList = () => dispatch(getPokeList())
    const { results: pokemonList = [], count, next, previous } = useSelector(state => state?.poke_list?.list)
  

    useEffect(() => {
        dispatch(getPokeList())
    }, [dispatch])

    console.log(pokemonList, 'my list')
    return (
        <div className='gallery-page'>
            <Container>
                <PageFilter />
                <Row>
                    {
                        pokemonList?.map((item, index) => <PokemonCardGroup api={item.url} key={`${item.name}-${index}`} />)
                    }
                </Row>
                <Pagination next={next} previous={previous} />
            </Container>
        </div >
    )
}

export default GalleryPage
