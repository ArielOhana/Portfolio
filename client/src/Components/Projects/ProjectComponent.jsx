import "./ProjectComponent.css";
import GitHubIcon from "../../assets/GitHubIcon.png";
import websiteIcon from "../../assets/websiteIcon.png";
import axios from "axios";
function ProjectComponent({Content}) {
    const postRequest = async (request, data) => {
        const response = await axios.post(
          `${import.meta.env.VITE_LINKSERVER}${request}`,
          data);
        return response;
      };
    const OpenGit = () => {
        postRequest("/data/interactproject", {projectNumber:Content.projectNumber, type:"git", projectName: Content.title});
        window.open(Content.git, '_blank');
      };
    const OpenWeb = () => {
        postRequest("/data/interactproject", {projectNumber:Content.projectNumber, type:"url", projectName: Content.title});
        window.open(Content.web, '_blank');
      };
    return (
      <div className="ProjectComponent-maindiv">
            <img className="ProjectComponent-mainimage" src={Content.image} alt="" />
            <span className="ProjectComponent-title">{Content.title}</span>
            <div className="ProjectComponent-container" >
            <span className="ProjectComponent-details-title" >About: </span>
            <span className="ProjectComponent-details">{Content.about}</span>
            </div>
            <div className="ProjectComponent-container">
            <span className="ProjectComponent-details-title" >Technologies: </span>
            <span className="ProjectComponent-details">{Content.tech}</span>
            </div>
            <div className="ProjectComponent-container-links">
            <img src={GitHubIcon} onClick={OpenGit} className={`ProjectComponent-Icon ProjectComponent-Icon-git ${!Content.git && "ProjectComponent-Icon-notvisible"}`} alt="" />
            <img src={websiteIcon} onClick={OpenWeb} className={`ProjectComponent-Icon ProjectComponent-Icon-web ${!Content.web && "ProjectComponent-Icon-notvisible"}`} alt="" />
            </div>
      </div>
    )
  }
  
export default ProjectComponent
  