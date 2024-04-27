import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <section className="about-me max-w-7xl mx-auto w-[90%] min-h-[80vh]">
        <h2>About Me</h2>
        <div className="flex justify-center profile-pic-container mt-12">
          <img
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiY0OtbBmFaMgnebwdo7Jcbp_dDasxiON2H6t_rJBMfSDtEm0im58LZGGuwuUlnfg3i_B1tz4i3BWtR2GE9TjLjLoUQlsBqRS7VAJ1IEdLv8YjkaWB9Bhzmpsk075nXaU4/s220/IMG_20220302_175447_455.jpg"
            alt="user profile picture"
            className="w-56 h-56 rounded-full"
          />
        </div>
        <div className="grid grid-cols-1 profile-desc md:grid-cols-3 gap-4 mt-6">
          <div className="profile-desc-left bg-slate-700 bg-opacity-40 p-4 rounded-md">
            <h2 className="text-2xl font-bold mb-2">Who am I?</h2>
            <p className="text-xl">
              Hello, I am Rohan Raj, Advocate, High Court Calcutta.
            </p>
          </div>
          <div className="profile-desc-middle bg-slate-700 bg-opacity-40 p-4 rounded-md">
            <h2 className="text-2xl font-bold mb-2">My Vision</h2>
            <p className="text-xl">
              I started this blog to decipher the complexities of Law and
              Administration. Additionally, I am very interested in cricket so
              expect insights that swing between the courtrooms and the cricket
              grounds.
            </p>
          </div>
          <div className="profile-desc-right bg-slate-700 bg-opacity-40 p-4 rounded-md">
            <h2 className="text-2xl font-bold mb-2">My Socials</h2>
            <ul className="flex gap-5">
              <Link to="https://x.com/abdsa017" target="_blank">
                <li>
                  <i className="fa-brands fa-x-twitter text-2xl"></i>
                </li>
              </Link>
              <Link
                to="https://www.linkedin.com/in/rohan-raj-604342213/"
                target="_blank"
              >
                <li>
                  <i className="fa-brands fa-linkedin-in text-2xl"></i>
                </li>
              </Link>
              <Link to="https://www.instagram.com/abd_sa_017/" target="_blank">
                <li>
                  <i className="fa-brands fa-instagram text-2xl"></i>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
