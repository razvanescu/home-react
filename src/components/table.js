import React from "react";
import TableBodyWithProp from "./tableBodyWithProp";
import HelloReact from "./helloReact";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
  );
};

const TableBody = () => {
  return (
    <tbody>
      <tr>
        <td>CharlieBBBB</td>
        <td>Janitor</td>
      </tr>
      <tr>
        <td>Mac</td>
        <td>Bouncer</td>
      </tr>
      <tr>
        <td>Dee</td>
        <td>Aspiring actress</td>
      </tr>
      <tr>
        <td>Dennis</td>
        <td>Bartender</td>
      </tr>
    </tbody>
  );
};

const Hello = () => {
  return <HelloReact />;
};

class Table extends React.Component {
  state = {
    users: [
      {
        fName: "1 First NAME",
        lName: "1 LAST NAME",
      },
      {
        fName: "2 First NAME",
        lName: "2 LAST NAME",
      },
      {
        fName: "3 First NAME",
        lName: "3 LAST NAME",
      },
      {
        fName: "4 First NAME",
        lName: "4 LAST NAME",
      },
    ],

    characters : [
      {
        name: "CharlieTable",
        job: "JanitorTable",
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
    ]

  };

  removeCharacter = (index) => {
    const {characters} = this.state
  
    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      }),
    })
  }

  render() {
    const {characters} = this.state;
    const informationLocal = {
      name: "Razvan-44",
      age: 44,
    };

    const agData = {
      characters: characters,
      informationLocal: informationLocal,
    };

    return (
      <div>
        <div className="container">
          <table>
            <TableHeader />
            <TableBody />
          </table>
          <Hello />
        </div>
        <div>
          <TableBodyWithProp
            characterData={agData}
            ccData={agData.informationLocal}
            name="Razva"
            nameUser="RAzvanUSer"
            nameData={agData.informationLocal.name}
            removeCharacter = {this.removeCharacter}
          ></TableBodyWithProp>
        </div>      
      </div>
    );
  }
}

export default Table;
