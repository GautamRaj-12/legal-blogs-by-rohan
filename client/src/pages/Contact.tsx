import { Link } from "react-router-dom";
import Heading from "../components/Heading";

const Contact: React.FC = () => {
  return (
    <>
      <Heading leftProp="left-[50px]" headingText="Contact" />
      <section className="contact mt-12">
        <div className="mb-6">
          <h2 className="text-4xl text-center font-bold mb-6 text-[--button-bg-color2]">
            Socials
          </h2>
          <ul className="flex gap-8 justify-center items-center">
            <Link to="https://x.com/abdsa017" target="_blank">
              <li className="w-16 h-16 bg-slate-700 rounded-full flex justify-center items-center">
                <i className="fa-brands fa-x-twitter text-3xl"></i>
              </li>
            </Link>
            <Link
              to="https://www.linkedin.com/in/rohan-raj-604342213/"
              target="_blank"
            >
              <li className="w-16 h-16 bg-slate-700 rounded-full flex justify-center items-center">
                <i className="fa-brands fa-linkedin-in text-3xl"></i>
              </li>
            </Link>
            <Link to="https://www.instagram.com/abd_sa_017/" target="_blank">
              <li className="w-16 h-16 bg-slate-700 rounded-full flex justify-center items-center">
                <i className="fa-brands fa-instagram text-3xl"></i>
              </li>
            </Link>
          </ul>
        </div>
        <div>
          <h2 className="text-4xl text-center font-bold mb-6 text-[--button-bg-color2]">
            Mail
          </h2>
          <div className="flex justify-center">
            <Link
              to="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=rohanraj161@gmail.com"
              target="_blank"
              className="flex justify-center items-center w-16 h-16 bg-slate-700 rounded-full"
            >
              <i className="fa-solid fa-envelope text-3xl"></i>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
