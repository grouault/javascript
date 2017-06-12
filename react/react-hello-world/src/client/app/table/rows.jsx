import React from 'react';
import Rowline from './rowline.jsx';

const Rows = React.createClass({
  render: function() {
    const rows = this.props.rows.map((row, elt) => {
      return <Rowline key={elt} row={row}/>
    });
    return (
      <tbody>{rows}</tbody>
    );
  }
});

export default Rows;
