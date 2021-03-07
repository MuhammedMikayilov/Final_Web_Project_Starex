import React from 'react';
import {Card, CardBody, CardHeader, CardTitle, Col, Row, Table} from "reactstrap";
import {getCountry} from "../../actions/countries";
import UpdateCountry from "../../components/Country/UpdateCountry";

const CountrySection = (props)=> {
    function createMarkup(text) {
        return {__html: text};
    }

    const [countryApi, setCountryApi] = React.useState();
    const [model, setModel] = React.useState({model: false, info: false, update: false});
    const [updateId, setUpdateId] = React.useState({id: 0, table: 'Country', name: '', image: '', country: true})
    const [item, setItem] = React.useState()
    const [country] = React.useState({page:"country"})
    const titleRef = React.useRef()

    React.useEffect( ()=>{
        getCountry(countryApi, setCountryApi)
    },[])
    return (
        <div className="content">
            <Row>
                <Col md="12">
                    <Card>
                        <CardHeader>
                            <CardTitle tag="h4">Country Table</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <Table className="tablesorter" responsive>
                                <thead className="text-primary">
                                <tr>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Liquid</th>
                                    <th className="text-center">Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                {countryApi?.data?.map((item, key)=>(
                                    <tr key={key}>
                                        <td><img src={item.image}></img></td>
                                        <td>{item.name}</td>
                                        <td>{item.HasLiquid}</td>
                                        <td className='text-center'>
                                            <button
                                                className="btn btn-info mr-2"
                                                onClick={()=> {
                                                    setModel({update: true})
                                                    setUpdateId({id:item.id, name:item.name, image: item.image})
                                                    setItem(item)
                                                }}
                                            >
                                                Update
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </Table>
                        </CardBody>
                    </Card>
                </Col>
                <UpdateCountry
                    update={model.update}
                    titleRef={titleRef}
                    state={countryApi}
                    setState={setCountryApi}
                    itemId={updateId}
                    model={model.model}
                    item={item}
                    setModel={setModel}
                    page={country}
                />
            </Row>
        </div>
    );
}

export default CountrySection;