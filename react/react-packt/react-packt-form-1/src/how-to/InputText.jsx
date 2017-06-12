import React from 'react';

var InputText = React.createClass({

  getInitialState() {
    console.log('initial-state');
    return (
      { fullName: 'test' }
    );
  },

  handleChange(event) {
    console.log('change, event=', event.target);
    this.setState({fullName: event.target.value});
  },

  render() {
    console.log('state = ', this.state);
    return (
        <input type="text" value={this.state.fullName} onChange={this.handleChange} />
    );
  }

});

module.exports = InputText;
