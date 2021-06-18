import React from 'react';
import CountryItem from './CountryItem'

const CountryList = ({countries, onCountrySelect}) => {



    const handleChange = (event) => {
        const chosenCountry = countries[event.target.value]
        console.log(event.target.value)

        onCountrySelect(chosenCountry)
    }
    
    

    const countrySelectItem = Object.keys(countries).map((country, index) => {
        return<CountryItem country={country} index={index} key={index}/>
    })
    

    return (
        <select className="country-list" onChange={handleChange}>
            {countrySelectItem}
        </select>
    );
    
}
    

export default CountryList;
