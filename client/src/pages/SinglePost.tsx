import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API_URL } from "../config";
import DOMPurify from "dompurify";

const SinglePost = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [coverImageUrl, setCoverImageUrl] = useState("");
  console.log(id);
  useEffect(() => {
    const fetchSinglepost = async () => {
      try {
        const res = await axios.get(`${API_URL}/posts/post/${id}`);
        console.log(res?.data);
        setTitle(res?.data?.data?.title);
        setCoverImageUrl(res?.data?.data?.coverImage);
        const cleanDesc = DOMPurify.sanitize(res?.data?.data?.desc);
        setDesc(cleanDesc);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };
    fetchSinglepost();
  }, [id]);

  const handleDeletePost = async () => {
    try {
      const res = await axios.delete(`${API_URL}/posts/delete/${id}`, {
        withCredentials: true,
      });
      console.log("Post Deleted", res);
      navigate("/");
    } catch (error) {
      console.error("Error Deleting post:", error);
    }
  };
  return (
    <>
      <section className="w-[90%] mx-auto mt-8 text-[#aaa]">
        <div className="mb-6">
          <img
            src={coverImageUrl}
            alt=""
            className="w-[100%] max-h-96 object-cover aspect-auto"
          />
        </div>
        <div className="text-center mb-6">
          <i
            className="fa-solid fa-trash text-red-500 text-3xl cursor-pointer"
            onClick={handleDeletePost}
          ></i>
        </div>
        <h1 className="text-6xl mb-6 text-center font-semibold">{title}</h1>
        <p
          className="text-lg font-medium"
          dangerouslySetInnerHTML={{ __html: desc }}
        ></p>
      </section>
    </>
  );
};

export default SinglePost;
