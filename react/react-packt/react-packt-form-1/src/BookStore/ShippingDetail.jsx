import React from 'react';

const ShippingDetail = React.createClass({

  getInitialState() {
    return ({
      fullName: '',
      contactNumber: '',
      shippingAddress: '',
      error: false
    });
  },

  _handleChange(event, attribute) {
    let newState = this.state;
    newState[attribute] = event.target.value;
    this.setState(newState);
  },

  _renderError() {
    return(
      <div className='alert alert-danger'>{this.state.error}</div>
    )
  },

  _validateInput() {
    const{fullName, contactNumber, shippingAddress} = this.state;
    let error = false;
    if (fullName === '') {
      error = 'Le nom est obligatoire';
    } else if (contactNumber === '') {
      error = 'Le numéro est obligatoire';
    } else if (shippingAddress === '') {
      error = 'L\'adresse est obligatoire';
    }
    this.setState({error: error});
    return !error;
  },

  _handleSubmit(event) {
    event.preventDefault();
    if (this._validateInput()) {
      this.props.updateFormData({
        fullName: this.state.fullName,
        contactNumber: this.state.contactNumber,
        shippingAddress: this.state.shippingAddress
      });
    }
  },

  render() {
    const{fullName, contactNumber, shippingAddress, error} = this.state;
    return(
      <div>
        <h3>Enter your shipping informations.</h3>
        {error && this._renderError()}
        <div style={{width: 200}}>
          <form name="shipping-form" onSubmit={this._handleSubmit}>
            <div className="form-group">
              <input className="form-control" placeholder="Full name" value={fullName} onChange={(event) => this._handleChange(event, 'fullName')}/>
            </div>
            <div className="form-group">
              <input className="form-control" placeholder="Contact number" value={contactNumber} onChange={(event) => this._handleChange(event, 'contactNumber')} />
            </div>
            <div className="form-group">
              <input className="form-control" placeholder="Shipping adress" value={shippingAddress} onChange={(event) => this._handleChange(event, 'shippingAddress')} />
            </div>
            <input type="submit" value="valider" className='btn btn-success'/>
          </form>
        </div>
      </div>
    );
  }

});

module.exports = ShippingDetail;
