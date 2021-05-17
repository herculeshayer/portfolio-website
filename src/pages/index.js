import * as React from "react"
import './../css/styles.css';

import links from '../data/Data';

//Components
import ImageOfMe from '../components/ImageOfMe';
import DisplayProjects from '../components/DisplayProjects';

const bodyStyles = {
  backgroundColor: "#000000",
  // marginLeft: "auto",
  // marginRight: "auto",
  // textAlign: "center"
}

// styles
const pageStyles = {
  color: "#00E6CB",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  fontSize: '125%'
}
const paddingStyle = {
  paddingBottom: 100,
  textAlign: "center"
}


// markup
const IndexPage = () => {
  return (
  <main style={bodyStyles} >
    
    <title>Harman's Portfolio</title>
    <article style={pageStyles}>
      <h1 style={paddingStyle}>Welcome to my portfolio!</h1>
      <ImageOfMe />
      <br />
      <DisplayProjects />
    </article>
  </main>
    
  )
}

export default IndexPage;
