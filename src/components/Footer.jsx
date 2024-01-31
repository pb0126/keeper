import React from "react";

const date = new Date();
const year = date.getFullYear();
const customStyle ={
  textAlign: "center",
  color:  "",
}

function  Footer() {
  return (
    <div>
      <footer className="page-footer">
        <p style={customStyle}>Copyright  &copy; {year}. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Footer;