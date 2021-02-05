import React, {Component} from 'react';
import {CountiesList} from "@layouts/Pages/Tariffs/actions/countries";
import IntroPages from "@components/Template/components/IntroPages";
import Countries from "@layouts/Pages/Stores/components/Countries";
import Store from "@layouts/Pages/Stores/components/Stores";



const Stores = (props)=> {
    const [countries, updateContries] = React.useState(CountiesList)
    const [countryId, setCountryId] = React.useState(countries.data[0].id)

    return (
       <div className='stores'>
            <IntroPages title={'Mağazalar'}/>
           <div className="container">
               <Countries
                   countries={countries}
                   updateContries={updateContries}
                   countryId={countryId}
                   setCountryId={setCountryId}
               />
               <hr/>
                <Store countryId={countryId} setCountryId={setCountryId}/>
           </div>
       </div>
    );
}

export default Stores;
