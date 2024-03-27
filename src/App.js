import profile from './media/profile.jpg';
import resume from './media/Resume.pdf';
import aslsurvey from './media/aslsurvey.png';
import consignment from './media/consignment.gif';
import madness from './media/2x2madness.gif';
import crowdsourcing from './media/crowdsourcing.gif';
import studybuddy from './media/studybuddy.gif';
import ninjase from './media/ninjase.gif';
import rowdyraccoon from './media/rowdyraccoon.gif';
import mystery from './media/mysteryinthemansion.gif';
import gardenofage from './media/gardenofage.gif';
import frc2020jpg from './media/frc2020.jpg';
import frc2019jpg from './media/frc2019.jpg';
import frc2018jpg from './media/frc2018.jpg';
import {linkedin, github, email, javascript, react, sql, html, css, r, java, cpp, git, unrealengine, aws, frontend, imgd, rbe, ds, hci} from './media/icons.js';
import './App.css';

function App() {
  document.body.style.overflowX = "hidden";

  const circles = [];
  const colors = ["#EAF0CE", "#C0C5C1", "#7D8491", "#3F334D"];

  const existingCircles = document.getElementsByClassName("Circle");
  for (let i = 0; i < existingCircles.length; i++) { document.body.removeChild(existingCircles[i]); }

  for (let i = 0; i < 50; i++) {
    let circle = document.createElement("div");
    circle.className = "Circle";
    circle.style.background = colors[Math.floor(Math.random() * colors.length)];
    circle.style.left = `${Math.floor(Math.random() * 100)}vw`;
    circle.style.top = `${Math.floor(Math.random() * 100)}vh`;
    circle.style.transform = `scale(${Math.random()})`;
    circle.style.width = `${Math.random()}em`;
    circle.style.height = circle.style.width;
    circles.push(circle);
    document.body.append(circle);
  }

  circles.forEach((el, i) => {
    el.animate(
      [
        { transform: "translate(0, 0)" },
        { transform: `translate(${Math.random() * (i % 2 === 0 ? -11 : 11)}rem, ${Math.random() * 12}rem)` }
      ],
      {
        duration: (Math.random() + 1) * 4000,
        direction: "alternate",
        fill: "both",
        iterations: Infinity,
        easing: "ease-in-out"
      }
    );
  });

  return (
    <div className="App">
      <section className="Header">
        <img src={profile} alt="" className="Header-profile" />
        <div className="Header-text">
          <label>Hello, World! My name is</label>
          <label className="Header-name">Jenna Tripoli</label>
          <label>and welcome to my portfolio.</label>
          <div className="Header-buttons">
            <a href="https://www.linkedin.com/in/jennatripoli/" target="_blank" rel="noopener noreferrer"><button className="Header-button">{linkedin}</button></a>
            <a href="https://github.com/jennatripoli" target="_blank" rel="noopener noreferrer"><button className="Header-button">{github}</button></a>
            <a href="mailto:jmtripoli@wpi.edu" target="_blank" rel="noopener noreferrer"><button className="Header-button">{email}</button></a>
            <a href={resume} target="_blank" rel="noopener noreferrer"><button className="Header-buttontext">Resume</button></a>
          </div>
        </div>
      </section>
      <section className="About">
        <label className="About-title">About Me</label>
        <label className="About-intro">I am a senior at Worcester Polytechnic Institute (WPI), where I am earning a B.S. and M.S. in Computer Science and a minor in Interactive Media and Game Development. I will be graduating in May 2024! <b>I am in search of post-graduate software engineering roles near Redondo Beach, CA.</b></label>
        <div className="Skills">
          <label className="Skills-title">MY FAVORITE TOOLS</label>
          <div className="Skills-items">
            <div className="Skill">{javascript}<label className="Skill-label">JavaScript</label></div>
            <div className="Skill">{react}<label className="Skill-label">React</label></div>
            <div className="Skill">{sql}<label className="Skill-label">SQL</label></div>
            <div className="Skill">{css}<label className="Skill-label">CSS</label></div>
            <div className="Skill">{html}<label className="Skill-label">HTML</label></div>
            <div className="Skill">{java}<label className="Skill-label">Java</label></div>
            <div className="Skill">{r}<label className="Skill-label">R</label></div>
            <div className="Skill">{git}<label className="Skill-label">Git</label></div>
            <div className="Skill">{unrealengine}<label className="Skill-label">Unreal</label></div>
          </div>
        </div>
        <div className="Skills">
          <label className="Skills-title">MY FAVORITE TOPICS</label>
          <div className="Skills-items">
            <div className="Skill">{frontend}<label className="Skill-label">Front-End</label></div>
            <div className="Skill">{hci}<label className="Skill-label">HCI Design</label></div>
            <div className="Skill">{imgd}<label className="Skill-label">Game Dev</label></div>
            <div className="Skill">{rbe}<label className="Skill-label">Robotics</label></div>
          </div>
        </div>
      </section>
      <section className="Experience">
        <label className="Experience-title">Experience</label>
        <div className="Jobs">
          <div className="Job">
            <label className="Job-title">Software Engineering Consultant</label>
            <label className="Job-subtitle">ASL Education Center || Jan 2024 - Present</label>
            <label>Contribute to the design and creation of new and innovative ASL-centric online  platforms.</label>
          </div>
          <div className="Job">
            <label className="Job-title">Developer and Researcher</label>
            <label className="Job-subtitle">WPI HCI Lab || Aug 2023 - Present</label>
            <label>Work with other researchers to continue the development of an online ASL-centric survey tool. Use JavaScript, CSS, Python, AWS, and a PostgreSQL database for application code development. Research and implement new UI designs to create visual feedback and improve user experience. Conduct a user study with Deaf participants to assess product usability and advise future research.</label>
          </div>
          <div className="Job">
            <label className="Job-title">Student Teaching Assistant</label>
            <label className="Job-subtitle">WPI Computer Science || Mar 2022 - Dec 2023</label>
            <label>Staff member for Database Systems (CS 3431) and Data Analysis for Game Design (IMGD 2905). Held office hours to answer questions and review course topics in SQL, Python, and Excel.</label>
          </div>
          <div className="Job">
            <label className="Job-title">Technology Development Intern</label>
            <label className="Job-subtitle">Optum || Jun - Aug 2023</label>
            <label>Enhanced insurance claim management portal UI by implementing a new data override system. Utilized React, Java, REST API, and SQL to improve the application as a full-stack developer. Collaborated with other interns and engineers at other offices in a DevOps team environment.</label>
          </div>
        </div>
      </section>
      <div className="Portfolio">
        <section className="Project" id="ASL-survey">
          <label className="Portfolio-title">Portfolio</label>
          <div className="Project-info">
            <div className="Project-text">
              <label className="Project-title">ASL Survey Tool</label>
              <label className="Project-subtitle">Developer || JavaScript, React, CSS, AWS</label>
              <label>Created an ASL-centric survey tool that allows for a user to take a survey completely in ASL videos and visual cues. Made designs with color indicators that are WCAG and USWDS compliant. Designed an interactive progress bar.</label>
              <div className="Project-buttons">
              </div>
            </div>
            <img className="Project-media" alt="" src={aslsurvey} />
          </div>
        </section>
        <section className="Project" id="Virtual-consignment">
          <div className="Project-info">
            <div className="Project-text">
              <label className="Project-title">Virtual Consignment</label>
              <label className="Project-subtitle">Front-End Lead || JavaScript, React, AWS</label>
              <label>Designed and implemented the user interface, responsive sizing, and page navigation for three distinct user types.</label>
              <div className="Project-buttons">
                <a href="https://github.com/jennatripoli/consignment" target="_blank" rel="noopener noreferrer"><button className="Project-button">GitHub</button></a>
                <a href="https://www.youtube.com/watch?v=EqWgtIKOObE" target="_blank" rel="noopener noreferrer"><button className="Project-button">Demo</button></a>
              </div>
            </div>
            <img className="Project-media" alt="" src={consignment} />
          </div>
        </section>
        <section className="Project" id="2x2-madness">
          <div className="Project-info">
            <div className="Project-text">
              <label className="Project-title">2x2 Madness</label>
              <label className="Project-subtitle">Solo Developer || JavaScript, React</label>
              <label>Utilized Entity-Boundary-Controller organization with a Canvas object to display game screen from JSON of board layouts.</label>
              <div className="Project-buttons">
                <a href="https://github.com/jennatripoli/2x2-madness" target="_blank" rel="noopener noreferrer"><button className="Project-button">GitHub</button></a>
                <a href="https://jennatripoli.github.io/2x2-madness" target="_blank" rel="noopener noreferrer"><button className="Project-button">Play</button></a>
              </div>
            </div>
            <img className="Project-media" alt="" src={madness} />
          </div>
        </section>
        <section className="Project" id="Crowdsourced-funding">
          <div className="Project-info">
            <div className="Project-text">
              <label className="Project-title">Crowdsourced Funding</label>
              <label className="Project-subtitle">Front-End Lead || JavaScript, React, AWS</label>
              <label>Developed the user interface, page navigation, and Lambda function synching. Made API design, UML diagram, and use cases.</label>
              <div className="Project-buttons">
                <a href="https://github.com/jennatripoli/crowdsourcing-app" target="_blank" rel="noopener noreferrer"><button className="Project-button">GitHub</button></a>
                <a href="https://www.youtube.com/watch?v=VV5Sk78H6GE" target="_blank" rel="noopener noreferrer"><button className="Project-button">Demo</button></a>
              </div>
            </div>
            <img className="Project-media" alt="" src={crowdsourcing} />
          </div>
        </section>
        <section className="Project" id="Study-buddy">
            <div className="Project-info">
              <div className="Project-text">
                <label className="Project-title">Study Buddy</label>
                <label className="Project-subtitle">Front-End Developer || Kotlin, XML</label>
                <label>Designed and implemented the user interface, animations, a study plan timer, and page navigation.</label>
                <div className="Project-buttons">
                  <a href="https://github.com/jennatripoli/StudyBuddy" target="_blank" rel="noopener noreferrer"><button className="Project-button">GitHub</button></a>
                  <a href="https://www.youtube.com/watch?v=2_jPqKdkBzg" target="_blank" rel="noopener noreferrer"><button className="Project-button">Demo</button></a>
                </div>
              </div>
              <img className="Project-media" alt="" src={studybuddy} />
            </div>
        </section>
        <section className="Project" id="Ninja-se">
          <div className="Project-info">
            <div className="Project-text">
              <label className="Project-title">Ninja-Se Escape Room</label>
              <label className="Project-subtitle">Solo Developer || JavaScript, React</label>
              <label>Utilized Entity-Boundary-Controller organization with a Canvas object to display game screen from a JSON of board layouts.</label>
              <div className="Project-buttons">
                <a href="https://github.com/jennatripoli/ninja-se" target="_blank" rel="noopener noreferrer"><button className="Project-button">GitHub</button></a>
                <a href="https://jennatripoli.github.io/ninja-se" target="_blank" rel="noopener noreferrer"><button className="Project-button">Play</button></a>
              </div>
            </div>
            <img className="Project-media" alt="" src={ninjase} />
          </div>
        </section>
        <section className="Project" id="Rowdy-raccoon">
          <div className="Project-info">
            <div className="Project-text">
              <label className="Project-title">Rowdy Raccoon</label>
              <label className="Project-subtitle">Technical Team || Unreal Engine 4</label>
              <label>Used Blueprints to make save states, score calculations, character sockets, interactions with objects, and the user interface design.</label>
              <div className="Project-buttons">
                <a href="https://github.com/jennatripoli/RowdyRaccoon" target="_blank" rel="noopener noreferrer"><button className="Project-button">GitHub</button></a>
                <a href="https://www.youtube.com/watch?v=WwgVctMByRE" target="_blank" rel="noopener noreferrer"><button className="Project-button">Demo</button></a>
                <a href="https://drive.google.com/file/d/1NYheMyWdltBJPFNvbV3RQvvCtKcTgQsW/view?usp=sharing" target="_blank" rel="noopener noreferrer"><button className="Project-button">Download</button></a>
              </div>
            </div>
            <img className="Project-media" alt="" src={rowdyraccoon} />
          </div>
        </section>
        <section className="Project" id="Mystery-mansion">
          <div className="Project-info">
            <div className="Project-text">
              <label className="Project-title">Mystery in the Mansion</label>
              <label className="Project-subtitle">Interior Developer || Unreal Engine 5</label>
              <label>Used Blueprints to make interior level, the user interface design, puzzles, interactions with objects, atmosphere, and sound design.</label>
              <div className="Project-buttons">
                <a href="https://www.youtube.com/watch?v=F9SbaOPLvIo" target="_blank" rel="noopener noreferrer"><button className="Project-button">Demo</button></a>
                <a href="https://drive.google.com/file/d/1OKgcj3_tn1jvkSzyBn0ugL7EJrz4-rNC/view?usp=sharing" target="_blank" rel="noopener noreferrer"><button className="Project-button">Download</button></a>
              </div>
            </div>
            <img className="Project-media" alt="" src={mystery} />
          </div>
        </section>
        <section className="Project" id="Garden-of-age">
          <div className="Project-info">
            <div className="Project-text">
              <label className="Project-title">Garden of Age</label>
              <label className="Project-subtitle">Technical Lead || C++</label>
              <label>Created ASCII-based game with health calculations, input handling, move sets, and enemy actions through decision trees.</label>
              <div className="Project-buttons">
                <a href="https://github.com/jennatripoli/GardenOfAge" target="_blank" rel="noopener noreferrer"><button className="Project-button">GitHub</button></a>
                <a href="https://drive.google.com/file/d/1Wu7BGbFUkT1gykMd8JvqZI9lmp9FZE_o/view?usp=sharing" target="_blank" rel="noopener noreferrer"><button className="Project-button">Download</button></a>
              </div>
            </div>
            <img className="Project-media" alt="" src={gardenofage} />
          </div>
        </section>
        <section className="Project" id="Frc-2020">
          <div className="Project-info">
            <div className="Project-text">
              <label className="Project-title">FIRST Robotics 2020</label>
              <label className="Project-subtitle">Software Team Lead || Java</label>
              <label>Coded controls, climber, feeder, hopper, intake, and shooter. Used PID controls, autonomous routines, and vision processing.</label>
              <div className="Project-buttons">
                <a href="https://github.com/team294/FRC2020" target="_blank" rel="noopener noreferrer"><button className="Project-button">GitHub</button></a>
                <a href="https://drive.google.com/file/d/1SQ_R9PvzrWIr_4KR-guKyxuNfbGkB4IL/view?usp=sharing" target="_blank" rel="noopener noreferrer"><button className="Project-button">Controls</button></a>
              </div>
            </div>
            <img className="Project-media" alt="" src={frc2020jpg} />
          </div>
        </section>
        <section className="Project" id="Frc-2019">
          <div className="Project-info">
            <div className="Project-text">
              <label className="Project-title">FIRST Robotics 2019</label>
              <label className="Project-subtitle">Software Team || Java</label>
              <label>Coded controls, vision processing, wrist, interlocks, and intakes. Used PID controls, motion profiling, and autonomous routines.</label>
              <div className="Project-buttons">
                <a href="https://github.com/team294/FRC2019" target="_blank" rel="noopener noreferrer"><button className="Project-button">GitHub</button></a>
                <a href="https://drive.google.com/file/d/1vpvcK0-POrjK2AjbrxA3J1-XTaP0juhA/view?usp=sharing" target="_blank" rel="noopener noreferrer"><button className="Project-button">Controls</button></a>
              </div>
            </div>
            <img className="Project-media" alt="" src={frc2019jpg} />
          </div>
        </section>
        <section className="Project" id="Frc-2018">
          <div className="Project-info">
            <div className="Project-text">
              <label className="Project-title">FIRST Robotics 2018</label>
              <label className="Project-subtitle">Software Team || Java</label>
              <label>Coded autonomous routines, claw, climber, and intake. Used PID controllers, motion profiling, and vision processing.</label>
              <div className="Project-buttons">
                <a href="https://github.com/team294/FRC2018" target="_blank" rel="noopener noreferrer"><button className="Project-button">GitHub</button></a>
              </div>
            </div>
            <img className="Project-media" alt="" src={frc2018jpg} />
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
