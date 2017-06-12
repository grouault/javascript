import React from 'react';

const InputCheck = React.createClass({

  getInitialState(){
    return({
      checkValue: ''
    });
  },

  handleChange(event){
    console.log('handleCheck - checked : ', event.target.checked);
    this.setState({checkValue: event.target.value});
    if (event.target.checked) {
      console.log(event.target.value + ' is checked');
    } else {
      console.log(event.target.value +  ' is not checked');
    }
  },

  render(){
    const {checkValue} = this.state;
    console.log('checkValue', checkValue);
    return(
      <div>
        <div className='checkbox'>
          <label>
            <input type="checkbox" value='titi' onChange={this.handleChange} />
            <span>Titi</span>
          </label>
        </div>
        <div className='checkbox'>
          <label>
            <input type="checkbox" value='tutu' onChange={this.handleChange} />
            <span>Tutu</span>
          </label>
        </div>
      </div>

    );
  }

});

module.exports = InputCheck;
