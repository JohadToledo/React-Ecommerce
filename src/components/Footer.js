import React from "react";

function Footer (props) {
  const children = props.children;
  return(
    <React.Fragment>
     {children}
      <footer>
      <div>
        Created by <a href="https://github.com/JohadToledo">Johad Toledo</a>
      </div>
      <div>
        <a href="https://instagram.com/johadtoledo">Follow me on Instagram</a>
      </div>
    </footer>
    </React.Fragment>
  
)};

export default Footer;
