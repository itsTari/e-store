import './App.css'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import Display from './component/Display'
import Footer from './component/Footer'

function App() {


  return (
    <>
      <Navbar/>
      <Hero/>
      <Display home={true}/>
      <Footer/>
        
    </>
  )
}

export default App
