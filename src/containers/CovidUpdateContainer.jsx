import React, {useState, useEffect} from 'react'
import CountryList from '../components/CountryList'
import CountryDetail from '../components/CountryDetail'
import CountryTracker from '../components/CountryTracker'
import SearchCountry from '../components/SearchCountry'


const CovidUpdateContainer = () => {



    const [countries, setCountries] = useState(null)
    const [selectedCountry, setSelectedCountry] = useState(null)
    const [countriesTracker, setCountriesTracker] = useState([])
    const [search, setSearch] = useState(null)

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

    const handleCountryTracker = (country) => {
        if(!countriesTracker.includes(country)){
            const newCountry = [...countriesTracker, country]

            setCountriesTracker(newCountry)
        }
    }

    console.log(selectedCountry)

    return (
        <div className="covid-container">
            {/* <h2>Covid Updates Container</h2> */}
            {countries ? <CountryList countries={countries} onCountrySelect={onCountrySelect}/> : null}
            {selectedCountry ? <CountryDetail country={selectedCountry} saveCountry={handleCountryTracker}/> : null}
            <CountryTracker className="country-tracker" countries={countriesTracker}/>
            {countries ? <SearchCountry className="search-country" countries={countries} /> : null }
          
        </div>
    )
}

export default CovidUpdateContainer
