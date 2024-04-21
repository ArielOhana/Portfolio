import React, { useEffect } from 'react';
import axios from 'axios';
import './HomePage.css'; 
import Smily from "../../assets/smilyicon.png";
import NavBar from '../NavBar/NavBar';
import ShareIcon from "../../assets/ShareIcon.png";
import LinkedInIcon from "../../assets/LinkedInIcon.png";
import GitHubIcon from "../../assets/GitHubIcon.png";
function HomePage() 
{
    const getRequest = async(request)=>{
    const response = await axios.get(
        `${import.meta.env.VITE_LINKSERVER}${request}`);
      return response;
    };
  useEffect(()=>{
        getRequest('/data/addvisit')
  },[]);
  const handleDownload = () => {
    window.location.href = import.meta.env.VITE_LINKDOWNLOAD;
  };
  const OpenGit = () => {
    window.open(import.meta.env.VITE_LINKGITHUB, '_blank');
  };
  const OpenLinkedIn = () => {
    window.open(import.meta.env.VITE_LINKLINKEDIN, '_blank');
  };
  const copyToClipboard = () => {
    const linkToCopy = import.meta.env.VITE_LINKHERE;
    navigator.clipboard.writeText(linkToCopy)
      .then(() => {
        alert('Link copied to clipboard!');
      })
      .catch((error) => {
        console.error('Failed to copy link: ', error);
      });
  };
  return (
    <div className="home-page" id="hometag">
      <div>
      <NavBar/>
      </div>
      <div className='main-page'>
        <div className='main-page-details'>
            <span className='main-page-title'>FULL-STACK DEVELOPER</span>
            <span className='main-page-name'>Ariel Ohana</span>
            <span>Versatile Full-Stack Developer adept
in a wide array of programming
languages, showcasing expertise
acquired through completion of the
esteemed high-tech warriors
program at CyberPro College.
</span>
<span className='download-button' onClick={handleDownload}>Download CV</span>
<div className='Links'>
    <img src={LinkedInIcon} onClick={OpenLinkedIn} className='LinkedIn-Icon' alt="" />
    <img src={ShareIcon} onClick={copyToClipboard} className='Share-Icon' alt="" />
    <img src={GitHubIcon} onClick={OpenGit} className='GitHub-Icon' alt="" />
</div>
        </div>
        <div className='main-page-image'>
            <img src={Smily} alt="" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
