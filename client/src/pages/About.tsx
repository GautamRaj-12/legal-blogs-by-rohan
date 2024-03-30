const About = () => {
  return (
    <>
      <section className='about-me max-w-7xl mx-auto w-[90%] min-h-[80vh]'>
        <h2>About Me</h2>
        <div className='flex justify-center profile-pic-container'>
          {/* <img
            src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiY0OtbBmFaMgnebwdo7Jcbp_dDasxiON2H6t_rJBMfSDtEm0im58LZGGuwuUlnfg3i_B1tz4i3BWtR2GE9TjLjLoUQlsBqRS7VAJ1IEdLv8YjkaWB9Bhzmpsk075nXaU4/s220/IMG_20220302_175447_455.jpg'
            alt='user profile picture'
          /> */}
        </div>
        <div className='grid grid-cols-1 profile-desc sm:grid-cols-3'>
          <div className='profile-desc-left'>
            <h2>Who am I?</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              recusandae iusto reprehenderit sit tenetur ipsam praesentium?
              Aliquid illum placeat amet asperiores? Dolore nobis praesentium
              veritatis.
            </p>
          </div>
          <div className='profile-desc-middle'>
            <h2>My Vision</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              recusandae iusto reprehenderit sit tenetur ipsam praesentium?
              Aliquid illum placeat amet asperiores? Dolore nobis praesentium
              veritatis.
            </p>
          </div>
          <div className='profile-desc-right'>
            <h2>My Social</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              recusandae iusto reprehenderit sit tenetur ipsam praesentium?
              Aliquid illum placeat amet asperiores? Dolore nobis praesentium
              veritatis.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
