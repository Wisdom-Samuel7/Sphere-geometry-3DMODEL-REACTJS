import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'

import Home from './Home'

export default function App() {
  return (
   <BrowserRouter>
      <div>
         <Routes>
             <Route path='/' element={<Home/>}/>

         </Routes>
      </div>
   </BrowserRouter>
  )
}
