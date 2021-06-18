import React from 'react'

export const CountryItem = ({country, index}) => {
    return (
        <option value={country} key={index} >{country}</option>
    )
}

export default CountryItem