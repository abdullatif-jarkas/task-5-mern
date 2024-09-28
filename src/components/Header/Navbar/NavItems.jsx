import { useState } from "react";
import "./NavItems.css";

const NavItems = ({ links, btn }) => {

  const [active, setActive] = useState(0);

  return (
    <div className="main-nav-items">
      <ul>
        {links?.map((link, index) => (
          <li key={index} className={active == index? "active" : ""} onClick={() => setActive(index)}>
            <a href={link.link}>{link.title}</a>
          </li>
        ))}
      </ul>
      <button>{btn}</button>
    </div>
  );
};

export default NavItems;
