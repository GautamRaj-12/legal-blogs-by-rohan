const Pagination = () => {
  return (
    <>
      <div className='flex justify-center gap-2'>
        <div className='w-8 h-8 bg-[--light-color] flex justify-center items-center '>
          1
        </div>
        <div className='w-8 h-8 bg-[--light-color] flex justify-center items-center '>
          2
        </div>
        <div className='w-8 h-8 bg-[--light-color] flex justify-center items-center '>
          3
        </div>
        <div className='w-8 h-8 bg-[--light-color] flex justify-center items-center '>
          <i className='fa-solid fa-arrow-right'></i>
        </div>
      </div>
    </>
  );
};
export default Pagination;
