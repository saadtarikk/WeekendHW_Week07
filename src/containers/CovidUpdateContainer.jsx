import React, {useState, useEffect} from 'react'
import CountryList from '../components/CountryList'
import CountryDetail from '../components/CountryDetail'


const CovidUpdateContainer = () => {



    const [countries, setCountries] = useState([])
    const [selectedCountry, setSelectedCountry] = useState([])

    useEffect(() => {
        getCovidUpdates()
    },[])

    const getCovidUpdates = function(){
        fetch('https://api.quarantine.country/api/v1/summary/latest')
        .then(res => res.json())
        .then(countries => setCountries(countries["data"]["regions"]))
    }

    const onCountrySelect = (country) => {
        setSelectedCountry(country)
    }



    return (
        <div className="covid-container">
            <h2>Covid Updates Container</h2>
            {CountryList ? <CountryList countries={countries} onCountrySelect={onCountrySelect}/> : null}
            {CountryDetail ? <CountryDetail country={selectedCountry}/> : null}
          
        </div>
    )
}

export default CovidUpdateContainer
