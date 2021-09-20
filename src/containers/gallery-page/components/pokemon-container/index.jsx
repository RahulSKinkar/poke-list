import React from 'react'
import { useSelector } from 'react-redux'
import PokemonCard from './../poke-card'

const PokemonContainer = () => {
    const pokemon = useSelector(state => state.poke_list.details)
    return (
        <>
            {
                pokemon?.map(item => <PokemonCard details={item} key={item.id} />)
            }
        </>
    )
}

export default PokemonContainer
