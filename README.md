# ChargeOver.js React Sample

This project exists to provide a sample of how to use ChargeOver.js with react.

## Quick demo

```shell
$ git clone https://github.com/chargeover/chargeover-js-react-demo.git
$ cd chargeover-js-react-demo
# Open src/components/ChargeOverJS.js and change `instance` and `token`
# to match your credentials before starting!
$ npm start
```

## The important parts

### Adding the script to your project

To add ChargeOver.js to your React project, you first need to load
our JavaScript library. You can do this by adding the following code
to `head` section of the `index.html` file in your React project

```html
    <script src="https://assets.chargeover.com/minify/?g=chargeover.js"></script>
```

### Using ChargeOver.js

To use ChargeOver.js you will first want to create a component, we've
provided one for you in this project. The most important part being 
instantiating the library. To do this we need to use the `componentDidMount`
life-cycle hook.

```javascript
export default class ChargeOverJS extends React.Component {
    componentDidMount() {
        /**
         * You can find this information at:
         * https://YOUR_INSTANCE.chargeover.com/admin/r/devfeature/view/saas.cojs_enabled
         */
        window.ChargeOver.Core.setup({
            'instance': 'example.chargeover.com',
            'token': 'abcdefg1234567' // You can use ENV variables here as well
        });
    }
```

As you can see, in order to reference the library, you need `window.` to prefix references.
