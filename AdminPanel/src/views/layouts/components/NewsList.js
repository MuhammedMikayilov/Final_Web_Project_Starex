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
import {getNewsDetail, getNewsList} from "../../actions/news";
import UpdateNews from "../../components/News/UpdateNews";
import DeleteNews from "../../components/News/DeleteNews";
import CreateNews from "../../components/News/CreateNews";
import DetailNews from "../../components/News/DetailNews";

function Tables() {
  const [newsApi, setNewsApi] = React.useState();
  const [model, setModel] = React.useState({model: false, info: false, update: false, deleted: false});
  const [updateId, setUpdateId] = React.useState({id: 0, title: "", image: ""});
  const [deletedId, setDeletedId]= React.useState({id:0, title:""});
  const [item, setItem]= React.useState({});
  const [infoItem, updateInfo]= React.useState();
  const [news, setNews] = React.useState({page: "news"})
  const titleRef = React.useRef()
  const imageRef = React.useRef()
  const imageDetailRef = React.useRef()
  const [image, uploadImg] = React.useState('')
  const [imageDetail, uploadImgDetail] = React.useState('')
  const [editorVal, updateEditorVal] = React.useState()

  React.useEffect(() => {
    getNewsList(newsApi, setNewsApi)
  }, []);

  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">News Table</CardTitle>
                <CreateNews
                    state={newsApi}
                    setState={setNewsApi}
                    model={model}
                    setModel={setModel}
                    editorVal={editorVal}
                    updateEditorVal={updateEditorVal}
                    titleRef={titleRef}


                    //image
                    imageRef={imageRef}
                    imageDetailRef={imageDetailRef}
                    image={image}
                    imageDetail={imageDetail}

                    //image functions
                    uploadImg={uploadImg}
                    uploadImgDetail={uploadImgDetail}
                />
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
                        <td><img src={`http://localhost:50725/api/image/${item.image}`} style={{width:"70px"}} alt=""/></td>
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
                          <button className="btn btn-warning mr-2"
                                  onClick={async ()=>{
                                    await getNewsDetail(infoItem, updateInfo, item.id)
                                    setModel({info: true})
                                    setDeletedId({id: item.id, title: item.title})
                                    await console.log("logs", infoItem)
                                  }}
                          >Info</button>
                          {/*<p>item: {console.log("item")}</p>*/}
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
          <DetailNews
              detail={model.info}
              title={deletedId.title}
              itemId={deletedId}
              item={item}
              state={newsApi}
              setState={setNewsApi}
              setModel={setModel}
              page={news}
              infoItem={infoItem}
          />
          <UpdateNews
              update={model.update}
              titleRef={titleRef}
              imageRef={imageRef}
              state={newsApi}
              setModel={setModel}
              updateId={updateId}
              setState={setNewsApi}
              title={updateId.title}
              page={news}
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
