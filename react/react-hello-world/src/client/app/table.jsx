import React from 'react';

const MyTable = React.createClass({
  render: function() {
    const rows = this.props.data.map(function(row, i){
      return <tr key={i}>
        <td>{row.when}</td>
         <td>{row.who}</td>
         <td>{row.description}</td>
      </tr>
    });

    const headings = this.props.headings.map(function(heading, i){
      return <th key={i}>{heading}</th>
    });

    return (
      <table>
        <thead>{headings}</thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
});
export default MyTable;
