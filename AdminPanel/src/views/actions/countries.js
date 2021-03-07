import axios from "axios"

const link = "http://localhost:50725/api/country"

// GET
export const getCountry = async (state, setState) => {
    let response = await axios(`${link}`);
    if(response.status === 200){
        setState({...state, data: response.data})
    }
}

export const getCountryContact = async (state, setState, id) => {
    let response = await axios.get(`${link}/${id}`)
    setState(response.data)
}
//POST
export const createCountry = async (name, image, hasLiquid, address, time) => {
    let data = {
        name: name,
        image: image,
        hasLiquid: hasLiquid,

        countryContacts:{
            address: address,
            time: time
        }
    }
    await axios.post(`${link}`, data)
}

//PUT
export const updateCountry = async (name, image, hasLiquid, address, time, id) => {
    let data = {
        name: name,
        image: image,
        hasLiquid: hasLiquid,
        
        countryContacts:{
            address: address,
            time: time
        }
    }
    await axios.put(`${link}/${id}`, data)
}
export const deleteCountryData = async (state, setState, id) => {
    await axios.delete(`${link}/${id}`, {method:'DELETE'})
}