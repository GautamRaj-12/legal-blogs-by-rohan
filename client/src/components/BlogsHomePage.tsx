import React, { useEffect, useState } from "react";
import Heading from "./Heading";
import Post from "./Post";
import axios from "axios";
import { API_URL } from "../config";

interface PostData {
  coverImage: string;
  title: string;
  createdAt: string;
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
          {allPosts.map((post, index) => (
            <Post
              key={index}
              imgsrc={post.coverImage}
              category=""
              blogTitle={post.title}
              date={post.createdAt}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default BlogsHomePage;
