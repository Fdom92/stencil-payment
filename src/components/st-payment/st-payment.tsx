import { Component, Prop } from '@stencil/core';


@Component({
  tag: 'st-payment',
  styleUrl: 'st-payment.scss'
})
export class StPayment {

  @Prop() methodData: any; // required payment method data
  @Prop() details: any;    // required information about transaction
  @Prop() options: any;    // optional parameter for things like shipping, etc
  @Prop() timeout: any;    // timeout in minutes to abort the request

  doPayment() {
    if ('PaymentRequest' in window) {
      let request = new PaymentRequest(
        this.methodData,
        this.details,
        this.options
      );
      this.show(request);
    } else {
        console.log('Payment Request API not supported');
    }
  }

  show(request) {
    request.show()
    .then(function(paymentResponse) {
      paymentResponse.complete("success");
    }).catch(function(err) {
      console.error(err.message);
    });
  }

  render() {
    return (
      <div>
        <button class="btn" type="button" onClick={() => this.doPayment()}>
          <span>Buy</span>
        </button>
      </div>
    );
  }
}