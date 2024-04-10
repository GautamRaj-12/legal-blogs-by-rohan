import React, { useEffect, useState } from "react";
import Heading from "./Heading";
import Post from "./Post";
import axios from "axios";
import { API_URL } from "../config";
import { Link } from "react-router-dom";

interface PostData {
  coverImage: string;
  title: string;
  createdAt: Date;
  _id: string;
}

const BlogsHomePage: React.FC = () => {
  const [allPosts, setAllPosts] = useState<PostData[]>([]);

  useEffect(() => {
    const fetchAllPosts = async () => {
      try {
        const res = await axios.get<{ data: PostData[] }>(
          `${API_URL}/posts/all-posts`
        );
        setAllPosts(res?.data?.data || []);
      } catch (error) {
        console.log("Error fetching posts", error);
      }
    };
    fetchAllPosts();
  }, []);

  return (
    <>
      <section className="mt-12">
        <Heading leftProp={"left-[49%]"} />
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 mx-auto max-w-[1368px] w-[90%]">
          {allPosts.map((post) => (
            <Link to={`post/${post._id}`}>
              <Post
                key={post._id}
                imgsrc={post.coverImage}
                category=""
                blogTitle={post.title}
                date={new Date(post.createdAt).toLocaleString("en-In", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default BlogsHomePage;
