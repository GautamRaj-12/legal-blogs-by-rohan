import { SyntheticEvent, useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const Register: React.FC = () => {
  const [show, setShow] = useState<boolean>(true);

  const [username, setUsername] = useState<string>('');
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [showInfo, setShowInfo] = useState<string>('opacity-0');

  const [errorMessage, setErrorMessage] = useState<string>('');
  const [successMessage, setSuccessMessage] = useState<string>('');

  const [successMessageVisible, setSuccessMessageVisible] =
    useState<string>('hidden');

  const handleUserNameChange = (e: SyntheticEvent<HTMLInputElement>) => {
    setUsername(e.currentTarget.value);
  };
  const handleFullNameChange = (e: SyntheticEvent<HTMLInputElement>) => {
    setFullName(e.currentTarget.value);
  };
  const handleEmailChange = (e: SyntheticEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };
  const handlePasswordChange = (e: SyntheticEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };

  const handleShowHide = (e: SyntheticEvent) => {
    let passwordInput =
      document.querySelector<HTMLInputElement>('.password-input');
    e.preventDefault();
    if (passwordInput) {
      const currentType = passwordInput.type;
      passwordInput.type = currentType === 'password' ? 'text' : 'password';
      setShow(currentType === 'password' ? false : true);
    }
  };

  const handleInfo = () => {
    setShowInfo(showInfo === 'opacity-0' ? 'opacity-1' : 'opacity-0');
  };
  const validateEmail = (email: string) => {
    const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(email);
  };
  const validatePassword = (password: string) => {
    const regex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,30}$/;
    return regex.test(password);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let error = '';

    if (username.trim() === '') {
      error = "Username can't be empty";
    } else if (username.length < 6 || username.length > 20) {
      error = 'Username should be between 6 and 20 characters';
    } else if (fullName.trim() === '') {
      error = 'You must provide the full name';
    } else if (fullName.length < 6 || fullName.length > 100) {
      error = 'Full Name should be between 6 and 100 characters';
    } else if (!validateEmail(email)) {
      error = 'Please enter a valid email address';
    } else if (!validatePassword(password)) {
      error =
        'Password should be between 6 and 30 characters and contain at least one capital letter and one digit';
    }

    if (error) {
      setErrorMessage(error);
      return;
    }
    try {
      const response = await axios.post(
        'http://localhost:8000/api/v1/users/register',
        {
          username,
          email,
          fullName,
          password,
        }
      );

      setEmail('');
      setUsername('');
      setFullName('');
      setPassword('');
      setErrorMessage('');
      setSuccessMessage(response?.data?.message);
      // console.log(response?.data);
      setSuccessMessageVisible('block');
      window.location.replace('http://localhost:5173/login');
    } catch (error: any) {
      console.log(error.response.data.error);
    }
  };
  return (
    <>
      <section className='mt-4 register'>
        <div className='mb-4 text-center'>
          {errorMessage && (
            <span className='font-semibold text-rose-400'>
              <i className='mr-2 fa-solid fa-triangle-exclamation'></i>
              {errorMessage}
            </span>
          )}
          {
            <div className={`text-center ${successMessageVisible}`}>
              <span className={`font-semibold text-green-400`}>
                <i className='mr-2 fa-solid fa-circle-check'></i>
                {successMessage}
              </span>
            </div>
          }
        </div>
        <h2 className='text-3xl font-[pacifico] text-center mb-4'>Register</h2>
        <form
          className='flex flex-col items-center justify-center md:w-[500px] w-[95%] py-5 mx-auto mb-5 bg-slate-700/50 h-[400px] rounded-lg relative'
          onSubmit={handleSubmit}
        >
          <div className=''>
            <i
              className='absolute text-xl cursor-pointer top-2 right-2 fa-solid fa-circle-info text-slate-500'
              onClick={handleInfo}
            ></i>
            <ul
              className={`absolute z-20 p-6 rounded-lg list-disc w-[80%] left-16 h-[75%] bg-slate-700 ${showInfo} transition-all duration-500 flex flex-col justify-center pointer-events-none`}
            >
              <li className='mb-1 italic'>
                Username should be between 6 and 20 characters
              </li>
              <li className='mb-1 italic'>
                Full Name should be between 6 and 100 characters
              </li>
              <li className='mb-1 italic'>
                Password should be between 6 and 30 characters
              </li>
              <li className='mb-1 italic'>
                Password must contain at least one capital letter and one digit
              </li>
            </ul>
          </div>
          <div className='w-2/3 mb-4'>
            <input
              type='text'
              className='w-full p-2 text-lg bg-transparent border-[1px] rounded-md outline-none border-slate-500'
              placeholder='enter username'
              value={username}
              onChange={handleUserNameChange}
            />
          </div>
          <div className='w-2/3 mb-4'>
            <input
              type='text'
              className='w-full p-2 text-lg bg-transparent border-[1px] rounded-md outline-none border-slate-500'
              placeholder='enter full name'
              value={fullName}
              onChange={handleFullNameChange}
            />
          </div>
          <div className='w-2/3 mb-4'>
            <input
              type='text'
              className='w-full p-2 text-lg bg-transparent border-[1px] rounded-md outline-none border-slate-500'
              placeholder='enter email'
              value={email}
              onChange={handleEmailChange}
            />
          </div>

          <div className='relative w-2/3 mb-4'>
            <input
              type='password'
              className='w-full p-2 text-lg rounded-md bg-transparent border-[1px] outline-none border-slate-500 password-input'
              placeholder='enter password'
              value={password}
              onChange={handlePasswordChange}
            />
            <button
              className='absolute right-1 top-2 bg-[--button-bg-color] px-2 py-1 font-semibold rounded-sm'
              onClick={handleShowHide}
            >
              {show ? 'show' : 'hide'}
            </button>
          </div>
          <div>
            <button
              type='submit'
              className='bg-[--button-bg-color2] text-slate-800 px-6 py-2 rounded-3xl font-[pacifico] text-lg mb-3'
            >
              Register
            </button>
          </div>
          <p className='text-lg'>
            Already have an account?{' '}
            <span className='italic font-bold underline'>
              {' '}
              <NavLink to='/login'>Login</NavLink>
            </span>
          </p>
        </form>
      </section>
    </>
  );
};

export default Register;
