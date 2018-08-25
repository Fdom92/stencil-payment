![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

# wc-payment

wc-payment is a web component built with [Stencil](https://stenciljs.com/) that allows you to use the [Payment Request API](https://developers.google.com/web/fundamentals/discovery-and-monetization/payment-request/).

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

## Using this component

### Script tag

- Put `<script src='https://unpkg.com/stencil-payment@latest/dist/payment.js'></script>` in the head of your index.html
- Then you can use the element like this:
```html
<wc-payment>
    Pay
</wc-payment>
```

### Node Modules
- Run `npm install stencil-payment --save`
- Put a script tag similar to this `<script src='node_modules/stencil-payment/dist/payment.js></script>` in the head of your index.html
- Then you can use the element like this:
```html
<wc-payment>
    Pay
</wc-payment>
```

### In a stencil-starter app
- Run `npm install stencil-payment --save`
- Add `{ name: 'stencil-payment' }` to your [collections](https://github.com/ionic-team/stencil-starter/blob/master/stencil.config.js#L5)
- Then you can use the element like this:
```html
<wc-payment>
    Pay
</wc-payment>
```

## Parameters

### methodData

You need to pass the list of payment methods:

```js
var methodData = [
  {
    supportedMethods: ["visa", "mastercard"]
  }
]
```

At the moment payment api only accept this cards:

- amex
- diners
- discover
- jcb
- maestro
- mastercard
- unionpay
- visa

### details

You need to pass the details of the transaction, an object with displayItems and the total object with the final value:

```js
var details = {
  displayItems: [
    {
      label: "Original donation amount",
      amount: { currency: "USD", value : "65.00" }, // US$65.00
    },
    {
      label: "Friends and family discount",
      amount: { currency: "USD", value : "-10.00" }, // -US$10.00
      pending: true // The price is not determined yet
    }
  ],
  total:  {
    label: "Total",
    amount: { currency: "USD", value : "55.00" }, // US$55.00
  }
}
```

### options

You can also get the email address, phone number or name of a user when configuring the options object:

```js
  var options = {
    requestShipping: true,
    requestPayerEmail: true,
    requestPayerPhone: true,
    requestPayerName: true
  };
```

## Events

### paymentFailed

You can listen to this event to know when the payment was unsucessfull:

```js
element = document.querySelector('wc-payment');
element.addEventListener("paymentFailed", () => {});
```

### paymentSucceeded

You can listen to this event to know when the payment was sucessfull:

```js
element = document.querySelector('wc-payment');
element.addEventListener("paymentSucceeded", () => {});
```

## Methods

### show

You can show the payment request anytime with the `show` method like this:

```js
element = document.querySelector('wc-payment');
element.show();
```

This way you can bind this function to your own pay button or wherever you want.

### abort

You can abort the transaction with the `abort` method anytime due to some error.

```js
element = document.querySelector('wc-payment');
element.abort();
```
