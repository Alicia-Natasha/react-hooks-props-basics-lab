import React from "react";
import Links from './Links'

function About({ bio, github, linkedin}) {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>{
       <Links github={github} linkedin={linkedin} />

        }</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {<Links/>}
    </div>
  );
}

export default About;
