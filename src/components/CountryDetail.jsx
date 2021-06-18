import React from 'react'

const CountryDetail = ({country}) => {
    


    

    return (
        <div className="country-detail">
            
            <p>Country: {country.name}</p>
            <p>Total Cases: {country.total_cases}</p>
            <p>Deaths: {country.deaths}</p>
            <p>Recovered: {country.recovered}</p>
            
        </div>
    )
}

export default CountryDetail
