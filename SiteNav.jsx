import React from "react";
import { Link } from "react-router-dom";
function SiteNav() {
  return (
    <React.Fragment>
      <nav
        className="navbar navbar-expand-md navbar-dark bg-dark"
        aria-label="Fourth navbar example"
      >
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample04"
            aria-controls="navbarsExample04"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarsExample04">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <Link
                  to="/Athletes"
                  className="nav-link px-2 text-white link-button"
                >
                  Athletes Form
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}
export default SiteNav;
