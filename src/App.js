import './App.css';
import {linkedin, github, email, javascript, react, sql, html, css, r, java, python, cpp, git, unrealengine, aws, frontend, imgd, rbe, ds, hci} from './icons.js';

function App() {
  const circles = [];
  const colors = ["#EAF0CE", "#C0C5C1", "#7D8491"];

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
        { opacity: 0 },
        { opacity: 1 }
      ],
      {
        duration: (Math.random() + 1) * 1000,
        direction: "alternate",
        fill: "both",
        iterations: Infinity,
        easing: "ease-in-out"
      }
    );
  });

  return (
    <div className="App">
      <section className="header">
        <img className="header-profile" src="media/profile.jpg" alt="" />
          <div className="header-text">
            <label>Hello, World! My name is</label>
            <label className="header-name">Jenna Tripoli</label>
            <label>and welcome to my portfolio.</label>
            <div className="header-buttons">
              <a href="https://www.linkedin.com/in/jennatripoli/" target="_blank" rel="noopener noreferrer"><button className="header-button">{linkedin}</button></a>
              <a href="https://github.com/jennatripoli" target="_blank" rel="noopener noreferrer"><button className="header-button">{github}</button></a>
              <a href="mailto:jmtripoli@wpi.edu" target="_blank" rel="noopener noreferrer"><button className="header-button">{email}</button></a>
              <a href="docs/resume.pdf" target="_blank" rel="noopener noreferrer"><button className="header-button-text">Resume</button></a>
            </div>
          </div>
      </section>
      <section className="about">
        <div className="section-title">About Me</div>
        <div className="education">
          <b>Worcester Polytechnic Institute</b>
          Graduated High Distinction in May 2024
          <br/><br/>
          <b>M.S. & B.S. in Computer Science</b>
          Minor in Interactive Media & Game Dev
        </div>
        <div className="skills">
            <div className="skill">{frontend}<label className="skill-label">Full-Stack</label></div>
            <div className="skill">{hci}<label className="skill-label">HCI</label></div>
            <div className="skill">{rbe}<label className="skill-label">Robotics</label></div>
            <div className="skill">{unrealengine}<label className="skill-label">Game Dev</label></div>
          </div>
          <div className="skills">
            <div className="skill">{javascript}<label className="skill-label">JavaScript</label></div>
            <div className="skill">{react}<label className="skill-label">React</label></div>
            <div className="skill">{sql}<label className="skill-label">SQL</label></div>
            <div className="skill">{css}<label className="skill-label">CSS</label></div>
            <div className="skill">{html}<label className="skill-label">HTML</label></div>
            <div className="skill">{java}<label className="skill-label">Java</label></div>
            <div className="skill">{python}<label className="skill-label">Python</label></div>
            <div className="skill">{git}<label className="skill-label">Git</label></div>
          </div>

      </section>
      <section className="projects">
        <div className="section-title">Projects</div>
        <div className="projects-container">
          <div className="project" id="asl-survey-tool">
            <img className="project-media" src="media/asl_survey_tool/multiple_choice.png" alt="" />
            <div className="project-details">
              <div className="project-text">
                <div className="project-title">ASL Survey Tool</div>
                <div className="project-tools">JavaScript, React, CSS, AWS</div>
                <div className="project-description"><i>Platform for creating and distributing surveys in American Sign Language (ASL).</i><br /><br />The surveys use no written text and instead fully rely on videos and non-textual elements. The design includes color indicators that are compliant with WCAG 2.2 and USWDS for non-text contrast and color tokens. We conducted an unmoderated user study with 30 Deaf participants to evaluate the tool's usability.</div>
              </div>
              <div className="project-buttons">
                <a className="project-button" href="media/asl_survey_tool/poster.png" target="_blank" rel="noopener noreferrer">Poster</a>
                <a className="project-button" href="docs/asl_survey_tool.pdf" target="_blank" rel="noopener noreferrer">Report</a>
              </div>
            </div>
          </div>
          <div className="project" id="study_buddy">
            <div className="project-media">
              <img width="30%" src="media/study_buddy/study_set.png" alt="" />
              <img width="30%" src="media/study_buddy/add_term.png" alt="" />
              <img width="30%" src="media/study_buddy/flashcards.png" alt="" />
            </div>
            <div className="project-details">
              <div className="project-text">
                <div className="project-title">Study Buddy</div>
                <div className="project-tools">Kotlin, XML, SQLite, REST</div>
                <div className="project-description"><i>Android application for studying flashcards.</i><br /><br />Users are able to make study sets with terms and definitions that they enter, and then study this information with animated digital flashcards. The application features a study plan timer using the Pomodoro Technique for structured studying, along with a dictionary search that handles written and spoken input.</div>
              </div>
              <div className="project-buttons">
                <a className="project-button" href="https://github.com/jennatripoli/StudyBuddy" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a className="project-button" href="https://www.youtube.com/watch?v=2_jPqKdkBzg" target="_blank" rel="noopener noreferrer">Demo</a>
              </div>
            </div>
          </div>
          <div className="project" id="smiski-tracker">
            <img className="project-media" src="media/smiski_tracker/desktop.png" alt="" />
            <div className="project-details">
              <div className="project-text">
                <div className="project-title">Smiski Tracker</div>
                <div className="project-tools">JavaScript, React, CSS</div>
                <div className="project-description"><i>Website to track collectible figurines.</i><br /><br />Users can select and deselect icons to indicate whether they have a certain figurine, along with collapse and expand various series. The site maintains these visual selections using local storage. All media is from smiski.com and the interface design uses the same color scheming as the brand site.</div>
              </div>
              <div className="project-buttons">
                <a className="project-button" href="https://jennatripoli.github.io/smiski" target="_blank" rel="noopener noreferrer">Visit</a>
                <a className="project-button" href="https://github.com/jennatripoli/smiski" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          </div>
          <div className="project" id="study-buddy">
            <img className="project-media bordered" src="media/2x2_madness/demo.gif" alt="" />
            <div className="project-details">
              <div className="project-text">
                <div className="project-title">2x2 Madness</div>
                <div className="project-tools">JavaScript, Canvas, React, CSS</div>
                <div className="project-description"><i>Square grid puzzle about matching colors.</i><br /><br />The player must rotate groups of four squares to create groups of the same color, with the goal of matching and removing all colors. The game has three boards of size 4x4, 5x5, and 6x6. The application uses an Entity Boundary Controller structure with a Canvas and JSON configurations for the board.</div>
              </div>
              <div className="project-buttons">
                <a className="project-button" href="https://jennatripoli.github.io/2x2-madness" target="_blank" rel="noopener noreferrer">Play</a>
                <a className="project-button" href="https://github.com/jennatripoli/2x2-madness" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          </div>
          <div className="project" id="rowdy-raccoon">
            <img className="project-media bordered" src="media/rowdy_raccoon/demo.gif" alt="" />
            <div className="project-details">
              <div className="project-text">
                <div className="project-title">Rowdy Raccoon</div>
                <div className="project-tools">Unreal Engine 4, Blueprints</div>
                <div className="project-description"><i>Explore the town as a raccoon named Skeebo.</i><br /><br />The player can mess with objects, scare humans, talk to animals, do parkour, eat food, and collect bottle caps to earn points. This game was created in seven weeks and heavily uses blueprints for features like save states, score calculations, character sockets, object interactions, and the user interface design.</div>
              </div>
              <div className="project-buttons">
                <a className="project-button" href="https://youtu.be/1NMBR5P0ihk" target="_blank" rel="noopener noreferrer">Demo</a>
                <a className="project-button" href="https://rowdyraccoonwpi.wordpress.com/download/" target="_blank" rel="noopener noreferrer">Download</a>
              </div>
            </div>
          </div>
          <div className="project" id="mystery-in-the-mansion">
            <img className="project-media bordered" src="media/mystery_in_the_mansion/demo.gif" alt="" />
            <div className="project-details">
              <div className="project-text">
                <div className="project-title">Mystery in the Mansion</div>
                <div className="project-tools">Unreal Engine 5, Blueprints</div>
                <div className="project-description"><i>Investigate the secrets of a hilltop mansion.</i><br /><br />The player begins in an outdoor area, surrounded by woods, and must venture through a cemetery and up the hill. Inside the building are puzzles that must be solved in order to progress through the map. This game was created in three weeks and uses blueprints for the user interface, puzzles, object interactions, atmosphere, and sound design.</div>
              </div>
              <div className="project-buttons">
                <a className="project-button" href="https://youtu.be/F9SbaOPLvIo" target="_blank" rel="noopener noreferrer">Demo</a>
                <a className="project-button" href="https://drive.google.com/file/d/1OKgcj3_tn1jvkSzyBn0ugL7EJrz4-rNC" target="_blank" rel="noopener noreferrer">Download</a>
              </div>
            </div>
          </div>
          <div className="project" id="first-robotics">
            <img className="project-media bordered" src="media/first_robotics/2020.jpg" alt="" />
            <div className="project-details">
              <div className="project-text">
                <div className="project-title">FIRST Robotics Competition</div>
                <div className="project-tools">Java</div>
                <div className="project-description"><i>Software for FRC Team 294.</i><br /><br />Wrote code for subsystems and autonomous routines with PID controls, motion profiling, vision processing, and sensors. Designed teleoperation control schemes with joysticks and game controllers. Served as the Software Sub-Team Lead, organizing tasks and working with new team members to teach them the fundamentals of robot programming.</div>
              </div>
              <div className="project-buttons">
                <a className="project-button" href="https://github.com/team294/FRC2018" target="_blank" rel="noopener noreferrer">2018 GitHub</a>
                <a className="project-button" href="https://github.com/team294/FRC2019" target="_blank" rel="noopener noreferrer">2019 GitHub</a>
                <a className="project-button" href="https://github.com/team294/FRC2020" target="_blank" rel="noopener noreferrer">2020 GitHub</a>              
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="experience">
        <div className="section-title">Experience</div>
        <div className="timeline">
        <div className="timeline-item timeline-right">
            <div className="timeline-content">
              <div className="timeline-date">Jun 2024 - Present</div>
              <div className="timeline-position">Full-Stack Engineer</div>
              <div className="timeline-company">Gently</div>
              <div className="timeline-location">Santa Monica, CA</div>
              <div className="timeline-description">Revamp the company's website and further develop the in-house warehouse management system. Develop solutions in TypeScript, Astro.js, and TailwindCSS integrated with TinaCMS and Jira.</div>
            </div>
          </div>
          <div className="timeline-item timeline-left">
            <div className="timeline-content">
              <div className="timeline-date">Jan - May 2024</div>
              <div className="timeline-position">Software Engineering Consultant</div>
              <div className="timeline-company">ASL Education Center</div>
              <div className="timeline-location">Framingham, MA (Remote)</div>
              <div className="timeline-description">Contributed to designing and creating new and innovative online technology for ASL signers. Focused on creating responsive and modular web applications with JavaScript, React.js, and CSS. Used GitHub Projects to enhance team efficiency and foster collaboration across several time zones.</div>
            </div>
          </div>
          <div className="timeline-item timeline-right">
            <div className="timeline-content">
              <div className="timeline-date">Jun - Aug 2023</div>
              <div className="timeline-position">Full-Stack Technology Development Intern</div>
              <div className="timeline-company">Optum</div>
              <div className="timeline-location">Cypress, CA</div>
              <div className="timeline-description">Enhanced an insurance claim management portal by implementing a data override system. Used Java, Oracle Scripts, SQL, and REST APIs for the back end and JavaScript for the front end. Worked with Jenkins for CI/CD, DBeaver and Postman for testing, and Rally for Agile collaboration.</div>
            </div>
          </div>
          <div className="timeline-item timeline-left">
            <div className="timeline-content">
              <div className="timeline-date">Mar 2022 - Dec 2023</div>
              <div className="timeline-position">Student Teaching Assistant</div>
              <div className="timeline-company">Worcester Polytechnic Institute</div>
              <div className="timeline-location">Worcester, MA</div>
              <div className="timeline-description">Provided detailed feedback on projects and held office hours to answer questions and debug issues. Taught Python, SQL, relational databases, relational algebra, schema design, and data visualization.</div>
            </div>
          </div>
          <div className="timeline-item timeline-right">
            <div className="timeline-content">
              <div className="timeline-date">Jun - Aug 2022</div>
              <div className="timeline-position">Website Developer</div>
              <div className="timeline-company">Worcester Polytechnic Institute</div>
              <div className="timeline-location">Worcester, MA (Remote)</div>
              <div className="timeline-description">Designed websites for multiple on-campus research groups using WordPress and CSS. Created page templates for lab contributors to publicize their findings in an organized and readable manner.</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
