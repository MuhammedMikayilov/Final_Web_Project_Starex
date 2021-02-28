
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
import {createNewsData, getNewsList} from "./actions/news";
import UpdateNews from "./components/UpdateNews";
import DeleteNews from "./components/DeleteNews";

function Tables() {

  const [newsApi, setNewsApi] = React.useState();
  const [model, setModel] = React.useState({model: false, update: false, deleted: false});
  const [updateId, setUpdateId] = React.useState({id: 0, title: "", image: ""});
  const [deletedId, setDeletedId]= React.useState({id:0, title:""});
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
                    className="btn btn-success"
                    onClick={()=>setModel({model: true})}
                >
                  Create
                </button>
                {model.model && (
                    <div className="model mt-3 p-5" style={{border: "1px solid white", borderRadius: "30px"}}>
                      <div className="form">
                        <form>
                          <div className="form-group">
                            <label htmlFor="Title">Title</label>
                            <input
                                ref={titleRef}
                                type="text" id='Title'
                                className="form-control"
                                placeholder="Enter title"
                            />
                          </div>
                          <div className="form-group">
                            <label>Image</label>
                            <input
                                ref={imageRef}
                                type="text"
                                className="form-control"
                                placeholder="Image"
                            />
                          </div>
                         <div className="buttons text-center">
                           <button
                               className='btn btn-success'
                                   onClick={async (e)=> {
                                     e.preventDefault()
                                     await createNewsData(titleRef.current.value, imageRef.current.value)
                                     await getNewsList(newsApi, setNewsApi)
                                     setModel({model: false})
                                   }}
                           >
                             Create
                           </button>
                           <button className='btn btn-danger' onClick={()=>setModel({model: false})}>Cancel</button>
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
                      <tr key={key}>
                        <td>{item.image}</td>
                        <td>{item.title}</td>
                        <td className='text-center'>
                          <button
                              className="btn btn-info mr-2"
                              onClick={()=> {
                                setModel({update: true})
                                setUpdateId({id:item.id, title: item.title, image: item.image})
                              }}
                          >
                            Update
                          </button>
                          <button className="btn btn-warning mr-2">Info</button>
                          <button className="btn btn-danger"
                                  onClick={()=> {
                                    setModel({deleted: true})
                                    setDeletedId({id:item.id, title:item.title})
                                  }}
                          >Delete</button>
                        </td>
                      </tr>
                  ))}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
          <UpdateNews
              update={model.update}
              titleRef={titleRef}
              imageRef={imageRef}
              newsApi={newsApi}
              setModel={setModel}
              updateId={updateId}
              setNewsApi={setNewsApi}
              model={model.model}
              title={updateId.title}
          />

          <DeleteNews
              deleted={model.deleted}
              newsApi={newsApi}
              setNewsApi={setNewsApi}
              deletedId={deletedId.id}
              setModel={setModel}
              title={deletedId.title}
          />

        </Row>
      </div>
    </>
  );
}

export default Tables;
