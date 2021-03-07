import axios from "axios";

const link = "http://localhost:50725/api/news"

export const getNewsList = async (state, setState) => {
    let list = await  axios.get(`${link}`)

    if(list.status === 200)
        setState({...state, data: list.data})
}

export const getNewsDetail = async (state,setState, id) => {
   let response = await axios.get(`${link}/${id}`)

    setState(response.data)
    // console.log("item", response)

}

export const createNewsData = async (title, image, imageDetail, content) => {
    let data = {
        title: title,
        image: image,

        newsDetail: {
            imageBig:imageDetail,
            content: content
        },
        isDeleted: false
    }
    await axios.post(`${link}`, data)
}

export const updateNewsData = async (title, image, id) => {

    let formData = new FormData()
    formData.append('title', title)
    formData.append('image', image)

    let data = {
        title: title,
        image: image,
        // photo: photo
    }
    await axios.put(`${link}/${id}`, data)
}

export const deleteNewsData = async (state, setState, id) => {
    await axios.delete(`${link}/${id}`, {method:'DELETE'})
}