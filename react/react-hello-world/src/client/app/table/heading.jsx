import React from 'react';

const Heading = React.createClass({
  render: function() {
    const heading = this.props.heading;
    const headingStyle = {fontSize:'19px',backgroundColor:'#ffa'};
    return (
      <th style={headingStyle}>{heading}</th>
    );
  }
});

export default Heading;
