import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { CheckSession } from './services/Auth'
import Nav from './components/Nav'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import Register from './pages/Register'
import Products from './pages/Products'
import ProdDetail from './pages/ProdDetail'
import Account from './pages/Account'
import Cart from './pages/Cart'
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"


const App = () => {
  const [user, setUser] = useState(null)

  const handleLogOut = () => {
    setUser(null)
    localStorage.clear()
  }

  const checkToken = async () => {
    //use the checksession function to get the user 
    //data cause the checksession in the BE is sending
    //the payload back
    const user = await CheckSession()
    setUser(user)
  }

  useEffect(() => {
    const token = localStorage.getItem("token")
    if(token){
      checkToken()
    }
  }, [])

  return (
    <>
      <Nav user={user} handleLogOut={handleLogOut}/>
      <main>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path="signin" element={<SignIn setUser={setUser}/>} />
          <Route path='register' element={<Register />}/>
          <Route path="/products" element={<Products user={user}/>}/>
          <Route path="/products/:id" element={<ProdDetail user={user}/>}/>
          <Route path="/account" element={<Account user={user}/>}/>
          <Route path="/carts" element={<Cart user={user}/>}/>
          <Route path="/cart" element={<Cart user={user}/>} />
        </Routes>
      </main>
      
      <ToastContainer position="bottom-center" autoClose={2000} hideProgressBar />
    </>
  )
}

export default App
