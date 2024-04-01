import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Layout from './Layout.tsx';
import About from './pages/About.tsx';
import Home from './pages/Home.tsx';
import Contact from './pages/Contact.tsx';
import Login from './pages/Login.tsx';
import Register from './pages/Register.tsx';
import { Provider } from 'react-redux';
import store from './app/store.ts';
import Write from './pages/Write.tsx';
import SinglePost from './pages/SinglePost.tsx';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route path='' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/write' element={<Write />} />
        <Route path='/post/:id' element={<SinglePost />} />
      </Route>
    )
  );
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;
