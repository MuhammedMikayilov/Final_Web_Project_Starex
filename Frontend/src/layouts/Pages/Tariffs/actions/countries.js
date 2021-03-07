import axios from "axios";

export const CountiesList = {
  data: [
    {
      id: 1,
      image: "trk.png",
      name: "TURKIYE",
      hasLiquid: true,
    },
    {
      id: 2,
      image: "abs.png",
      name: "ABS",
      hasLiquid: false,
    },
    {
      id: 3,
      image: "chin.png",
      name: "CIN",
      hasLiquid: false,
    },
    {
      id: 4,
      image: "germany.jpg",
      name: "ALMANIYA",
      hasLiquid: false,
    },
  ],
};



const link = "http://localhost:50725/api/country"
export const getCountries = async (state, setState) =>{
  let response = await axios.get(`${link}`)

  // console.log("response", response);
  if(response.status === 200){
    setState({...state, data: response.data})
  }

  
}

