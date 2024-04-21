import { useEffect, useState } from "react";
import "./Projects.css";
import ProjectComponent from "./ProjectComponent";
import BattleShip from "../../assets/projectimages/Battleship.png";
import PhoneSelector from "../../assets/projectimages/PhoneSelector.png";
import ProjectChadik from "../../assets/projectimages/ProjectChadik.jpeg";
import HastorySheli from "../../assets/projectimages/HastorySheli.png";
import AbyssSeekers from "../../assets/projectimages/AbyssSeekers.png";

function Projects() {
  const [scrollOffset, setScrollOffset] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);

  const BattleShipContent = {
    projectNumber: 0,
    image: BattleShip,
    title: "Battle Ship",
    about:
      "Battle Ship was my final school project submitted in 2020. This project includes a variety of self-made services, such as a custom database, client handler, and administrator interface for database manipulation. These services are protected and secured",
    tech: "WPF, C#, Sockets, .NET",
    git:"https://github.com/ArielOhana/BattleShips"
  };
  const ProjectChadikContent = {
    image: ProjectChadik,
    title: "ProjectChadik",
    about:
      "In my military service I figured a way to make life easier for all contact departments, by developing a software where they can insert minimal data, and the software will create a very nice looking Excel file with data it calculates the data the user fills, it knows to indicate where the user should fill and do the rest itself, this project created two and half years ago and being used in my battalion everyday since",
    tech: "WPF, C#, Sockets, .NET, Excel",
  };
  const PhoneSelectorContent = {
    projectNumber: 1,
    image: PhoneSelector,
    title: "Phone Selector",
    about:
      'The Phone Selector concept is a web platform designed to provide comprehensive information about various phone models worldwide. It aggregates data from two primary sources: scraping external websites and maintaining an internal database.',
    tech: "JavaScript, React, HTML, CSS NodeJS,  Express,  MongoDB, MUI,  Nodemailer,  Cheerio,  Puppeteer.",
    git: "https://github.com/ArielOhana/Phone-Selector"
  };
  const HastorySheliContent = {
    projectNumber: 2,
    image: HastorySheli,
    title: "HastorySheli",
    about:
      'The Hackathon Project, conducted over a rigorous 24-hour period in collaboration with Sela School, aimed to develop a secure platform for students to share and access a wide range of books. Utilizing cloud storage, users could easily upload images as books while ensuring the integrity and confidentiality of the server infrastructure.',
    tech: "JavaScript, React, HTML, CSS NodeJS,  Express,  MongoDB, MUI,  Nodemailer,  Cloudinary,  netlify,  render",
    git: "https://github.com/ZvEdward/HaStorySheli",
    web: "https://product--storysheli.netlify.app"
  };
  const AbyssSeekersContent = {
    projectNumber: 3,
    image: AbyssSeekers,
    title: "Abyss Seekers",
    about:
      "Welcome to Abyss Seekers, a thrilling gaming experience brought to life by the passionate developers who honed their skills during the CyberPro Full Stack Developers course. From mastering website development to delving into Unity's endless possibilities, our journey was one of dedication and growth. In Unity, we poured our hearts into crafting Abyss Seekers—a mythical adventure set between 500 and 1500. Through collaborative efforts, we merged advanced Object-Oriented Programming with C# scripting to create an immersive open-world experience. Our ambitions extended to crafting a bustling city, enriched with SQL databases and C# versatility. Within its vibrant streets, players discover shops offering upgrades for their avatars, while the heart of the game lies in the strategic arena, where tactics and skill reign supreme. As our CyberPro journey concluded, Abyss Seekers stood as a testament to our commitment to excellence in game development—an achievement born of passion, skill, and boundless imagination.",
    tech: "Unity, SQL, CSharp, .NET",
    git: "https://github.com/ArielOhana/Abyss-Seekers",
  }
  useEffect(() => {
    const scrollToMiddlePage = () => {
      const container = document.getElementById("scroll-div");
      const middlePage = document.querySelector(".web-projects");
      const scrollLeft =
        middlePage.offsetLeft -
        container.offsetWidth / 2 +
        middlePage.offsetWidth / 2;
      container.scrollLeft = scrollLeft;
      const handleScroll = () => {
        const scrollPercentage =
          (container.scrollLeft /
            (container.scrollWidth - container.clientWidth)) *
          100;
        const scrollOffsetVw = scrollPercentage.toFixed(2);
        const containerWidthVw = (
          (container.scrollWidth / window.innerWidth) *
          100
        ).toFixed(2);
        setScrollOffset(scrollOffsetVw);
        setContainerWidth(containerWidthVw);
        if (
          scrollOffsetVw != 100 &&
          scrollOffsetVw != 50 &&
          scrollOffsetVw != 0
        ) {
          if (scrollOffsetVw < 25) handleNavigation("unity");
          else if (scrollOffsetVw < 75 && scrollOffsetVw > 25)
            handleNavigation("website");
          else if (scrollOffsetVw > 75) handleNavigation("software");
        }
      };

      handleScroll();
      container.addEventListener("scroll", handleScroll);

      return () => {
        container.removeEventListener("scroll", handleScroll);
      };
    };

    scrollToMiddlePage();
  }, []);
  const handleNavigation = (sectionId, selectedbehavior = "smooth") => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: selectedbehavior, inline: "center" });
    }
  };

  return (
    <div id="projectstag" className="projects-main-div">
      <span className="projects-title">Projects</span>
      <div id="scroll-div" className="scroll-container">
        <div className="wide-projects">
          <div id="unity" className="unity-projects">
            <span className="projects-title second-title">Unity</span>
            <ProjectComponent Content={AbyssSeekersContent} />
          </div>
          <div id="website" className="web-projects">
            <span className="projects-title second-title">Websites</span>
            <ProjectComponent Content={PhoneSelectorContent} />
            <ProjectComponent Content={HastorySheliContent} />
          </div>
          <div id="software" className="software-projects">
            <span className="projects-title second-title">Softwares</span>
            <ProjectComponent Content={BattleShipContent} />
            <ProjectComponent Content={ProjectChadikContent} />
          </div>
        </div>
      </div>
      <div className="projects-title padthebottom">
        <div
          onClick={() => handleNavigation("unity", "instant")}
          className={
            (scrollOffset < 25 ? "selected" : "not-selected") + " circle"
          }
        ></div>
        <div
          onClick={() => handleNavigation("website", "instant")}
          className={
            (scrollOffset < 75 && scrollOffset > 25
              ? "selected"
              : "not-selected") + " circle"
          }
        ></div>
        <div
          onClick={() => handleNavigation("software", "instant")}
          className={
            (scrollOffset > 75 ? "selected" : "not-selected") + " circle"
          }
        ></div>
      </div>
    </div>
  );
}

export default Projects;
