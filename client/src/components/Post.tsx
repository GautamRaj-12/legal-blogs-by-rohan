// Post.tsx
interface PostProps {
  imgsrc: string;
  category: string;
  blogTitle: string;
  date: string;
}

const Post: React.FC<PostProps> = (props) => {
  const { imgsrc, blogTitle, date } = props;

  return (
    <div className="mb-2 md:max-w-[350px] max-w-[100%] ">
      <div className="h-[200px] md:max-w-[350px] max-w-[100%] ">
        <img
          src={imgsrc}
          alt=""
          className="h-[100%] w-[100%] rounded-lg object-cover"
        />
      </div>
      <p className="category text-[--another-light-color] uppercase font-[Lora] tracking-[1px]"></p>
      <p className="blog-title font-[Unna] text-2xl font-semibold text-center">
        {blogTitle.length > 30 ? blogTitle.slice(0, 30) + "..." : blogTitle}
      </p>
      <p className="date tracking-[2px] text-center text-xs">{date}</p>
    </div>
  );
};

export default Post;
