import React from 'react'
import {Routes , Route} from "react-router-dom";
import Adduser from '../Component/Adduser/Adduser';
import Fetchuser from '../Component/Fetchuser/Fetchuser';
import Updateuser from '../Component/Updateuser/Updateuser';

const Router = () => {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Adduser/>}></Route>
      <Route path='/fetchuser' element={<Fetchuser/>}></Route>
      <Route path='/edituser' element={<Updateuser/>}></Route>
      </Routes>
    </div>
  )
}

export default Router
