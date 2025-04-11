import React from "react";
import user from '../data/user';
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!

function App() {
  return (
    <div>
       <nav>Navigation</nav>
       <Home name={user.name} city={user.city} color={user.color} />
       <About
         bio={user.bio}
         github={user.links.github}
         linkedin={user.links.linkedin}
       />
       </div>
  );
}

export default App;
