import React from "react";

class StateManger {}

class TodoDetail extends React.Component {
  state = new StateManger();

  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    // set the state
  };

  render = () => {
    return <>Todo</>;
  };
}

export default TodoDetail;
