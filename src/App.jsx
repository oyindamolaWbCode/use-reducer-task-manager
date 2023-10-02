import { useState } from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider }from 'react-router-dom';
import Home from "./Component/Task";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
    <Route path="/" element={<Home/>} /> 
    </Route>
  )
)

function App({routes}) {

  return (
    <>
      <div className='Tasks-display'>  
      <RouterProvider router={router}/>   
      </div>
    </>
  )
}

export default App
