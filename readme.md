# st-payment

![Logo](./docs/logo.svg)

st-payment is a web component built with [Stencil](https://stenciljs.com/) that allows you to use the [Payment Request API](https://developers.google.com/web/fundamentals/discovery-and-monetization/payment-request/).

![Demo](./docs/video.gif)

## Getting Started

To try this component:

```bash
git clone git@github.com:Fdom92/stencil-payment.git
cd my-app
git remote rm origin
```

and run:

```bash
npm install
npm start
```

## How to use

First of all you have to add this to your head tag on index file:

```HTML
<script src="https://storage.googleapis.com/prshim/v1/payment-shim.js"/>
```

### Parameters

Now, first of all, you need to pass the method data, at the moment payment api only accept this cards:

- amex
- diners
- discover
- jcb
- maestro
- mastercard
- unionpay
- visa

Like this one:

```
[
  {
    supportedMethods: ["visa", "mastercard"]
  }
]
```

Next you need to pass the details of the transaction, an object with displayItems like this:

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

And the total object with the final value:

```
{
    label: "Total",
    amount: { currency: "USD", value : "100.00" }
}
```

And the last parameters, `callback` its to make some callback after the success.

### Methods

There is a public method `abort` to call if you want to abort the request due to some error. You can pass a callback to be executed after abort.

You can call it like this:

```
const payment = document.querySelector('st-payment');
payment.abort(callback);
```
Then this function will check if there is a request and then will execute the abort method.

## Browser Support

![Browser Suport](/docs/browser-support.png)