import React, {  useState } from 'react';
import './search.style.css';
import { State }  from 'country-state-city';

const Search = ({weatherData, setSelectedState}) => {
    // const country = weatherData.nearest_area[0].country[0].value;
    const [selectedOption, setSelectedOption] = useState('');
    const states  = State.getStatesOfCountry('EG');

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
        setSelectedState(e.target.value);
    }

    return(
        <div className="search">
            <select name="stateSelect" value={selectedOption} id="stateSelect" onChange={handleOptionChange}>


                {
                    states.map(state => {
                        const stateName = state.name.replace(' Governorate', '');

                        if(stateName === 'Monufia'|"Dakahlia"){
                            return(
                                <option value='cairo' key={stateName}>{stateName} </option>  
                              )
                        }
                        
                        return(
                          <option value={stateName} key={stateName}>{stateName} </option>  
                        )
                    })
                }
            </select>
        </div>
    );
}

export default Search;