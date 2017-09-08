import { Component, Prop } from '@stencil/core';


@Component({
  tag: 'st-payment',
  styleUrl: 'st-payment.scss'
})
export class StPayment {

  @Prop() methodData: any; // required payment method data
  @Prop() details: any;    // required information about transaction
  @Prop() options: any;    // optional parameter for things like shipping, etc.

  doPayment() {
    let request = new PaymentRequest(
      this.methodData,
      this.details,
      this.options
    );

    request.show().then(function(paymentResponse) {
      paymentResponse.complete("success");
    }).catch(function(err) {
      console.error("Uh oh, something bad happened", err.message);
    });
  }

  render() {
    return (
      <div>
        <button>Buy</button>
      </div>
    );
  }
}