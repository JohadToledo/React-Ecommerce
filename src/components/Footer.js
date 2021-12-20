import React from "react";

function Footer (props) {
  const children = props.children;
  return(
    <React.Fragment>
     {children}
      <footer>
      <div>
        Creado por <a href="https://github.com/JohadToledo">Johad Toledo</a>
      </div>
      <div>
        <a href="https://instagram.com/johadtoledo">Sigueme en Instagram</a>
      </div>
    </footer>
    </React.Fragment>
  
)};

export default Footer;
