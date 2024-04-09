import { useState, ChangeEvent, FormEvent } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { API_URL } from "../config";
import { useSelector } from "react-redux";
import { RootState } from "@reduxjs/toolkit/query";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface WriteProps {}

const Write: React.FC<WriteProps> = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [coverImage, setCoverImage] = useState<File | null>(null);
  const user = useSelector((store: RootState) => store.user.user);

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleDescChange = (value: string) => {
    setDesc(value);
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setCoverImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    if (coverImage) {
      formData.append("coverImage", coverImage);
    }
    formData.append("title", title);
    formData.append("desc", desc);
    formData.append("username", user.username);

    try {
      const res = await axios.post(`${API_URL}/posts/create`, formData, {
        withCredentials: true,
      });

      console.log(res);
      navigate(`/post/${res?.data?.data?._id}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <section className="w-[90%] mx-auto">
        <form action="" onSubmit={handleSubmit} className="h-[70vh]">
          <div>
            <input
              type="text"
              placeholder="Title"
              className="writeInput w-[100%] mb-2 p-2 bg-slate-700"
              autoFocus={true}
              value={title}
              onChange={handleTitleChange}
            />
          </div>
          <input
            type="file"
            accept="image/*"
            className="mb-2"
            onChange={handleImageChange}
          />
          <ReactQuill theme="snow" value={desc} onChange={handleDescChange} />
          <button className="writeSubmit" type="submit">
            Publish
          </button>
        </form>
      </section>
    </>
  );
};

export default Write;
