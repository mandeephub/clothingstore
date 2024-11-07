import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'

import { BrowserRouter as Router, RouterProvider } from 'react-router-dom';

import { createBrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import Products from './Pages/Products';




const router = createBrowserRouter(
  [
    {
      path:"/",
      element: <div>
           
           <Home/>
        </div>
    },
    {
      path:"/products",
      element: <Products/>
    },
  ]
)



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
