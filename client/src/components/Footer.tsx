const Footer = () => {
  const date = new Date();
  return (
    <>
      <div className="bg-slate-700 bg-opacity-40 w-full p-2">
        <div className="text-lg flex  flex-col justify-center items-center font-semibold">
          <p>Legal Blogs By Rohan</p>
          <p>&#169; {date.getFullYear()}</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
