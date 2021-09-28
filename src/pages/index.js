import * as React from "react"
import './../css/styles.css';



//Components


import MainPage from '../components/MainPage';


// styles
const pageStyles = {
  color: "#1B2A41",
  fontFamily: "arial",
  fontSize: '15px'
}


// markup
const IndexPage = () => {
  return (
  <main>
    
    <title>Harman's Portfolio</title>
    <article style={pageStyles}>
      <MainPage />
  
    </article>
  </main>
    
  )
}

export default IndexPage;
