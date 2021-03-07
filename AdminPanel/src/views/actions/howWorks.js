import axios from "axios";

const link = 'http://localhost:50725/api/howWorks'

//GET
export const getWork = async (state, setState) => {
   let list = await axios.get(`${link}`)
    if(list.status === 200)
        setState({...state, data: list.data})
}

//PUT
export const updateWork = async (title, description, icon, id) => {
    let data = {
        title: title,
        description: description,
        icon: icon
    }
    await axios.put(`${link}/${id}`, data)
}