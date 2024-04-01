import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_URL } from '../config';
const SinglePost = () => {
  let { id } = useParams();
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  console.log(id);
  useEffect(() => {
    const fetchSinglepost = async () => {
      try {
        const res = await axios.get(`${API_URL}/posts/post/${id}`);
        console.log(res?.data);
        setTitle(res?.data?.data?.title);
        setDesc(res?.data?.data?.desc);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };
    fetchSinglepost();
  }, [id]);
  return (
    <>
      <section className='w-[90%] mx-auto mt-8'>
        <div>
          <img src='' alt='' />
        </div>
        <h1 className='text-6xl mb-5'>{title}</h1>
        <p className='text-2xl'>{desc}</p>
      </section>
    </>
  );
};

export default SinglePost;
