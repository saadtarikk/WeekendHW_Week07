import React from 'react'
import CountryDetail from './CountryDetail'




const SearchCountry = ({countries}) => {
    
    const handleSearch = (event) => {
        const userInput = countries[event.target.value]
        console.log(userInput)
        // const countryKeys = Object.keys(countries)
        // const isCountryStartingWithUserInput = (countryName) => {
        //     return countryName.startsWith(userInput)
        // }
        // const filteredCountryNames = countryKeys.filter(isCountryStartingWithUserInput)
        // const filteredCountries = getValuesForKeys(countries, filteredCountryNames)
        // const doNothingFunction = () => {}
        // return filteredCountries.map(country => CountryDetail({country, doNothingFunction}))[0]
    }

    // const handleSearchItem = countries.filter((country)) 

    





    return (
        <div>
            <input type="text" placeholder="Search" onChange={handleSearch}/>
            
        </div>
    )
}

export default SearchCountry
