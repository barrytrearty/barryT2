import "./navmenu.css";

const NavMenu = () => {
  return (
    <div className="nav-menu-wrapper">
      <ul>
        <li>
          {" "}
          <a href="#welcome-section">HOME</a>
        </li>
        <li>
          <a href="#aboutme-section">ABOUT ME</a>
        </li>

        <li>
          <a href="#project-section">PROJECTS</a>
        </li>
        <li>
          <a href="#contact-section">CONTACT ME</a>
        </li>
      </ul>
    </div>
  );
};

export default NavMenu;
