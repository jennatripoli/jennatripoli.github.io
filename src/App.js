import './App.css';
import {linkedin, github, email, javascript, react, sql, html, css, r, java, python, cpp, git, unrealengine, aws, frontend, imgd, rbe, ds, hci} from './icons.js';

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
            <a href="docs/resume.pdf" target="_blank" rel="noopener noreferrer"><button className="Header-buttontext">Resume</button></a>
          </div>
        </div>
      </section>
      <section className="About">
        <label className="About-title">About Me</label>
        <div className="Skills">
          <label className="Skills-title">EDUCATION</label>
          <div className="Skill">
              <b>Worcester Polytechnic Institute</b>
              Graduated High Distinction in May 2024
          </div>
          <div className="Skill">
              <b>M.S. & B.S. in Computer Science</b>
              Minor in Interactive Media & Game Dev
          </div>
        </div>
        <div className="Skills">
          <label className="Skills-title">FAVORITE TOPICS & TOOLS</label>
          <div className="Skills-items">
            <div className="Skill">{frontend}<label className="Skill-label">Full-Stack</label></div>
            <div className="Skill">{hci}<label className="Skill-label">HCI</label></div>
            <div className="Skill">{rbe}<label className="Skill-label">Robotics</label></div>
            <div className="Skill">{ds}<label className="Skill-label">Data Science</label></div>
            <div className="Skill">{unrealengine}<label className="Skill-label">Game Dev</label></div>
          </div>
          <div className="Skills-items">
            <div className="Skill">{javascript}<label className="Skill-label">JavaScript</label></div>
            <div className="Skill">{react}<label className="Skill-label">React</label></div>
            <div className="Skill">{sql}<label className="Skill-label">SQL</label></div>
            <div className="Skill">{css}<label className="Skill-label">CSS</label></div>
            <div className="Skill">{html}<label className="Skill-label">HTML</label></div>
            <div className="Skill">{java}<label className="Skill-label">Java</label></div>
            <div className="Skill">{python}<label className="Skill-label">Python</label></div>
            <div className="Skill">{git}<label className="Skill-label">Git</label></div>
          </div>
        </div>
      </section>
      <section className="Experience">
        <label className="Experience-title">Experience</label>
        <div className="Jobs">
          <div className="Job-main">
            <label className="Job-title">Software Engineering Consultant</label>
            <label className="Job-subtitle">ASL Education Center || Jan - May 2024</label>
            <label className="Job-description">Contributed to the design and creation of innovative online technology for ASL signers. Focused on responsive, component-based front-end development with JavaScript, React.js, and CSS. Used GitHub Projects to foster collaboration across time zones.</label>
          </div>
          <div className="Job-main">
            <label className="Job-title">Technology Development Intern</label>
            <label className="Job-subtitle">Optum || Jun - Aug 2023</label>
            <label className="Job-description">Enhanced an insurance claim management portal by implementing a data override system. Used Java, Oracle Scripts, SQL, and REST APIs for the back end and JavaScript for the front end. Worked with Jenkins for CI/CD, DBeaver and Postman for testing, and Rally for Agile collaboration.</label>
          </div>
          <div className="Job-main">
            <label className="Job-title">Teaching Assistant</label>
            <label className="Job-subtitle">WPI || Mar 2022 - Dec 2023</label>
            <label className="Job-description">Held weekly office hours to answer questions and review topics for courses in database systems (SQL, schema design, and relational algebra) and data analysis (Python, visualization, and statistics).</label>
          </div>
          <div className="Job">
            <label className="Job-title">Website Developer</label>
            <label className="Job-subtitle">WPI || Jun - Aug 2022</label>
            <label className="Job-description">Designed websites for multiple on-campus research groups using WordPress and CSS. Created page templates for lab contributors to publicize their findings in an organized and readable manner.</label>
          </div>
        </div>
      </section>
      <div className="Portfolio">
        <section className="Project">
          <div className="Project-text">
            <label className="Project-title">ASL Survey Tool</label>
            <label className="Project-subtitle">JavaScript, React, CSS, AWS</label>
            <label className="Project-description"><i>Platform for creating and distributing surveys in American Sign Language (ASL).</i><br /><br />The surveys use no written text and instead fully rely on videos and non-textual elements. The design includes color indicators that are compliant with WCAG 2.2 and USWDS for non-text contrast and color tokens. We conducted an unmoderated user study with 30 Deaf participants to evaluate the tool's usability.</label>
            <div className="Project-buttons">
              <a className="Project-button" href="media/asl_survey_tool/poster.png" target="_blank" rel="noopener noreferrer">Poster</a>
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
            <label className="Project-title">Smiski Tracker</label>
            <label className="Project-subtitle">JavaScript, React, CSS</label>
            <label className="Project-description"><i>Website to track collectible items.</i><br /><br />Users can select and deselect icons to indicate whether they have a certain item, along with collapse and expand various series. The site maintains these visual selections using local storage. All media is from smiski.com and the interface design uses the same color scheming as the brand site.</label>
            <div className="Project-buttons">
              <a className="Project-button" href="https://jennatripoli.github.io/smiski" target="_blank" rel="noopener noreferrer">Visit</a>
              <a className="Project-button" href="https://github.com/jennatripoli/smiski" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
          <div className="Project-media">
            <img className="Project-screenshot" style={{width: "35%"}} src="media/smiski_tracker/mobile_collapsed.png" alt="" />
            <img className="Project-screenshot-main" style={{width: "120%"}} src="media/smiski_tracker/desktop.png" alt="" />
            <img className="Project-screenshot" style={{width: "35%"}} src="media/smiski_tracker/mobile_expanded.png" alt="" />
          </div>
        </section>
        <section className="Project">
          <div className="Project-text">
            <label className="Project-title">Study Buddy</label>
            <label className="Project-subtitle">Kotlin, XML, SQLite, REST</label>
            <label className="Project-description"><i>Android application for studying flashcards.</i><br /><br />Users are able to make study sets with terms and definitions that they enter, and then study this information with animated digital flashcards. The application features a study plan timer using the Pomodoro Technique for structured studying, along with a dictionary search that handles written and spoken input.</label>
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
