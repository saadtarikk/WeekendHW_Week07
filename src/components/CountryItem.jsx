import React from 'react'

export const CountryItem = ({country, index}) => {
    return (
        <option value={index} key={index} >{country}</option>
    )
}

export default CountryItem