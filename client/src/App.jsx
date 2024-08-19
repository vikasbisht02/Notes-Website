import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import LandingHome from './pages/LandingPage/LandingHome'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<LandingHome/>}/>
        <Route path='dashboard' exact element={<Home/>}/>
        <Route path='/login' exact element={<Login/>}/>
        <Route path='signup' exact element={<Signup/>}/>
      </Routes>
    </Router>
  )
}

export default App
