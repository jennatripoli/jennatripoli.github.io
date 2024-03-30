import './App.css';
import {linkedin, github, email, javascript, react, sql, html, css, r, java, cpp, git, unrealengine, aws, frontend, imgd, rbe, ds, hci} from './icons.js';

function App() {
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
        <img className="Header-profile" src="media/profile.jpg" alt="" />
        <div className="Header-text">
          <label>Hello, World! My name is</label>
          <label className="Header-name">Jenna Tripoli</label>
          <label>and welcome to my portfolio.</label>
          <div className="Header-buttons">
            <a href="https://www.linkedin.com/in/jennatripoli/" target="_blank" rel="noopener noreferrer"><button className="Header-button">{linkedin}</button></a>
            <a href="https://github.com/jennatripoli" target="_blank" rel="noopener noreferrer"><button className="Header-button">{github}</button></a>
            <a href="mailto:jmtripoli@wpi.edu" target="_blank" rel="noopener noreferrer"><button className="Header-button">{email}</button></a>
            <a href="docs/Resume.pdf" target="_blank" rel="noopener noreferrer"><button className="Header-buttontext">Resume</button></a>
          </div>
        </div>
      </section>
      <section className="About">
        <label className="About-title">About Me</label>
        <label className="About-intro">I am graduating in May 2024 from Worcester Polytechnic Institute (WPI) with a B.S. and M.S. in Computer Science, along with a minor in Interactive Media and Game Development. <b>I am in search of post-graduate software engineering roles near Redondo Beach, CA.</b></label>
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
            <label className="Job-description">Contribute to the creation of new and innovative ASL-centric online platforms. I work with other software engineers to design and implement this technology, mainly focusing on front-end application development using tools like JavaScript, React, and CSS.</label>
          </div>
          <div className="Job">
            <label className="Job-title">Student Teaching Assistant</label>
            <label className="Job-subtitle">WPI || Mar 2022 - Dec 2023</label>
            <label className="Job-description">Staff member for Database Systems (CS 3431) and Data Analysis for Game Design (IMGD 2905). Held office hours to answer questions and review course topics on SQL, Python, and Excel. Provided detailed feedback to students on graded assignments.</label>
          </div>
          <div className="Job">
            <label className="Job-title">Technology Development Intern</label>
            <label className="Job-subtitle">Optum || Jun - Aug 2023</label>
            <label className="Job-description">Enhanced insurance claim management portal UI by implementing a new data override system. Utilized React, Java, REST API, and SQL to improve the application as a full-stack developer. Collaborated with other interns and engineers at other offices in a DevOps team environment.</label>
          </div>
        </div>
      </section>
      <div className="Portfolio">
        <section className="Project">
          <div className="Project-text">
            <label className="Project-title">ASL Survey Tool</label>
            <label className="Project-subtitle">JavaScript, React, CSS, AWS</label>
            <label className="Project-description"><i>Platform for creating and distributing surveys based in American Sign Language (ASL).</i><br /><br />These surveys use no written text and instead fully rely on video content and non-textual elements. Designs were built from the results of previous studies and ASL-centric research. The application uses color indicators that are compliant with the Web Content Accessibility Guidelines (WCAG 2.2) and U.S. Web Design System (USWDS) for non-text contrast and system color tokens. we conducted an unmoderated user study online with the survey tool to evaluate its functionality and usability.</label>
            <div className="Project-buttons">
              <a className="Project-button" href="docs/asl_survey_tool.pdf" target="_blank" rel="noopener noreferrer">Report</a>
            </div>
          </div>
          <div className="Project-media">
            <img className="Project-screenshot" src="media/asl_survey_tool/multiple_choice.png" alt="" />
            <img className="Project-screenshot-main" src="media/asl_survey_tool/multiple_select.png" alt="" />
            <img className="Project-screenshot" src="media/asl_survey_tool/scalar.png" alt="" />
          </div>
        </section>
        <section className="Project">
          <div className="Project-text">
            <label className="Project-title">Study Buddy</label>
            <label className="Project-subtitle">Kotlin, XML, SQLite</label>
            <label className="Project-description"><i>Android app for creating and studying flashcards.</i><br /><br />Users are able to make study sets with terms and definitions that they enter, and then study this information with animated digital flashcards. The application features a study plan timer using the Pomodoro Technique for structured studying, along with a dictionary search that handles written and spoken input.</label>
            <div className="Project-buttons">
              <a className="Project-button" href="https://github.com/jennatripoli/StudyBuddy" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a className="Project-button" href="https://www.youtube.com/watch?v=2_jPqKdkBzg" target="_blank" rel="noopener noreferrer">Demo</a>
            </div>
          </div>
          <div className="Project-media">
            <img className="Project-screenshot" src="media/study_buddy/home.png" alt="" />
            <img className="Project-screenshot-main" src="media/study_buddy/study_set.png" alt="" />
            <img className="Project-screenshot-main" src="media/study_buddy/add_term.png" alt="" />
            <img className="Project-screenshot-main" src="media/study_buddy/flashcards.png" alt="" />
            <img className="Project-screenshot" src="media/study_buddy/pomodoro.png" alt="" />
            <img className="Project-screenshot" src="media/study_buddy/dictionary.png" alt="" />
          </div>
        </section>
        <section className="Project">
          <div className="Project-text">
            <label className="Project-title">2x2 Madness</label>
            <label className="Project-subtitle">JavaScript, React, CSS</label>
            <label className="Project-description"><i>Square grid puzzle about matching colors.</i><br /><br />The player must rotate groups of four squares to create groups of the same color, with the goal of matching and removing all colors. The game has three boards of size 4x4, 5x5, and 6x6. The application uses an Entity Boundary Controller structure with a Canvas and JSON configurations for the board.</label>
            <div className="Project-buttons">
              <a className="Project-button" href="https://github.com/jennatripoli/2x2-madness" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a className="Project-button" href="https://jennatripoli.github.io/2x2-madness" target="_blank" rel="noopener noreferrer">Play</a>
            </div>
          </div>
          <div className="Project-media">
            <img className="Project-image-main" src="media/2x2_madness/demo.gif" alt="" />
          </div>
        </section>
        <section className="Project">
          <div className="Project-text">
            <label className="Project-title">Rowdy Raccoon</label>
            <label className="Project-subtitle">Unreal Engine 4</label>
            <label className="Project-description"><i>Explore the town as a raccoon named Skeebo.</i><br /><br />The player can mess with objects, scare humans, talk to animals, do parkour, eat food, and collect bottle caps to earn points. This game was created in seven weeks and heavily uses blueprints for features like save states, score calculations, character sockets, object interactions, and the user interface design.</label>
            <div className="Project-buttons">
              <a className="Project-button" href="https://youtu.be/1NMBR5P0ihk" target="_blank" rel="noopener noreferrer">Demo</a>
              <a className="Project-button" href="https://rowdyraccoonwpi.wordpress.com/download/" target="_blank" rel="noopener noreferrer">Download</a>
            </div>
          </div>
          <div className="Project-media">
            <img className="Project-image" src="media/rowdy_raccoon/skeebo.jpg" alt="" />
            <img className="Project-image-main" src="media/rowdy_raccoon/demo.gif" alt="" />
            <img className="Project-image" src="media/rowdy_raccoon/home.png" alt="" />
          </div>
        </section>
        <section className="Project">
          <div className="Project-text">
            <label className="Project-title">Mystery in the Mansion</label>
            <label className="Project-subtitle">Unreal Engine 5</label>
            <label className="Project-description"><i>Investigate the secrets of a hilltop mansion.</i><br /><br />The player begins in an outdoor area, surrounded by woods, and must venture through a cemetery and up the hill. Inside the building are puzzles that must be solved in order to progress through the map. This game was created in three weeks and uses blueprints for the user interface, puzzles, object interactions, atmosphere, and sound design.</label>
            <div className="Project-buttons">
              <a className="Project-button" href="https://youtu.be/F9SbaOPLvIo" target="_blank" rel="noopener noreferrer">Demo</a>
              <a className="Project-button" href="https://drive.google.com/file/d/1OKgcj3_tn1jvkSzyBn0ugL7EJrz4-rNC" target="_blank" rel="noopener noreferrer">Download</a>
            </div>
          </div>
          <div className="Project-media">
            <img className="Project-image" src="media/mystery_in_the_mansion/exterior.jpg" alt="" />
            <img className="Project-image-main" src="media/mystery_in_the_mansion/demo.gif" alt="" />
            <img className="Project-image" src="media/mystery_in_the_mansion/interior.jpg" alt="" />
          </div>
        </section>
        <section className="Project">
          <div className="Project-text">
            <label className="Project-title">FIRST Robotics</label>
            <label className="Project-subtitle">Java</label>
            <label className="Project-description"><i>Software for FRC Team 294.</i><br /><br />Wrote code for subsystems and autonomous routines with PID controls, motion profiling, vision processing, and sensors. Designed teleoperation control schemes with joysticks and game controllers. Served as the Software Sub-Team Lead, organizing tasks and working with new team members to teach them the fundamentals of robot programming.</label>
            <div className="Project-buttons">
              <a className="Project-button" href="https://github.com/team294/FRC2018" target="_blank" rel="noopener noreferrer">2018 GitHub</a>
              <a className="Project-button" href="https://github.com/team294/FRC2019" target="_blank" rel="noopener noreferrer">2019 GitHub</a>
              <a className="Project-button" href="https://github.com/team294/FRC2020" target="_blank" rel="noopener noreferrer">2020 GitHub</a>
            </div>
          </div>
          <div className="Project-media">
            <img className="Project-image" src="media/first_robotics/2018.jpg" alt="" />
            <img className="Project-image" src="media/first_robotics/2019.jpg" alt="" />
            <img className="Project-image-main" src="media/first_robotics/2020.jpg" alt="" />
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
