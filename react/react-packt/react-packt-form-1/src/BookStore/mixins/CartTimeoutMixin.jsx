const CartTimeoutMixin = {

  componentWillMount() {
    this.setInterval(this.decrementCartTimer, 1000);
  },

  decrementCartTimer() {
    console.log('decrementCartTimer');
    let {cartTimeout} = this.state;
    if (cartTimeout === 0) {
      this.props.alertCartTimeout();
      return;
    }
    cartTimeout = cartTimeout - 1;
    this.setState({cartTimeout: cartTimeout});
  },

  componentWillUnmount() {
    this.props.updateCartTimeout(this.state.cartTimeout);
  }

};

module.exports = CartTimeoutMixin;
