import React from "react";
import styles from "./Skills.module.css";
import Skill from "../Skill";

const Skills = () => {
  return (
    <section className={styles.container}>
      <h1>Skills</h1>
      <div>
        <Skill skill="HTML" />
        <Skill skill="CSS" />
        <Skill skill="JavaScript" />
        <Skill skill="TypeScript" />
      </div>
      <hr />
      <div>
        <Skill skill="ReactJS" />
        <Skill skill="Tailwind CSS" />
      </div>
      <hr />
      <div>
        <Skill skill="Redux" />
        <Skill skill="Git" />
        <Skill skill="Bootstrap" />
      </div>
      <hr />
      <div>
        <Skill skill="Testing Automation" />
        <Skill skill="WebdriverIo"/>
      </div>
      <hr />
    </section>
  );
};

export default Skills;
