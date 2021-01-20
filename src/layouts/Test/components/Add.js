import * as React from "react";
import { Link } from "react-router-dom";
import Dropzone from "react-dropzone";
import { Loading, Checkbox } from "@components";
import { useToast } from "@hooks";
import { Auth, Lang } from "@plugins";
import { API_ROUTES } from "@config";
import { genUuid } from "@lib";

let xhr = [];
export const Add = ({ goBack }) => {
  const toast = useToast();
  const [loading, setLoading] = React.useState(false);
  const [params, setParams] = React.useState({
    title: "",
    crm_type: "",
    package_id: "",
    status: true,
  });
  const [files, setFiles] = React.useState([]);

  const onSubmit = async (e) => {
    e.preventDefault();
  };

  const deleteFile = (file) => {
    toast
      .fire({
        toast: false,
        position: "center",
        icon: null,
        timer: null,
        timerProgressBar: false,
        title: Lang.get("DeleteAlertTitle"),
        text: Lang.get("DeleteAlertDescription"),
        buttonsStyling: false,
        showConfirmButton: true,
        showCancelButton: true,
        confirmButtonClass: "btn btn-success",
        cancelButtonClass: "btn btn-secondary",
        confirmButtonText: Lang.get("YesDeleteIt"),
        cancelButtonText: Lang.get("Cancel"),
      })
      .then((res) => {
        if (res && res.value) {
          setFiles(files.filter((row) => row.key !== file.key));
          if (xhr[file.key]) {
            xhr[file.key].abort();
          }
        }
      });
  };

  const sendFormData = (params) => {
    let { key, data } = params;

    xhr[key] = new XMLHttpRequest();

    xhr[key].upload.addEventListener("progress", function (e) {
      var percentComplete = (e.loaded / e.total) * 100;
      var percent = Math.round(percentComplete);
      setFiles(
        files.map((row) => {
          if (row.key === key) {
            row.percent = percent;
          }
          return row;
        })
      );
    });

    xhr[key].addEventListener("load", function (e) {
      let response = JSON.parse(e.target.response);
      if (response.status === "success") {
        setFiles(
          files.map((row) => {
            if (row.key === key) {
              row.id = response.data.id;
              row.image = response.data.thumbnail;
              row.url = response.data.url;
            }
            return row;
          })
        );
      } else {
        setFiles(
          files.map((row) => {
            if (row.key === key) {
              row.error = true;
              row.title = response.description;
            }
            return row;
          })
        );
        setTimeout(() => {
          deleteFile({ key });
        }, 2000);
      }
    });

    xhr[key].open("POST", API_ROUTES["filesUpload"], true);
    xhr[key].send(data);
  };

  const onDrop = (data) => {
    for (let file of data) {
      let type = file.type.split("/")[1];
      let key = genUuid();

      setFiles(
        files.splice(files.length, 0, {
          percent: 0,
          id: 0,
          title: file.name,
          type,
          key,
        })
      );

      let formData = new FormData();
      formData.append("token", Auth.get("token"));
      formData.append("_env", process.env.NODE_ENV);
      formData.append("for", "user");
      formData.append("file", file);
      sendFormData({
        data: formData,
        key,
      });
    }
  };

  if (loading) {
    return (
      <div className="position-relative h-100">
        <Loading bgClass="bg-transparent" />
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="row">
        <div className="form-group col-12">
          <label className="form-control-label">
            {Lang.get("Test Label")}:
          </label>
          <input
            className="form-control form-control-alternative"
            type="text"
            required
            value={params.title}
            onChange={(e) => setParams({ ...params, title: e.target.value })}
          />
        </div>
        <div className="form-group col-md-6">
          <label className="form-control-label">
            {Lang.get("Test Label")}:
          </label>
          <select
            className="form-control-alternative custom-select"
            required
            value={params.crm_type}
            onChange={(e) => setParams({ ...params, crm_type: e.target.value })}
          >
            <option value="">{Lang.get("Select")}</option>
          </select>
        </div>
        <div className="form-group col-md-6">
          <label className="form-control-label">
            {Lang.get("Test Label")}:
          </label>
          <select
            className="form-control-alternative custom-select"
            required
            value={params.package_id}
            onChange={(e) =>
              setParams({ ...params, package_id: e.target.value })
            }
          >
            <option value="">{Lang.get("Select")}</option>
          </select>
        </div>
        <div className="form-group col-12">
          <Dropzone
            multiple
            onDrop={onDrop}
            accept={"image/.png,.jpg,.jpeg,.svg"}
          >
            {({ getRootProps, getInputProps }) => (
              <div className="dropzone" {...getRootProps()}>
                <input {...getInputProps()} />
                <div className="fw-600 fs-16 mb-1">
                  {Lang.get("DropFilesTitle")}
                </div>
                <p className="m-0 fs-13">{Lang.get("DropFilesDescription")}</p>
              </div>
            )}
          </Dropzone>
          {files.length !== 0 && (
            <div className="mt-4">
              {files.map((file, key) => (
                <div key={key} className="file-item d-flex mt-2">
                  <div className="file-about d-flex align-items-center justify-content-center justify-content-md-start">
                    {file.id !== 0 && (
                      <img
                        alt=""
                        src={file.image}
                        className="file-image mr-md-3 mr-0"
                      />
                    )}
                    <span className="file-name d-flex align-items-center">
                      {file.title}
                    </span>
                  </div>
                  <div className="file-progress d-flex align-items-center justify-content-center">
                    {!file.error && (
                      <div className="progress-container position-relative d-flex justify-content-center align-items-center overflow-hidden">
                        <div
                          className="progress-loaded"
                          style={{
                            width: `${file.percent}%`,
                          }}
                        />
                        <span className="info">
                          {file.id ? "Uploaded" : `${file.percent}%`}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="file-actions d-flex align-items-center justify-content-around">
                    <Link
                      target="blank"
                      rel="noopener noreferrer"
                      to={{
                        pathname: file.url,
                      }}
                      className="btn badge badge-success p-1 h-auto lh-10"
                    >
                      <i className="feather feather-eye fs-15" />
                    </Link>
                    <span
                      className="btn badge badge-danger p-1 h-auto lh-10"
                      onClick={() => deleteFile(file)}
                    >
                      <i className="feather feather-x fs-15" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="form-group col-12">
          <Checkbox
            label={Lang.get("Active")}
            checked={params.status}
            onChange={(e) => setParams({ ...params, status: e })}
          />
        </div>
        <div className="form-group col-12">
          <button className="btn btn-success px-5">{Lang.get("Save")}</button>
        </div>
      </div>
    </form>
  );
};
