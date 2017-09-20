![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

# st-payment

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

## Using this component

### Script tag

- Put `<script src='https://unpkg.com/stencil-payment@0.0.3/dist/stpayment.js'></script>` in the head of your index.html
- Then you can use the element `<st-payment>` anywhere in your template, JSX, html etc

### Node Modules
- Run `npm install stencil-payment --save`
- Put a script tag similar to this `<script src='node_modules/stencil-payment/dist/stpayment.js></script>` in the head of your index.html
- Then you can use the element `<st-payment>` anywhere in your template, JSX, html etc

### In a stencil-starter app
- Run `npm install stencil-payment --save`
- Add `{ name: 'stencil-payment' }` to your [collections](https://github.com/ionic-team/stencil-starter/blob/master/stencil.config.js#L5)
- Then you can use the element `<st-payment>` anywhere in your template, JSX, html etc

## Docs

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