import * as React from "react"

//styles
import './../css/index.css'



//Components
import Header from "../components/Header";
import Footer from "../components/Footer";
import NavBar from "./../components/NavBar"


//Pages
import Home from './Home';



// markup
const IndexPage = () => {
  return (
  <section>
    
    <title>Harman's Portfolio</title>
    
    
      <Header />
      <NavBar />
      <Home />
      <Footer />
  
  </section>
    
  )
}

export default IndexPage;
