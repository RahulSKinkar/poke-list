import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Container, Row } from 'react-bootstrap'

import PokemonContainer from './components/pokemon-container'
import Pagination from './components/pagination'
import PageFilter from './components/page-filter'

import { getPokeList } from './../../actions'
import './gallery.scss';

const GalleryPage = () => {
    const dispatch = useDispatch()
    const pokeListState = useSelector(state => state?.poke_list?.list)
    const pokeListApi = useSelector(state => state?.poke_list?.api)

    useEffect(() => {
        dispatch(getPokeList(pokeListApi))
    }, [dispatch])

    return (
        <div className='gallery-page'>
            <Container>
                <PageFilter />
                <Row>
                    <PokemonContainer />
                </Row>
                <Pagination next={pokeListState.next} previous={pokeListState.previous} />
            </Container>
        </div >
    )
}

export default GalleryPage
