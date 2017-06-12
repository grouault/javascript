import React from 'react';

const Success = React.createClass({

  _getNumberOfDays() {
    let numberOfDays = '1 à 2';
    if (this.props.formValues.deliveryOptions === 'normal') {
      numberOfDays = '3 à 4';
    }
    return numberOfDays;
  },

  render() {
      const {formValues} = this.props;
      return(
        <div>
          <h3>Merci pour votre achat <strong>{formValues.fullName}</strong></h3>
          <div>
          Vous recevrez les livres suivants {formValues.selectedBooks.join(", ")} à votre adresse {formValues.shippingAddress} dans approximativement {this._getNumberOfDays()} jours.
          </div>
        </div>
      );
  }

});

module.exports = Success;
