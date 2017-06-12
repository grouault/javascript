import React from 'react';

import SetIntervalMixin from './mixins/SetIntervalMixin';
import CartTimeoutMixin from './mixins/CartTimeoutMixin';

const DeliveryDetail = React.createClass({

  mixins: [SetIntervalMixin, CartTimeoutMixin],
  getInitialState() {
    return({
      deliveryOptions: 'primary',
      cartTimeout: this.props.cartTimeout
    });
  },

  _handleChange(event) {
    this.setState({deliveryOptions: event.target.value});
  },

  _handleSubmit(event) {
    event.preventDefault();
    const formData = {
      deliveryOptions: this.state.deliveryOptions
    };
    this.props.updateFormData(formData);
  },

  render() {
    const {deliveryOptions, cartTimeout} = this.state;
    const minutes = Math.floor(cartTimeout / 60);
    const seconds = cartTimeout - minutes * 60;
    console.log('minutes = ', minutes);
    console.log('seconds = ', seconds);
    return(
      <div>
        <h3>Choose your delivery options here :</h3>
        <div>
          <form name="delivery-detail" onSubmit={this._handleSubmit} >

            <div className='radio'>
              <label>
                <input type="radio" checked={deliveryOptions === 'primary'} value="primary" onChange={this._handleChange} />
                <span>primary</span>
              </label>
            </div>

            <div className='radio'>
              <label>
                <input type="radio" checked={deliveryOptions === 'normal'} value="normal" onChange={this._handleChange} />
                <span>normal</span>
              </label>
            </div>

            <input type='submit' value='Valider' className='btn btn-success' />

          </form>
        </div>
        <div className='well'>
          <span className="glyphicon glyphicon-time" aria-hidden="true"></span> You have {minutes} Minutes, {seconds} Seconds, before confirming order
        </div>
      </div>
    )
  }

});

module.exports = DeliveryDetail;
