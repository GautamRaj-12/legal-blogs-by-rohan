import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { API_URL } from "../config";
import { useSelector } from "react-redux";
import { RootState } from "@reduxjs/toolkit/query";
import axios from "axios";

const Write = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  // const [file, setFile] = useState(null);
  const user = useSelector((store: RootState) => store.user.user);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
    };
    // if (file) {
    //   const data = new FormData();
    //   const filename = Date.now() + file.name;
    //   data.append('name', filename);
    //   data.append('file', file);
    //   newPost.photo = filename;
    //   try {
    //     await axios.post(`${API_URL}/upload`, data);
    //   } catch (err) {}
    // }
    try {
      const res = await axios.post(`${API_URL}/posts/create`, newPost, {
        withCredentials: true,
      });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <section className="w-[90%] mx-auto">
        {/* {file && (
        <img className='writeImg' src={URL.createObjectURL(file)} alt='' />
      )} */}
        <form action="" onSubmit={handleSubmit} className="h-[70vh]">
          <div className="writeFormGroup">
            {/* <label htmlFor="fileInput">
              <i className="writeIcon fas fa-plus"></i>
            </label> */}
            {/* <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            /> */}
            <input
              type="text"
              placeholder="Title"
              className="writeInput w-[100%] mb-2 p-2 bg-slate-700"
              autoFocus={true}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <ReactQuill theme="snow" value={desc} onChange={setDesc} />
          <button className="writeSubmit" type="submit">
            Publish
          </button>
        </form>
      </section>
    </>
  );
};

export default Write;
