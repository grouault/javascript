import React from 'react';

const Confirmation = React.createClass({

  _handleSubmit(event) {
      event.preventDefault();
      this.props.updateFormData({});
  },

  render() {
    const {formValues} = this.props;
    return (
      <div className='confirmation'>
        <h3>Etes vous sûr de vouloir confirmer ces données</h3>
        <div className='data'>
          <form className='confimation-form' onSubmit={this._handleSubmit}>
            <div>
              <strong>Identité</strong> : {formValues.fullName}
            </div>
            <div>
              <strong>Adresses</strong> : {formValues.shippingAddress}
            </div>
            <div>
              <strong>Téléphone</strong> : {formValues.contactNumber}
            </div>
            <div>
              <strong>Livres sélectionnés</strong> : {formValues.selectedBooks}
            </div>
            <button className='btn btn-success'>Confirmer</button>
          </form>
        </div>
      </div>
    );
  }

});

module.exports = Confirmation;
