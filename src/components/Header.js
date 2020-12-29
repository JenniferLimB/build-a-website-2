import React from "react";

function Header() {
  return (
    <header>
      <div>
        <h1> TODO </h1>
      </div>
      <nav>
        <a href="/?city=Jakarta"> Jakarta </a>
        <a href="/?city=New%20York"> New York </a>
        <a href="/?city=Seattle"> Seattle </a>
        <a href="/?city=Shanghai"> Shanghai </a>
      </nav>
    </header>
  );
}

export default Header;
