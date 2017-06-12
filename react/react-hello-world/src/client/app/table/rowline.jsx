import React from 'react';

const Rowline = React.createClass({

  render: function() {
    const row = this.props.row;
    const rowStyle = {fontSize:'14px',backgroundColor:'#fcb',border:'solid 1px red'};
    return (
      <tr style={rowStyle}>
          <td>{row.when}</td>
           <td>{row.who}</td>
           <td>{row.description}</td>
        </tr>
    );
  }

});

export default Rowline;
