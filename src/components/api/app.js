import React, { Component } from "react";

class App extends Component {
  state = {
    data: [],
  };


  componentDidMount() {
      console.log('Component : DidMount');
    const url =
      'https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*'

    fetch(url)
      .then((result) => result.json())
      .then((result) => {
        this.setState({
          data: result,
        })
      })
  }

  render() {

    console.log('Component : Render');
    const {data} = this.state;
    const result = data.map((entry, index) => {
        return <li key={index}>{entry}</li>
    })

    return <div>
        <span>APP Component React</span>
        <ul>{result}</ul>
    </div>;
  }
}

export default App;
