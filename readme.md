# st-payment

st-payment is a web component built with [Stencil](https://stenciljs.com/) that allows you to use the Payment request API.

## How to use

First of all you need at this to your index file:

```HTML
<script src="https://storage.googleapis.com/prshim/v1/payment-shim.js"/>
```

Then you need to pass the method data, at the moment payment api only accept this cards:

- amex
- diners
- discover
- jcb
- maestro
- mastercard
- unionpay
- visa

Next you need to pass the details of the transaction, an object with displayItems and total.

displayItems is an array with the items to buy like this:

```
[
    {
        label: "Name of the item or product",
        amount: { currency: "USD", value : "55.00" }
    },
    {
        label: "Name of the item or product",
        amount: { currency: "USD", value : "55.00" }
    }
}
```

And the total a single object with the final value:
```
{
    label: "Total",
    amount: { currency: "USD", value : "100.00" }
}
```

The last parameter, `timeout` its just to pass the minutes to cancel the request.

## Demo

```
@Component({
  tag: 'demo',
  styleUrl: 'demo.scss'
})
export class StPayment {

    @State methodData = [{ supportedMethods: ["visa", "mastercard"]}];
    @State details = {
        displayItems: [{
            label: "Original donation amount",
            amount: { currency: "USD", value : "65.00" }, // US$65.00
        },
        {
            label: "Friends and family discount",
            amount: { currency: "USD", value : "-10.00" }, // -US$10.00
            pending: true // The price is not determined yet
        }],
        total: {
            label: "Total",
            amount: { currency: "USD", value : "55.00" }, // US$55.00
        }
    };
    @State options = {}
    @State timeout = 20

  render() {
    return (
      <st-payment
      methodData={this.methodData}
      details={this.details}
      options={this.options}
      timeout={this.timeout}
      >
      </st-payment>
    );
  }
}
```

