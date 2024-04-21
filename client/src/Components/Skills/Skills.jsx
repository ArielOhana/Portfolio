import "./Skills.css";
import SkillsComponent from "./SkillsComponent";
import javaScript from "../../assets/skillsimages/java-script.png";
import ReactAtom from "../../assets/skillsimages/atom.png";
import html from "../../assets/skillsimages/html.png";
import css from "../../assets/skillsimages/css.png";
import python from "../../assets/skillsimages/python.png";
import sql from "../../assets/skillsimages/sql.png";
import nodejs from "../../assets/skillsimages/nodejs.png";
import MongoDB from "../../assets/skillsimages/MongoDB.png";
import express from "../../assets/skillsimages/express.png";
import java from "../../assets/skillsimages/java.png";
import csharp from "../../assets/skillsimages/c-sharp.png";
import dotnet from "../../assets/skillsimages/dotnet.png";
import WPF from "../../assets/skillsimages/WPF.png";
import unity  from "../../assets/skillsimages/unity.png";
import bootstrap from "../../assets/skillsimages/tools/bootstrap.png"
import eclipse from "../../assets/skillsimages/tools/eclipse.png"
import github from "../../assets/skillsimages/tools/github.png"
import mui from "../../assets/skillsimages/tools/mui.png"
import postman from "../../assets/skillsimages/tools/postman.png"
import tailwind from "../../assets/skillsimages/tools/tailwind.png"
import visualstudio from "../../assets/skillsimages/tools/visualstudio.png"
import vscode from "../../assets/skillsimages/tools/vscode.png"
function Skills() {
  const webDeveloper = {
    mainTitle: "Web Developer",
    firstTitle: "Front-End Skills",
    secondTitle: "Back-End Skills",
    firstSkills: [ReactAtom, javaScript, html, css],
    secondSkills: [python, express, nodejs, java, sql, MongoDB],
    sequence: [
      "JavaScript - a versatile programming language commonly used for creating interactive web pages and web applications.",
      1400,
      "React - a powerful JavaScript library used to efficiently build interactive user interfaces by creating reusable UI components, managing state effectively, and optimizing rendering performance.",
      1400,
      "HTML - a markup language used to structure web pages and define the content and layout of elements within a document.",
      1400,
      "CSS - a style sheet language used to enhance the presentation and appearance of HTML elements by applying styling rules such as colors, fonts, spacing, and layout.",
      1400,
      "Python - a high-level programming language known for its simplicity and readability, widely used for web development, data analysis, artificial intelligence, and automation tasks.",
      1400,
      "Express - a minimalist and flexible web application framework for Node.js, designed for building robust and scalable web applications and APIs with ease.",
      1400,
      "Node.js - a JavaScript runtime environment that allows developers to run JavaScript code server-side, enabling the development of fast, scalable, and event-driven applications.",
      1400,
      "Java - a widely-used, class-based, object-oriented programming language known for its platform independence, portability, and extensive ecosystem, commonly used for enterprise-level applications, mobile development, and large-scale systems.",
      1400,
      "SQL - a domain-specific language used for managing and manipulating relational databases, enabling users to perform tasks such as querying, updating, and managing data stored in structured tables.",
      1400,
      "MongoDB - a NoSQL database management system that uses a document-oriented data model, providing flexibility, scalability, and performance for handling large volumes of unstructured data, ideal for real-time applications and big data analytics.",
      1400,
    ],
  };
  const SoftwareDeveloper = {
    mainTitle: "Software Developer",
    firstTitle: "Front-End Skills",
    secondTitle: "Back-End Skills",
    firstSkills: [WPF, dotnet, csharp],
    secondSkills: [python,csharp, java, sql, MongoDB],
    sequence: [
      "C# - A modern, object-oriented language from Microsoft's .NET, prized for its simplicity, type safety, and versatility in developing Windows apps, web services, and enterprise solutions with focus on productivity.",
      1400,
      "WPF - a graphical subsystem for rendering user interfaces in Windows-based applications, providing a unified programming model for building desktop applications with rich user experiences through XAML markup and .NET framework integration.",
      1400,
      "DotNet - a free, open-source developer platform for building various types of applications, including web, mobile, desktop, cloud, and IoT, using languages such as C#, F#, and Visual Basic, along with a comprehensive set of libraries and tools for rapid development.",
      1400,
      "Python - a high-level programming language known for its simplicity and readability, widely used for web development, data analysis, artificial intelligence, and automation tasks.",
      1400,
      "Java - a widely-used, class-based, object-oriented programming language known for its platform independence, portability, and extensive ecosystem, commonly used for enterprise-level applications, mobile development, and large-scale systems.",
      1400,
      "SQL - a domain-specific language used for managing and manipulating relational databases, enabling users to perform tasks such as querying, updating, and managing data stored in structured tables.",
      1400,
      "MongoDB - a NoSQL database management system that uses a document-oriented data model, providing flexibility, scalability, and performance for handling large volumes of unstructured data, ideal for real-time applications and big data analytics.",
      1400,
    ],
  };
  const GameDeveloper = {
    mainTitle: "Unity Game Developer",
    firstTitle: "Framework:",
    secondTitle: "Back-End Skills",
    firstSkills: [unity, dotnet],
    secondSkills: [sql, csharp],
    sequence: [
      "C# - A modern, object-oriented language from Microsoft's .NET, prized for its simplicity, type safety, and versatility in developing Windows apps, web services, and enterprise solutions with focus on productivity.",
      1400,
      "Unity - A versatile and powerful game development platform renowned for its user-friendly interface, extensive library of assets, and robust features, enabling developers to create immersive and interactive experiences across various platforms with ease and efficiency.",
      1400,
      "DotNet - a free, open-source developer platform for building various types of applications, including web, mobile, desktop, cloud, and IoT, using languages such as C#, F#, and Visual Basic, along with a comprehensive set of libraries and tools for rapid development.",
      1400,
      "SQL - a domain-specific language used for managing and manipulating relational databases, enabling users to perform tasks such as querying, updating, and managing data stored in structured tables.",
      1400,
    ],
  };
  const Tools = {
    mainTitle: "Tools",
    firstTitle: "IDLE:",
    secondTitle: "Libraries and programs:",
    firstSkills: [eclipse,visualstudio,vscode, unity],
    secondSkills: [postman,tailwind,github,mui,bootstrap],
    sequence: [
        "Eclipse - A comprehensive IDE known for its support for multiple languages, plugins, and extensive features.",
        1400,
        "Visual Studio - A feature-rich IDE by Microsoft, renowned for its powerful tools and broad language support.",
        1400,
        "VS Code - A lightweight source code editor by Microsoft, highly extensible and favored for its speed and Git integration.",
        1400,
        "Postman - A popular platform for API development, offering a user-friendly interface for designing, testing, and debugging APIs.",
        1400,
        "Tailwind CSS - A utility-first CSS framework for building custom and responsive UIs with ease.",
        1400,
        "GitHub - A leading platform for version control and collaboration, empowering developers to work efficiently on projects.",
        1400,
        "Material-UI (MUI) - A React component library based on Google's Material Design, offering customizable UI components for web apps.",
        1400,
        "Bootstrap - A popular front-end framework for building responsive and mobile-first websites with ease.",
        1400,
        "Unity - A versatile and powerful game development platform renowned for its user-friendly interface, extensive library of assets, and robust features, enabling developers to create immersive and interactive experiences across various platforms with ease and efficiency.",
      1400,
      ],
      
  };
  return (
    <>
      <div className="skills" id="skillstag">
        <span className="skills-title">SKILLS</span>
        <div className="skills-page">
          <SkillsComponent skills={webDeveloper} />
          <SkillsComponent skills={SoftwareDeveloper} />
          <SkillsComponent skills={GameDeveloper} />
          <SkillsComponent skills={Tools} />
        </div>
      </div>
    </>
  );
}

export default Skills;
