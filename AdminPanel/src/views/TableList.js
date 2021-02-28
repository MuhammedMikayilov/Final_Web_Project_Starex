
import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";
import {createNewsData, deleteNewsData, getNewsList, updateNewsData} from "./actions/news";
import UpdateNews from "./components/UpdateNews";

function Tables() {

  const [newsApi, setNewsApi] = React.useState();
  const [model, setModel] = React.useState(false);
  const [update, setUpdate] = React.useState(false);
  const [updateId, setUpdateId] = React.useState({id: 0, title: "", image: ""});
  const titleRef = React.useRef()
  const imageRef = React.useRef()

  React.useEffect(() => {
    getNewsList(newsApi, setNewsApi)
    console.log("l", newsApi)
  }, []);

  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">News Table</CardTitle>
                <button
                    className="btn btn-outline-success"
                    onClick={()=>setModel(true)}
                >
                  Create
                </button>

                {model && (
                    <div className="model mt-3 p-5" style={{border: "1px solid white", borderRadius: "30px"}}>
                      <div className="form">
                        <form>
                          <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Title</label>
                            <input ref={titleRef} type="text" className="form-control" id="exampleInputEmail1"
                                   aria-describedby="emailHelp" placeholder="Enter title"/>
                          </div>
                          <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input ref={imageRef} type="text" className="form-control" id="exampleInputPassword1"
                                   placeholder="Image" />
                          </div>
                         <div className="buttons text-center">
                           <button className='btn btn-success'
                                   onClick={async (e)=> {
                                     e.preventDefault()
                                     await createNewsData(titleRef.current.value, imageRef.current.value)
                                     await getNewsList(newsApi, setNewsApi)
                                     setModel(false)
                                   }}>
                             Create</button>
                           <button className='btn btn-success' onClick={()=>setModel(false)}>Cancel</button>
                         </div>
                        </form>
                      </div>
                    </div>
                )}
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Image</th>
                      <th>Title</th>
                      <th className="text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                  {newsApi?.data?.map((item, key)=>(
                      <>
                      <tr key={key}>
                        <td>{item.image}</td>
                        <td>{item.title}</td>
                        <td className='text-center'>
                          <button
                              className="btn btn-outline-info"
                              onClick={()=> {
                                setUpdate(true)
                                setUpdateId({id:item.id, title: item.title, image: item.image})
                              }}
                          >
                            Update
                          </button>
                          <button className="btn btn-outline-primary">Info</button>
                          <button className="btn btn-outline-danger"
                                  onClick={async ()=> {
                                    await deleteNewsData(newsApi, setNewsApi, item.id)
                                    await getNewsList(newsApi, setNewsApi)
                                  }}
                          >Delete</button>
                        </td>
                      </tr>
                      </>
                  ))}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
          <UpdateNews
              update={update}
              imageRef={imageRef}
              titleRef={titleRef}
              newsApi={newsApi}
              setUpdate={setUpdate}
              setModel={setModel}
              updateId={updateId}
              setNewsApi={setNewsApi}
              model={model}
          />
        </Row>
      </div>
    </>
  );
}

export default Tables;
