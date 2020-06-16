import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faList,
  faCheck,
  faSearch,
  faHamburger,
} from "@fortawesome/free-solid-svg-icons";

class AppNavbar extends Component {
    render = () => {
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button>Back</button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ position: "absolute",
                    margin: "auto",
                    right: "0",
                    left: "0",
                    justifyContent: "center"
                }}>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <button
                            className="btn btn-secondary btn-sm"
                            onClick={this.openNewListForm}
                            style={{ display: "grid", color: "#495057", backgroundColor: "transparent", border: "none" }}
                            >
                            Personal
                            <span style={{ fontSize: "0.7em" }}>On this computer</span>
                            </button>
                        </li>
                    </ul>
                </div>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="btn btn-light mr-2 btn-sm" to="#">
                        <FontAwesomeIcon icon={faList} />
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="btn btn-light mr-2 btn-sm" to="#">
                        <FontAwesomeIcon icon={faCheck} />
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="btn btn-light mr-2 btn-sm" to="#">
                        <FontAwesomeIcon icon={faSearch} />
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="btn btn-light mr-2 btn-sm" to="#">
                        <FontAwesomeIcon icon={faHamburger} />
                        </Link>
                    </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default AppNavbar;