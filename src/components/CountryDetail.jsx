import React from 'react'
import CountryTracker from './CountryTracker'

const CountryDetail = ({country, saveCountry}) => {
    


    

    return (
        <div className="country-detail">
            
            <p>Country: {country.name}</p>
            <p>Total Cases: {country.total_cases}</p>
            <p>Deaths: {country.deaths}</p>
            <p>Recovered: {country.recovered}</p>
            <button value={country} type="submit" onClick={() => {saveCountry(country)}}>Track Updates</button>
            
        </div>
    )
}

export default CountryDetail
