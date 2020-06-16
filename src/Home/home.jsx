import React from "react";
import Swal from "sweetalert2";
import HomeNavbar from "../Navigation/HomeNavbar";

class StateManager {}

class Home extends React.Component {
  state = new StateManager();

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
        <HomeNavbar />
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
