import axios from "axios";

const link = 'http://localhost:50725/api/intro'

//GET
export const getIntro = async (state, setState) => {
   let list = await axios.get(`${link}`)
    if(list.status === 200)
        setState({...state, data: list.data})
}

//POST
export const createIntro = async (title) => {
    let data = {
        title: title
    }
    await axios.post(`${link}`, data)
}

//PUT
export const updateIntro = async (title, id) => {
    let data = {
        title: title
    }
    await axios.put(`${link}/${id}`, data)
}