import React from 'react';
import {Card, CardBody, CardHeader, CardTitle, Col, Row, Table} from "reactstrap";
import UpdateWorks from '../../components/HowToWorks/UpdateWorks';
import {getWork} from "../../actions/howWorks";

const HowWorkSection = (props)=> {
    function createMarkup(text) {
        return {__html: text};
    }

    const [worksApi, setWorksApi] = React.useState();
    const [model, setModel] = React.useState({model: false, info: false, update: false});
    const [updateId, setUpdateId] = React.useState({id: 0, title: '', description: '', workPage: true});
    const [workPage] = React.useState({page:"workPage"});
    const titleRef = React.useRef();

    React.useEffect( ()=>{
        getWork(worksApi, setWorksApi)
    },[])
    return (
        <div className="content">
            <Row>
                <Col md="12">
                    <Card>
                        <CardHeader>
                            <CardTitle tag="h4">How To Works Table</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <Table className="tablesorter" responsive>
                                <thead className="text-primary">
                                <tr>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th className="text-center">Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                {worksApi?.data?.map((item, key)=>(
                                    <tr key={key}>
                                        <td><div dangerouslySetInnerHTML={createMarkup(item.title)} /></td>
                                        <td><div dangerouslySetInnerHTML={createMarkup(item.description)} /></td>
                                        <td className='text-center'>
                                            <button
                                                className="btn btn-info mr-2"
                                                onClick={()=> {
                                                    setModel({update: true})
                                                    setUpdateId({id:item.id, title:item.title, description:item.description})
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
                <UpdateWorks
                    update={model.update}
                    titleRef={titleRef}
                    state={worksApi}
                    setState={setWorksApi}
                    itemId={updateId}
                    model={model.model}
                    setModel={setModel}
                    page={workPage}
                />
            </Row>
        </div>
    );
}

export default HowWorkSection;