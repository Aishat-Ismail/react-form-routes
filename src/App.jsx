import Home from "./components/Home"
import Contact from "./components/Contact"
import LoginForm from "./components/LoginForm"
import Lost from "./components/Lost"
import About from "./components/About"
import Nav from "./components/Nav"
import Services from "./components/Services"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/*' element={<Lost />}></Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
