import axios from "axios";

const link = "http://localhost:50725/api/news"

export const getNewsList = async (state, setState) => {
    let list = await  axios.get(`${link}`)

    if(list.status === 200)
        setState({...state, data: list.data})

}

export const createNewsData = async (title, image) => {
    let data = {
        title: title,
        image: image,
        isDeleted: false
    }
    await axios.post(`${link}`, data)
}

export const updateNewsData = async (title, image, id) => {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: title, image: image })
    };
    await fetch(`${link}/${id}`, requestOptions)
}

export const deleteNewsData = async (state, setState, id) => {
     await fetch(`${link}/${id}`, { method: 'DELETE' })
}