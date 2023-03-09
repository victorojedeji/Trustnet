import React from 'react'
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
  } from './Page'


const router = createBrowserRouter(
  createRoutesFromElements(
      <Route>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        <Route path="about" element={<About />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="categories" element={<Categories />} />
        <Route path="*" element={<NotFound />} />
        <Route path="my-account" element={<MyAccount />} />
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