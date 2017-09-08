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
    // Create Payment request
    let request = new PaymentRequest(
      this.methodData,
      this.details,
      this.options
    );

    request.show().then(function(paymentResponse) {
      let paymentData = {
        // payment method string, e.g. “visa”
        method: paymentResponse.methodName,
        // payment details as you requested
        details: paymentResponse.details
      };
      console.log('Payment success', paymentData);
      paymentResponse.complete("success");
    }).catch(function(err) {
      console.error("Uh oh, something bad happened", err.message);
    });

    // Add some timeout to abort request
    let paymentTimeout = window.setTimeout(function() {
      window.clearTimeout(paymentTimeout);
      request.abort().then(function() {
        console.log(`Payment timed out after ${this.timeout} minutes.`);
      }).catch(function() {
        console.log('Unable to abort.');
      });
    }, this.timeout * 60 * 1000);
  }

  render() {
    return (
      <div>
        <button onClick={() => this.doPayment()}>
          Buy
        </button>
      </div>
    );
  }
}