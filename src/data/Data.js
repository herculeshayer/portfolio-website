// import HemoImage from "../images/blood-drop.svg";
// import TODO from "../images/todo.png";
// import Barbell from "../images/barbell.svg";
import Blog from "../images/pyre.svg";
import portImg from "../images/desktop.svg";
import tomato from "../images/tomato.svg";


const links = [
    {
      text: "Portfolio Website",
      url: "https://github.com/herculeshayer/portfolio-website",
      liveSite: "https://hhayer.me/",
      description: "A basic GatsbyJS webpage hosted on Netlify using Continuous Integration/Continuous Delivery workflows",
      tools: "Tools: GatsbyJS, HTML, CSS, JavaScript",
      img: portImg
    },
    {
      text: "Grit & Gain: Workout Blog",
      url: "https://github.com/herculeshayer/grit-and-gain",
      liveSite: "https://gritandgain.netlify.app/",
      description: "A full-stack MERN blog website hosted on AWS Amplify using CI/CD workflows, the frontend is created using ReactJS and the backend uses NodeJS, MongoDB is the database and ExpressJS is used as the server",
      tools: "Tools: MongoDB, ExpressJS, ReactJS, NodeJS, AWS Amplify, Mongo Atlas, Git, RESTful API",
      img: Blog
    },
    {
      text: "MiniDoro: Pomodoro Timer",
      url: "https://github.com/herculeshayer/minidoro",
      liveSite: "https://minidoro.herokuapp.com/",
      description: "A simple browser based pomodoro timer",
      tools: "Tools: React, JavaScript, CSS, HTML, Git",
      img: tomato
    }
    
  ]

export default links;