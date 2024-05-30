import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="year">© 2024. All Rights Reserved.</div>
      <div className="projects">
        <Link to="https://sid-chopra.netlify.app/" target="blank">
          My Other projects
        </Link>
      </div>
    </div>
  );
};

export { Footer };
