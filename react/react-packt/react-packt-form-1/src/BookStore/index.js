import React from 'react';

import BookList from './BookList';
import ShippingDetail from './ShippingDetail';
import DeliveryDetail from './DeliveryDetail';
import Confirmation from './Confirmation';
import Success from './Success';

var BookStore = React.createClass({

  getInitialState() {
    return({
      currentStep: 0,
      formValues: {}
    })
  },

  updateFormData(formData) {
    const formValues = Object.assign({}, this.state.formValues, formData);
    const nextStep = this.state.currentStep + 1;
    this.setState({
      formValues: formValues,
      currentStep: nextStep,
      cartTimeout: 15*60
    });
  },

  updateCartTimeout(newValue) {
    this.setState({carteTimeOut: newValue});
  },

  alertCartTimeout() {
    this.setState({currentStep: 10});
  },

  render() {
    const {currentStep, formValues, cartTimeout} = this.state;
    console.log('currentStep = ', currentStep);
    switch (currentStep) {
      case 0:
        return <BookList updateFormData={this.updateFormData} />;
      case 1:
        return <ShippingDetail updateFormData={this.updateFormData} />;
      case 2:
        return <DeliveryDetail updateFormData={this.updateFormData} cartTimeout={cartTimeout} updateCartTimeout={this.updateCartTimeout} alertCartTimeout={this.alertCartTimeout} />;
      case 3:
        return <Confirmation formValues={formValues} updateFormData={this.updateFormData} />;
      case 4:
        return <Success formValues={formValues} />;
      case 10:
        return (<div>Votre panier a expiré. Veuiller réessayer.</div>);
      default:
        return <BookList />;
      }
  }

});

module.exports = BookStore;
