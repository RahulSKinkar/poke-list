import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { getPokeList } from './../../actions'

import './gallery.scss';

const GalleryPage = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPokeList())
    }, [dispatch])

    getPokeList()

    return (
        <div className='gallery-page'>
            This is Gallery Page
        </div>
    )
}

export default GalleryPage
