import React, { useContext } from 'react'
import styles from './Hero.module.css'

//icons
import { MdSunny } from "react-icons/md";
import { GoMoon } from "react-icons/go";
import { CiLinkedin } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";

//import resume
import resume from '/src/assets/Resume_krishnaa.pdf'


//import Theme
import {ThemeContext} from '../ThemeProvider'

import photo from '../../assets/ProfilePhoto.jpeg'

const Hero = () => {

  //Theme related
  const {theme, toggleTheme} = useContext(ThemeContext)

  //icons based on theme
  const themeIcons = theme === 'light' ? <MdSunny size={28} onClick={toggleTheme} /> : <GoMoon size={28} onClick={toggleTheme} />;
  const linkedin = theme === 'light' ? <FaLinkedin size={40} /> : <CiLinkedin size={40} />;
  const git = theme === 'light' ? <TbBrandGithubFilled size={40} /> : <FaGithub size={40} />;

  return (
    <section className={styles.heroContainer}>

      <div className={styles.profSec}>
        <img className={styles.pic} src={photo} alt="Profile Pic" />
        <div className={styles.themeIcon}>{themeIcons}</div>
      </div>

      <div className={styles.dataContainer}>
      <h1>Krishnaa G M</h1>
      <h4>Front End Developer</h4>
      <div className={styles.mediaIcons}>
        <a  className={styles.linkedIn}  href='https://www.linkedin.com/in/krishnaa-gm-2ba625245/' target='_blank' rel='noopener noreferrer'>{linkedin}</a>
        <a  className={styles.linkedIn} href='https://github.com/krrsh' target='_blank' rel='noopener noreferrer'>{git}</a>
      </div>
      <p>With a passion for developing moder React web apps for commercial business</p>
      <div>
        <a href={resume} download><button className={styles.resumeBtn}>Resume</button></a>
         <a href='https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRtsfnpHZjfCKzkWNnRKRXckXSgMnGRbbfjmwmDjpnDJqNXbnqBjQKwZfhJfkDHwgCSTrFb' target="-blank" rel="noopener noreferrer"><button className={styles.resumeBtn}>Mail</button></a>
      {/* <a href='https://mail.google.com/mail/?view=cm&fs=1&to=gmkrishnaa63@gmail.com' target="-blank" rel="noopener noreferrer"><button className={styles.resumeBtn}>Mail</button></a> */}
      </div>
      </div>

    </section>
  )
}

export default Hero
