import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faList,
  faCheck,
  faSearch,
  faHamburger,
} from "@fortawesome/free-solid-svg-icons";

class HomeNavbar extends Component {
    render = () => {
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <button
                        className="btn btn-secondary btn-sm"
                        onClick={this.openNewListForm}
                        >
                        New List
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

export default  HomeNavbar;