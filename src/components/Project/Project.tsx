import { Container } from "./styles";
import externalLink from "../../assets/external-link.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <div className="project-links">
                <a
                  href="https://social-media-1dpu.onrender.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>SocialBuzz - Social Media Website</h3>
              <p>
                Developed a social media application featuring Google sign-up,
                user data management, post generation, and comment on users'
                post.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>JavaScript</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>MongoDB</li>
              </ul>

              <ul className="tech-list">
                <li>Stripe</li>
                <li>Passport.js</li>
                <li>Handlebars</li>
              </ul>

              <ul className="tech-list">
                <li>HTML5</li>
                <li>Bootstrap</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <div className="project-links">
                <a
                  href="https://virtual-labs.github.io/exp-javascript-sorting-values-arrays-iitd/index.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Virtual Labs</h3>
              <p>
                Contributed to the development of Web Application-based virtual
                labs in collaboration with the Government of India, Ministry of
                Education and IIT Delhi. These labs aim to reach 3 lakh+
                students, providing an interactive platform to learn, simulate,
                practice, and evaluate web development functionalities.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>JavaScript</li>
                <li>HTML5</li>
                <li>CSS3</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <div className="project-links">
                <a
                  href="https://bookfinder-gk41.onrender.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Book Search Engine</h3>
              <p>
                Created a book search engine web app with seamless Google API
                integration. Users can enter keywords to search for books, which
                are fetched directly from the Google database and displayed
                instantly.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>JavaScript</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Bootstrap</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}
