import React from 'react';
import Headings from './headings.jsx';
import Rows from './rows.jsx';

const data = [{ "when": "2 minutes ago",
            "who": "Jill Dupre",
            "description": "Created new account"
          },
          {
            "when": "1 hour ago",
            "who": "Lose White",
            "description": "Added fist chapter"
          },
          {
            "when": "2 hours ago",
            "who": "Jordan Whash",
            "description": "Created new account"
          }];

const headings = ['when','who','description'];

const TableElement = React.createClass({
  render: function() {
    return (
      <table>
        <Headings
          /* Entete du tableau. */
          headings={headings} />
        <Rows
          /* data du tableau. */
          rows={data} />
      </table>
    );
  }
});

export default TableElement;
