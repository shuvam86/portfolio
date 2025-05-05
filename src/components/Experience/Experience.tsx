import { Container } from "./styles";
import adpushupLogo from "../../assets/adpushup.png";
// import merisolutionLogo from "../../assets/msLogo.png";
import ScrollAnimation from "react-animate-on-scroll";
import cognitensorLogo from "../../assets/cognitensor_logo.jpg"
import offsetfarmLogo from "../../assets/offsetfarm.png";

export function Experience() {
  return (
    <Container id="experience">
      <h2>Experience</h2>
      <div className="projects">
      <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <div className="project-links">
                <div className="company-logo">
                  <img src={cognitensorLogo} alt="CogniTensor" />
                </div>
              </div>
            </header>
            <h3>Full Stack Developer</h3>

            <div className="company-head">
              <h3>CogniTensor </h3>
              <div>Oct 2024 - April 2025</div>
            </div>

            <div className="body">
              
            </div>
            <footer>
              <ul className="tech-list">
                <li>Nest.js</li>
                <li>React.js</li>
                <li>JavaScript</li>
                <li>MySQL</li>
                <li>Typescript</li>
                <li>Express.js</li>
                <li>Node.js</li>
                <li>Fastify</li>
                <li>Microsoft Graph API</li>
                <li>EmailJS</li>
                <li>FullCalendar</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <div className="project-links">
                <div className="company-logo">
                  <img src={offsetfarmLogo} alt="OffsetFarm" />
                </div>
              </div>
            </header>
            <h3>Full Stack Developer</h3>

            <div className="company-head">
              <h3>OffsetFarm </h3>
              <div>April 2023 - Sept 2024</div>
            </div>

            <div className="body">
              {/* <p>
                - Designed and developed the company's primary website from
                scratch, delivering a 25% boost in user engagement with a
                responsive and visually appealing user interface
              </p>
              <p>
                - Integrated data filtering functionality, including a reset
                filter option, enabling users to filter multiple columns
                simultaneously
              </p>
              <p>
                - Implemented a feature for Magicfares to dynamically fetch and
                display flight details, including available flights, fares, and
                timings, based on user search queries
              </p>
              <p>
                - Utilized Chart.js to generate various charts and reports for
                in-depth analysis, enhancing data visualization and aiding in
                strategic decision- making
              </p>
              <p>
                - Enabled seamless integration of new products into the system
                while architecting a user-friendly interface for project
                management, resulting in a 20% reduction in operational time
              </p>
              <p>
                - Implemented a translation feature in the application using the
                Google translation API, allowing statements to be displayed in
                multiple languages, enhancing accessibility and user experience
                for a diverse audience
              </p>
              <p>
                Contributed to launching a mobile application with React Native,
                streamlining user accessibility
              </p> */}
            </div>
            <footer>
              <ul className="tech-list">
                <li>JavaScript</li>
                <li>React.js</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>MongoDB </li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <div className="project-links">
                <div className="company-logo">
                  <img src={adpushupLogo} alt="Adpushup" />
                </div>
              </div>
            </header>
            <h3>Full Stack Developer</h3>
            <div className="company-head">
              <h3>Adpushup Software India Pvt Ltd, New Delhi </h3>
              <div> Jan 2023 - April 2023</div>
            </div>
            <div className="body">
              {/* <p>
                - Improved ticket response tracking in HubSpot by updating the
                effective days property calculation using JavaScript for better
                understanding of response time, and improving the customer
                satisfaction by 40%
              </p>
              <p>
                - Automated the call logging process for Google Meet and HubSpot
                using Zapier, Webhooks and Node.js, improving the time
                efficiency by 80%
              </p>
              <p>
                - Contributed to the development of Instream Adhoc dashboard
                using React.js optimizing video ad placements across websites,
                reducing ad hosting time by to 40%
              </p>
              <p>
                - Automated email consolidation for publishers using Google Apps
                Script, enhancing data tracking accuracy by 40%
              </p> */}
            </div>
            <footer>
              <ul className="tech-list">
                <li>JavaScript</li>
                <li>React.js</li>
                <li>Node.js</li>
                <li>Google Apps Script</li>
                <li>Zapier</li>
                <li>Webhook</li>
                <li>Hubspot</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}
