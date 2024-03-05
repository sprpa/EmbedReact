import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const MenuItem = (props) => {
  const { name, subMenus, iconClassName, to, exact } = props;
  const [expand, setExpand] = useState(false);

  const toggleExpand = () => {
    setExpand(!expand);
  };

  const handleClick = () => {
    toggleExpand();
  };

  return (
    <li className={expand ? 'active' : ''}>
      <Link exact to={to} className={`menu-item`} onClick={handleClick}>
        <div className="d-flex justify-content-between">
          <div>
            <div className="menu-icon">
              <i className={iconClassName}></i>
            </div>
            <span>{name}</span>
          </div>
          {/* Display caret based on expand state */}
          {subMenus && subMenus.length > 0 && (
            <i className={`bi bi-caret-${expand ? 'down' : 'down'} mt-2 me-3`} />
          )}
        </div>
      </Link>
      {/* Render submenus if expand is true */}
      { subMenus && subMenus.length > 0 && (
        <ul className={`sub-menu`}>
          {subMenus.map((menu, index) => (
            <li key={index}>
              <NavLink to={menu.to}>{menu.name}</NavLink>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default MenuItem;
