import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faList,
  faCheck,
  faSearch,
  faHamburger,
} from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

class StateManger {}

class Home extends React.Component {
  state = new StateManger();

  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    // set the state
  };

  openNewListForm = () => {
    Swal.fire({
      icon: "info",
      title: "Create a new List:",
      input: "text",
      showCancelButton: true,
    }).then((result) => {
      if (result.value) {
        // send data to backend
        Swal.fire({
          icon: "success",
          text: "Your list has been created!",
          title: "List Created!",
        });
      }
    });
  };

  render = () => {
    return (
      <>
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

        <hr className="m-2" />
        {/* cards containing items */}
        <div class="card-deck">
          <div className="card">
            <div className="card-body">
              <h6>No Tasks</h6>
            </div>
            <div className="card-footer">
              <strong>Personal</strong>
              <p className="m-0 text-muted">
                <small>On this computer</small>
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <ul>
                <li>item 1</li>
                <li>item 2</li>
                <li>item 3</li>
                <li>item 4</li>
              </ul>
            </div>
            <div className="card-footer">
              <strong>Personal</strong>
              <p className="m-0 text-muted">
                <small>On this computer</small>
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h6>No Tasks</h6>
            </div>
            <div className="card-footer">
              <strong>Personal</strong>
              <p className="m-0 text-muted">
                <small>On this computer</small>
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h6>No Tasks</h6>
            </div>
            <div className="card-footer">
              <strong>Personal</strong>
              <p className="m-0 text-muted">
                <small>On this computer</small>
              </p>
            </div>
          </div>
        </div>
      </>
    );
  };
}

export default Home;
