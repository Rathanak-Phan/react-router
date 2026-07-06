
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './page/Home'
import About from './page/About'
import Products from './page/Products'
import Header from './components/Header'
import Dashboard from './layout/Dashboard'
import Overviews from './page/Overviews'
import User from './page/User'
import MainLayout from './layout/MainLayout'
import UserDetails from './page/UserDetails'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />} >
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/products' element={<Products />} />
          </Route>

          
          <Route path='/dashboard' element={<Dashboard />} >
            <Route path='' element={<Home />} />
            <Route path='overviews' element={<Overviews />} />
            <Route path='user' element={<User />} />
            <Route path='user/:id' element={<UserDetails />} />
          </Route>
          
          <Route path='*' element={<h1>Page not found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
