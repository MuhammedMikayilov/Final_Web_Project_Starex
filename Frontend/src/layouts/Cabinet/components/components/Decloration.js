import React from 'react'
import  CountriesComp  from "@components/Template/components/Countries";
import { CountiesList, getCountries } from "@layouts/Pages/Tariffs/actions/countries";

 const Decloration =(props) => {
  const [countryApi, setCountryApi] = React.useState()
    // const [hasLiquid, hasWater] = useState(true);
    const [selectId, setId] = useState(countryApi.data[0].id);
    React.useEffect(()=>{
        getCountries(countryApi, setCountryApi)
      }, [])
      console.log("c",countryApi);
    return (
        <div className="row justify-content-center">
            <div className="col-md-12">
                <div style={{backgroundColor:"white", padding:"60px 100px"}}>
                <CountriesComp
                // hasLiquid={hasLiquid}
                // hasWater={hasWater}
                selectId={selectId}
                setId={setId}
              />
                </div>
              

              {/* <div className="tariffs">{forCountyiesContact()}</div> */}
            </div>
          </div>
    )
}

export default Decloration;
