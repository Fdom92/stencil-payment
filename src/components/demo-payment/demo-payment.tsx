import { Component, State } from '@stencil/core';


@Component({
    tag: 'demo-payment',
    styleUrl: 'demo-payment.scss'
})
export class DemoPayment {

    @State() methodData = [{ supportedMethods: ["visa", "mastercard"]}];
    @State() details = {
        displayItems: [{
            label: "Original donation amount",
            amount: { currency: "USD", value : "65.00" }
        },
        {
            label: "Friends and family discount",
            amount: { currency: "USD", value : "-10.00" }
        }],
        total: {
            label: "Total",
            amount: { currency: "USD", value : "55.00" }
        }
    };
    @State() options = {};
    @State() timeout = 20;

    @State() callback = function () {
        console.log('Payment success!!');
    };

  render() {
    return (
        <div>
            <h2>Check out the new Payment API</h2>
            <st-payment
            methodData={this.methodData}
            details={this.details}
            options={this.options}
            timeout={this.timeout}
            cb={this.callback}
            >
            </st-payment>
        </div>
    );
  }
}