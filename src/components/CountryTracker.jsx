import React from 'react'

export const CountryTracker = ({countries}) => {

    const getCountriesTracker = countries?.map((country, index) => {
        return(
        
           <div key={index}> 
           {/* <p>Countries followed</p> */}

            <li>
            Country: {country.name}  
            </li>
            <li>
            Deaths: {country.deaths}
            </li>
            <li>
            Total Cases: {country.total_cases}
            </li>
            <br></br>
            </div>
            
    
        )
    })
    return (
        <div className="wrap">
            <div className="country-tracker">
            
                <ul>
                {getCountriesTracker}   
                </ul>

            </div>
            
        </div>
    )
}


export default CountryTracker