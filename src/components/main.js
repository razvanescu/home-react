import React, { Component } from "react";
import Form from "../Form/forms";

class Main extends Component {
  state = {
    characters : [
        {
          name: "CharlieMM",
          job: "Janitor",
        },
        {
          name: "Mac",
          job: "Bouncer",
        },
        {
          name: "Dee",
          job: "Aspring actress",
        },
        {
          name: "Dennis",
          job: "Bartender",
        },
      ],
    colors: [],
  };

  render() {
    return (
      <div>
        OOOOLLLAAA !!!
        <div>FFFF</div>
        <Form />
      </div>
    );
  }
}

export default Main;
