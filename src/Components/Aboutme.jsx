import "./Aboutme.css";
import Photo1 from "./images/Photo1.jpeg";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={Photo1}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          It is a long established fact that a reader will be distracted by the
          readable content.
        </p>
        <p className="a-desc">
        Creative and people-oriented web developer with extensive project management experience. 
        Advanced knowledge of the creation of graphic design software and programming languages relevant to the web.
        </p>
        <p className="a-desc">
        Motivated junior web developer looking for a role as full-stack web developer at SoftwareX.
         Passionate about building first-class web applications. Developed an e-commerce website for a local fashion retailer while at University X.
         Relevant skills include DNS Management, Database, Debugging, and more.
        </p>
        <div className="a-award">
          {/* <img src={Award} alt="" className="a-award-img" /> */}
          <div className="texts">
            <h3>Profesional Record</h3>
            <h4 className="title">Experience: 2+ Years</h4>
            <h4 className="title">Clients: 150+ Worldwide</h4>
            <h4 className="title">Projects: 70+ Compeleted</h4>
            {/* <p className="a-award-desc">
              
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
