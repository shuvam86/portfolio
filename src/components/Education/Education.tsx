import { Container } from "./styles";
import kietLogo from "../../assets/kiet.png";
import ScrollAnimation from "react-animate-on-scroll";

export function Education() {
  return (
    <Container id="education">
      <h2>Education</h2>
      <div className="projects">
      <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <div className="project-links">
                <div className="company-logo">
                  <img src={kietLogo} alt="KIET" />
                </div>
                
              </div>
            </header>
            <h2>KIET Group of Institutions</h2>
            <h3>Bachelor of Technology in Information Technology </h3>
            <p> April 2019 - April 2023 </p>
              
            <div className="body">
              
             
            </div>
            
          </div>
        </ScrollAnimation>
       

       
      </div>
    </Container>
  );
}
