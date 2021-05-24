import * as React from "react"
import './../css/styles.css';



//Components
import ImageOfMe from '../components/ImageOfMe';
import DisplayProjects from '../components/DisplayProjects';



const bodyStyles = {
  backgroundColor: "#FDF1C3",
  // marginLeft: "auto",
  // marginRight: "auto",
  // textAlign: "center"
}

// styles
const pageStyles = {
  color: "#1B2A41",
  // padding: 96,
  fontFamily: "arial",
  fontSize: '15px'
}
// const paddingStyle = {
//   paddingBottom: 100,
//   textAlign: "center",
//   fontSize: "8vw",
// }


// markup
const IndexPage = () => {
  return (
  <main style={bodyStyles} >
    
    <title>Harman's Portfolio</title>
    <article style={pageStyles}>
      {/* <h1 style={paddingStyle}>Welcome to my portfolio!</h1> */}
      <ImageOfMe />
      <br />
      <DisplayProjects />
  
    </article>
  </main>
    
  )
}

export default IndexPage;
