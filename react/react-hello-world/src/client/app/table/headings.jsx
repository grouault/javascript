import React from 'react';
import Heading from './heading.jsx';

const Headings = React.createClass({
  render: function() {
    const headings = this.props.headings.map((heading, elt) => {
      return <Heading heading={heading} key={elt} />
    });
    return (
        <thead><tr>{headings}</tr></thead>
    );
  }
});

export default Headings;
