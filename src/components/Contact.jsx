import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Link from "@material-ui/core/Link";
import CodeIcon from "@material-ui/icons/Code";
const Contact = () => {
  return (
    <>
      <li className="nav-item contact">
        <Link
          href="https://leetcode.com/angarag/"
          className="nav-link"
          target="_blank"
          rel="noopener"
          style={{ margin: 0 }}
        >
          <span>
            <CodeIcon fontSize="small" />
          </span>
        </Link>
      </li>
      <li className="nav-item contact">
        <Link
          href="https://github.com/angarag"
          className="nav-link"
          target="_blank"
          rel="noopener"
          style={{ margin: 0 }}
        >
          <span>
            <GitHubIcon fontSize="small" />
          </span>
        </Link>
      </li>
      <li className="nav-item contact">
        <Link
          className="nav-link"
          href="https://www.linkedin.com/in/angarag-batjargal/"
          target="_blank"
          rel="noopener"
          style={{ margin: 0 }}
        >
          <span>
            <LinkedInIcon fontSize="small" />
          </span>
        </Link>
      </li>
    </>
  );
};
export default Contact;
