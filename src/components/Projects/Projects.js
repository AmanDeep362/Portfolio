import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import leaf from "../../Assets/Projects/ToDo.png";
import clock from "../../Assets/Projects/clock.png";
import QuizApp from "../../Assets/Projects/quizapp.png";
import Eduscope from "../../Assets/Projects/Eduscope.png";
import blog from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Eduscope}
              isBlog={false}
              title="Eduscope"
              description="A nodejs based application that contains the syllabus of all the courses of B.tech plus 420 plus previous year question paper and sample papers for practice. 6th level of Authentication is used to keep the user database secured. Students will benefit from easily access and download the syllabus and relevant materials with eduSCOPE."
              link="https://eduscope2000.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="To-DO App"
              description="To Do app is creating using Html,css And,Javascript. TODO List are the lists that we generally use to maintain our day to day tasks that we have to do, with the most important tasks at the top and the least important tasks at the bottom. It is helpful in planning our daily schedules. We can add more tasks any time and delete a task which is completed."
              link="https://amandeep362.github.io/Todo-app-using-js/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={QuizApp}
              isBlog={false}
              title="AgroAcers"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              link="https://github.com/soumyajit4419/Editor.io"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={QuizApp}
              isBlog={false}
              title="Online Quiz App"
              description="The Quiz app is created using a Html,css,Bootstap and Javascript . This is a quiz application in which user can preform quiz and they also can see their score. In this app user get question with Four different option and if user select right option its score is incriment after submited the quiz it shows the total score with percentage ."
              link="https://github.com/AmanDeep362/assesment-quiz-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="Blog APP"
              description="The  Blog App is Created Using A React,css,NodeJs and mongodb in this app the blog is fetch from the backend.This is basically a clone of blog website created by Mern Stack.This is completely responsive Website and also use a concept of hooks,redux and routes"
              link="https://github.com/AmanDeep362/blog-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={clock}
              isBlog={false}
              title="Digital Clock"
              description="This is basic project of Html,css and Javascript.Digital clock.Clocks are useful element for any UI if used in a proper way.The approach is to use the date object to get time on every second
              and then re-rendering time on the browser using the new time that we got by calling the same function each second."
              link="https://amandeep362.github.io/digitalclock/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
