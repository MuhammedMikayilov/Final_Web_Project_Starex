import React, { useEffect, ReactElement } from 'react';

const AboutItems = (props)=> {
    function createMarkup(text) {
        return {__html: text};
    }
    const {state, setState} = props;
    const [state2, setState2] = React.useState();


   useEffect( () => {
       let loadData = async () => {
           let url = 'http://localhost:50725/api/about';
           const response = await fetch(url);
           const data = await response.json();
           console.log("D", data)
       }
       loadData();
   }, [])




    return (
        <div className='row items-abouts mt-5'>
            {
                state.data.map((item, key)=>(
                    <div className='col-md-4 pb-4' key={key}>
                       <div className={`items ${key===state.data.length-1 ? "" : "border-right" }`}>
                           <div className="icons">{item.icon}</div>
                           <h3 className="title-card">{item.title}</h3>
                           <div className="description-card" dangerouslySetInnerHTML={createMarkup(item.description)} />
                       </div>
                    </div>
                ))
            }
        </div>
    );
}

export default AboutItems;
