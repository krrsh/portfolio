import React from 'react'
import styles from './ProjectsStyle.module.css'

//import images
import ytube from '../../assets/ytube.png'
import ozark from '../../assets/ozark.png'
import car from '../../assets/car.png'

const Projects = () => {
  return (
    <section className={styles.container}>
      <h1>Projects</h1>
      <div className={styles.projSec}>
        <a className={styles.projectCard} href="https://yt-clone-d97ec.web.app/" target="_blank" rel="noopener noreferrer">
            <img className={styles.projectPic} src={ytube} alt="youtube-clone app img" />
            <h3>You Tube Clone</h3>
        </a>

        {/* <a className={styles.projectCard} href="ozark.infinityfreeapp.com" target="_blank">
            <img className={styles.projectPic} src={ozark} alt="ozark app img" />
            <h3>Ozark - Apparel store</h3>
        </a> */}

        <a className={styles.projectCard} href="https://limo-1cd9a.web.app/" target="_blank" rel="noopener noreferrer">
            <img className={styles.projectPic} src={car} alt="car rental app img" />
            <h3>LIMO - Car Rental app</h3>
        </a>
        
      </div>
    </section>
  )
}

export default Projects
