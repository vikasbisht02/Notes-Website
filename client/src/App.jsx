import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='dashboard' exact element={<Home/>}/>
        <Route path='/' exact element={<Login/>}/>
        <Route path='signup' exact element={<Signup/>}/>
      </Routes>
    </Router>
  )
}

export default App
