import { Component, Prop, State, Method } from '@stencil/core';


@Component({
  tag: 'st-payment'
})
export class StPayment {

  // The request
  @State() request    : any;

  // required payment method data
  @Prop() methodData  : any = [{
      supportedMethods: ["visa", "mastercard"]
  }]; 

  // required information about transaction
  @Prop() details     : any;

  // optional parameter for things like shipping, etc
  @Prop() options     : any = {};

  // callback function to execute after payment
  @Prop() callback    : any;
   
  @Method()
  pay() {
    if ('PaymentRequest' in window) {
      if(this.details) {
        this.request = new PaymentRequest(
          this.methodData,
          this.details,
          this.options
        );
  
        this.show(this.callback);
      } else {
        console.error('Not provided the details of the transaction');
      }
    } else {
        console.log('Payment Request API not supported');
    }
  }

  show(cb) {
    this.request.show()
    .then(function(paymentResponse) {
      cb && cb();
      paymentResponse.complete("success");
    }).catch(function(err) {
      console.error(err.message);
    });
  }

  @Method()
  abort(ok) {
    if (this.request)
      this.request.abort()
      .then(ok)
      .catch(function(err) {
        console.error(err.message);
      });
  }

  render() {
    return;
  }
}
