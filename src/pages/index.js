import * as React from "react"
import './../css/styles.css';



//Components
import ImageOfMe from '../components/ImageOfMe';
import DisplayProjects from '../components/DisplayProjects';




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
      <ImageOfMe />
      <br />
      <DisplayProjects />
  
    </article>
  </main>
    
  )
}

export default IndexPage;
