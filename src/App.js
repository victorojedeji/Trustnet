import {
  Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider
} from 'react-router-dom'


// Pages
import {
  SignUp,
  Login, 
  About,
  Home,
  Contact,
  NotFound,
  Pricing,
  Categories,
  MyAccount
  } from './Pages'

// component
import { NavBar } from './Components';

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<NavBar />}>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        <Route path="about" element={<About />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="categories" element={<Categories />} />
        <Route path="my-account" element={<MyAccount />} />
        <Route path="*" element={<NotFound />} />
      </Route>
  )
);
const App = () => {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App