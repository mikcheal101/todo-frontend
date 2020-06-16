import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleUp
} from "@fortawesome/free-solid-svg-icons";
import AppNavbar from "../Navigation/AppNavbar";

class StateManager {}

class TodoDetail extends React.Component {
  state = new StateManager();

    constructor(props) {
        super(props);
    }

    componentDidMount = () => {
        // set the state
    };

    render = () => {
        return (
            <Fragment>
                <AppNavbar />
                <div className="accordion vertical">
                    <ul>
                        <li className="card">
                            <input className="box" type="checkbox" id="checkbox-1" name="checkbox-accordion" />
                            <label className="list-label" htmlFor="checkbox-1">
                                <input type="checkbox" />
                                Title&nbsp;One
                                <FontAwesomeIcon icon={faAngleDown} />
                                <FontAwesomeIcon icon={faAngleUp} />
                            </label>
                            <div className="content">
                                <form>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputEmail4">Notes</label>
                                            <textarea className="form-control" rows="5"></textarea>
                                        </div>
                                        <div className="form-row col-md-6">
                                            <div className="form-group col-md-12">
                                                <label htmlFor="inputState">Priority</label>
                                                <select id="inputState" className="form-control">
                                                    <option selected>High</option>
                                                    <option>...</option>
                                                </select>
                                            </div>
                                            <div className="form-group col-md-12">
                                                <label htmlFor="inputState">Priority</label>
                                                <select id="inputState" className="form-control">
                                                    <option selected>High</option>
                                                    <option>...</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-danger" style={{ float: "right" }}>Delete</button>
                                </form>
                            </div>
                        </li>
                        <li className="card">
                            <input className="box" type="checkbox" id="checkbox-2" name="checkbox-accordion" />
                            <label className="list-label" htmlFor="checkbox-2">
                                <input type="checkbox" />
                                Title&nbsp;Two
                                <FontAwesomeIcon icon={faAngleDown} />
                                <FontAwesomeIcon icon={faAngleUp} />
                            </label>
                            <div className="content">
                                <form>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputEmail4">Notes</label>
                                            <textarea className="form-control"></textarea>
                                        </div>
                                        <div className="form-row col-md-6">
                                            <div className="form-group col-md-12">
                                                <label htmlFor="inputState">Priority</label>
                                                <select id="inputState" className="form-control">
                                                    <option selected>High</option>
                                                    <option>...</option>
                                                </select>
                                            </div>
                                            <div className="form-group col-md-12">
                                                <label htmlFor="inputState">Priority</label>
                                                <select id="inputState" className="form-control">
                                                    <option selected>High</option>
                                                    <option>...</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-danger" style={{ float: "right" }}>Delete</button>
                                </form>
                            </div>
                        </li>
                        <li className="card">
                            <input className="box" type="checkbox" id="checkbox-3" name="checkbox-accordion" />
                            <label className="list-label" htmlFor="checkbox-3">
                                <input type="checkbox" />
                                Title&nbsp;Three
                                <FontAwesomeIcon icon={faAngleDown} />
                                <FontAwesomeIcon icon={faAngleUp} />
                            </label>
                            <div className="content">
                                <form>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputEmail4">Notes</label>
                                            <textarea className="form-control"></textarea>
                                        </div>
                                        <div className="form-row col-md-6">
                                            <div className="form-group col-md-12">
                                                <label htmlFor="inputState">Priority</label>
                                                <select id="inputState" className="form-control">
                                                    <option selected>High</option>
                                                    <option>...</option>
                                                </select>
                                            </div>
                                            <div className="form-group col-md-12">
                                                <label htmlFor="inputState">Priority</label>
                                                <select id="inputState" className="form-control">
                                                    <option selected>High</option>
                                                    <option>...</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-danger" style={{ float: "right" }}>Delete</button>
                                </form>
                            </div>
                        </li>
                        <li className="card">
                            <input className="box" type="checkbox" id="checkbox-4" name="checkbox-accordion" />
                            <label className="list-label" htmlFor="checkbox-4">
                                <input type="checkbox" />
                                Title&nbsp;Four
                                <FontAwesomeIcon icon={faAngleDown} />
                                <FontAwesomeIcon icon={faAngleUp} />
                            </label>
                            <div className="content">
                                <form>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputEmail4">Notes</label>
                                            <textarea className="form-control"></textarea>
                                        </div>
                                        <div className="form-row col-md-6">
                                            <div className="form-group col-md-12">
                                                <label htmlFor="inputState">Priority</label>
                                                <select id="inputState" className="form-control">
                                                    <option selected>High</option>
                                                    <option>...</option>
                                                </select>
                                            </div>
                                            <div className="form-group col-md-12">
                                                <label htmlFor="inputState">Priority</label>
                                                <select id="inputState" className="form-control">
                                                    <option selected>High</option>
                                                    <option>...</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-danger" style={{ float: "right" }}>Delete</button>
                                </form>
                            </div>
                        </li>
                    </ul>
                </div>
            </Fragment>
        )
    };
}

export default TodoDetail;
