import { Component, Prop, State, Method } from '@stencil/core';


@Component({
  tag: 'st-payment'
})
export class StPayment {

  @State() request    : any; // The request

  @Prop() methodData  : any; // required payment method data
  @Prop() details     : any; // required information about transaction
  @Prop() options     : any; // optional parameter for things like shipping, etc
  @Prop() callback    : any; // callback function to execute after payment
  @Prop() buttonLabel : string = 'Buy';
   
  doPayment() {
    if ('PaymentRequest' in window) {
      this.request = new PaymentRequest(
        this.methodData,
        this.details,
        this.options
      );

      this.show(this.callback);
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
    return (
      <div>
        <button type="button" onClick={() => this.doPayment()}>
          <span>{this.buttonLabel}</span>
        </button>
      </div>
    );
  }
}
