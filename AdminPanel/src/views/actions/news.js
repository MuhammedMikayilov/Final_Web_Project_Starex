import axios from "axios";

export const getNewsList = async (state, setState) => {
    let list = await  axios.get("http://localhost:50725/api/news")

    if(list.status === 200){
        setState({...state, data: list.data})
    }
}

export const createNewsData = async (title, image) => {
    let data = {
        title: title,
        image: image,
        isDeleted: false
    }
    await axios.post("http://localhost:50725/api/news", data)
}

export const updateNewsData = async (title, image, id) => {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: title, image: image })
    };
    await fetch(`http://localhost:50725/api/news/${id}`, requestOptions)
}

export const deleteNewsData = async (state, setState, id) => {
    let res = await fetch(`http://localhost:50725/api/news/${id}`, { method: 'DELETE' })
}