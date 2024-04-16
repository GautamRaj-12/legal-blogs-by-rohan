import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
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
  const [loading, setLoading] = useState<boolean>(false);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const user = useSelector((store: RootState) => store.user.user);

  useEffect(() => {
    // Fetch categories from the backend when component mounts
    const fetchCategories = async () => {
      try {
        const res = await axios.get(`${API_URL}/categories/all-categories`);
        setCategories(res.data.data.map((category) => category.category[0]));
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

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

  const handleCategoryToggle = (category: string) => {
    setSelectedCategories((prevCategories) => {
      if (prevCategories.includes(category)) {
        // If category already selected, remove it
        return prevCategories.filter((c) => c !== category);
      } else {
        // Otherwise, add it
        return [...prevCategories, category];
      }
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    if (coverImage) {
      formData.append("coverImage", coverImage);
    }
    formData.append("title", title);
    formData.append("desc", desc);
    formData.append("username", user.username);

    // Modify data for categories
    // const categoryStrings = selectedCategories.map((category) => category);
    // console.log(categoryStrings);
    // formData.append("categories", JSON.stringify(categoryStrings));
    for (const category of selectedCategories) {
      formData.append("categories[]", category); // Add each category with a key ending in "[]"
    }

    try {
      const res = await axios.post(`${API_URL}/posts/create`, formData, {
        withCredentials: true,
      });

      console.log(res);
      navigate(`/post/${res?.data?.data?._id}`);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
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
          <div className="mt-4 mb-8">
            {categories.map((category) => (
              <span
                key={category}
                className={`category p-2 mr-2 mb-2 cursor-pointer ${
                  selectedCategories.includes(category)
                    ? "bg-yellow-500 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
                onClick={() => handleCategoryToggle(category)}
              >
                {category}
              </span>
            ))}
          </div>
          <ReactQuill theme="snow" value={desc} onChange={handleDescChange} />
          <button
            className="writeSubmit bg-[--button-bg-color] px-2 py-1 font-semibold rounded-sm mt-2"
            type="submit"
            disabled={loading}
          >
            {loading ? "Publishing..." : "Publish"}
          </button>
        </form>
      </section>
    </>
  );
};

export default Write;
