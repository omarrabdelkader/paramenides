import './App.css';
import Header from './component/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Section from './component/Section';
import Signin from './component/Signin';
import Thanks from './component/Thanks';
import About from './component/About';
import Signup from './component/Signup';
import React from 'react';

function App() {
return ( 
<Router>
<Header/>
<Routes>
<Route path='/' element={<Section/>} />
<Route path='/signin' element={<Signin/>} />
<Route path='/account' element={<Thanks/>}/>
<Route path='/aboutus' element={<About/>}/>
<Route path= '/signup' element={<Signup/>}/>
</Routes>
</Router>
  )
}

export default App;
