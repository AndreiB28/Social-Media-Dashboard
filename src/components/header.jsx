import React from "react";

function Header(props) {
  return (
    <div className="header">
      Social Media Dashboard
      <div className="sub-header">Total followers:{props.users}</div>
    </div>
  );
}

export default Header;
