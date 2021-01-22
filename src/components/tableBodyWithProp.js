import React from "react";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
        <th></th>
      </tr>
    </thead>
  );
};

const TableBody = (props) => {
  const rows = props.characterData.characters.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td>
          <button onClick={() => props.removeCharacter(index)}>Delete</button>
        </td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
};

const TableSimpleCompoWithProp = (props) => {
  const { characterData, ccData } = props;

  return (
    <div>
      <span>Simple Component table</span>
      <table>
        <TableHeader></TableHeader>
        <TableBody
          characterData={characterData}
          ttData={ccData}
          removeCharacter={props.removeCharacter}
        ></TableBody>
      </table>
    </div>
  );
};

class TableBodyWithProp extends React.Component {
  render() {
    const characterData = this.props.characterData;
    const { ccData } = this.props;

    return (
      <div>
        <div>
          Some Data on parent Component
          <span></span>
        </div>
        Table with props;
        <table>
          <TableHeader />
          <TableBody
            characterData={characterData}
            ttData={ccData}
            removeCharacter={this.props.removeCharacter}
          />
        </table>
        <div>
          <TableSimpleCompoWithProp
            characterData={characterData}
            ttData={ccData}
            removeCharacter={this.props.removeCharacter}
          />
        </div>
      </div>
    );
  }
}

export default TableBodyWithProp;
