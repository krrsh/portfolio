import React, { useContext } from "react";

//import checkmarks
import checkDark from "../assets/checkmark-dark.svg";
import checkLight from "../assets/checkmark-light.svg";
import { ThemeContext } from "./ThemeProvider";


const Skill = ({skill}) => {

    const {theme} = useContext(ThemeContext)
    
    const checkMark = theme === 'light' ? checkLight : checkDark

  return (
    <span>
      <img src={checkMark} />
      <h2>{skill}</h2>
    </span>
  );
};

export default Skill;
