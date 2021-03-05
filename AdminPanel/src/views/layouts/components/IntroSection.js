import React from 'react';
import {Card, CardBody, CardHeader, CardTitle, Col, Row, Table} from "reactstrap";
import {getIntro} from "../../actions/intro";
import UpdateIntro from "../../components/Intro/UpdateIntro";

const IntroSection = (props)=> {
    function createMarkup(text) {
        return {__html: text};
    }

    const [introApi, setIntroApi] = React.useState();
    const [model, setModel] = React.useState({model: false, info: false, update: false, deleted: false});
    const [updateId, setUpdateId] = React.useState({id: 0, title: '', intro: true})
    const [intro] = React.useState({page:"intro"})
    const titleRef = React.useRef()

    React.useEffect( ()=>{
        getIntro(introApi, setIntroApi)
    },[])
    return (
        <div className="content">
            <Row>
                <Col md="12">
                    <Card>
                        <CardHeader>
                            <CardTitle tag="h4">Intro Table</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <Table className="tablesorter" responsive>
                                <thead className="text-primary">
                                <tr>
                                    <th>Title</th>
                                    <th className="text-center">Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                {introApi?.data?.map((item, key)=>(
                                    <tr key={key}>
                                        <td><div dangerouslySetInnerHTML={createMarkup(item.title)} /></td>
                                        <td className='text-center'>
                                            <button
                                                className="btn btn-info mr-2"
                                                onClick={()=> {
                                                    setModel({update: true})
                                                    setUpdateId({id:item.id, title:item.title})
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
                <UpdateIntro
                    update={model.update}
                    titleRef={titleRef}
                    state={introApi}
                    setState={setIntroApi}
                    itemId={updateId}
                    model={model.model}
                    setModel={setModel}
                    page={intro}
                />
            </Row>
        </div>
    );
}

export default IntroSection;